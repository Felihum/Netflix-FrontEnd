import { Button, TextField } from "@mui/material";
import { LeftBarAccount } from "../../components/LeftBarAccount";
import "./index.css";
import { MdAccountBox, MdEmail, MdDateRange } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { EditUsuario, ExecuteLogin, GetCurrentUsuario } from "../../controllers/UsuariosController";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "../../components/ConfirmModal";

export function EditAccount(){
    const [id, setId] = useState<number>(0);
    const [cpf, setCpf] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [birthday, setBirthday] = useState<any>(null);
    const [idSubscription, setIdSubscription] = useState<number>(0);

    const navigate = useNavigate();
    const [confirmModal, setConfirmModal] = useState(false);

    async function fetchData(){
        try{
            const user = await GetCurrentUsuario();

            if(user != null){
                setId(user.id);
                setCpf(user.cpf);
                setEmail(user.email);
                setPassword(user.password);
                setBirthday(user.birthday);
                setIdSubscription(user.idSubscription);
            }
        }
        catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function HandleEdit(){
        try{
            await EditUsuario(id, cpf, email, password, birthday, idSubscription);
            await ExecuteLogin(email, password);
            navigate("/");
        }
        catch(error){
            throw error;
        }
        
    }

    return(
        <div className="container-edit-data">
            <LeftBarAccount />
            {
                confirmModal ? 
                    <ConfirmModal onClick={HandleEdit} setConfirmModal={setConfirmModal} />
                    :
                    null
            }
            
            <div className="form-section-edit-data">
                <div className="form">
                    <div className="inputBox">
                        <MdAccountBox />
                        <TextField id="outlined-basic" className="input-edit-data" value={cpf} onChange={(event) => setCpf(event.target.value)} variant="filled" />
                    </div>
                    <div className="inputBox">
                        <MdEmail />
                        <TextField id="outlined-basic" className="input-edit-data" value={email} onChange={(event) => setEmail(event.target.value)} variant="filled" />
                    </div>
                    <div className="inputBox">
                        <RiLockPasswordFill />
                        <TextField id="outlined-basic" className="input-edit-data" type="password" value={password} onChange={(event) => setPassword(event.target.value)} variant="filled" />
                    </div>
                    <div className="inputBox">
                        <MdDateRange />
                        <TextField id="outlined-basic" type="date" className="input-edit-data" value={birthday} onChange={(event) => setBirthday(event.target.value)} variant="filled" />
                    </div>
                    <div className="btnBox">
                        <div className="container-btn-save">
                            <Button onClick={() => setConfirmModal(true)} color="primary">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}