import { Button } from "@mui/material";
import { LeftBarAccount } from "../../components/LeftBarAccount";
import "./index.css";
import { ConfirmModal } from "../../components/ConfirmModal";
import { useEffect, useState } from "react";
import { DeleteUsuario, GetCurrentUsuario } from "../../controllers/UsuariosController";
import { useNavigate } from "react-router-dom";

export function DeleteAccount(){
    const [confirmModal, setConfirmModal] = useState(false);
    const [user, setUser] = useState<any>();

    const navigate = useNavigate();

    async function DeleteAccount(){
        try{
            await DeleteUsuario(user.id);
            navigate("/login");
        }
        catch(error){
            throw error;
        }
    }

    async function fetchUser(){
        try{
            const currentUser = await GetCurrentUsuario();
            setUser(currentUser);
        }
        catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return(
        <div className="container-delete-account">
            <LeftBarAccount />
            {
                confirmModal ? 
                    <ConfirmModal onClick={DeleteAccount} setConfirmModal={setConfirmModal} />
                    :
                    null
            }
            <div className="modal-delete-container">
                <div className="modal-delete">
                    <div className="label-section">
                        <h1>Deletar Conta:</h1>
                        <p>Ao clicar em Deletar sua conta será excluída permanentemente.</p>
                    </div>
                    
                    <div className="container-btn-delete">
                        <Button onClick={() => setConfirmModal(true)} color="primary">Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}