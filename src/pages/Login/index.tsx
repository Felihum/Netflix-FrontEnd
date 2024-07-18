import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button } from "@mui/material";
import { ExecuteLogin } from "../../controllers/UsuariosController";

export function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //const [usuario, setUsuario] = useContext(UsuarioContext);

    const navigate = useNavigate();

    async function HandleLogin(){
        try{
            await ExecuteLogin(email, password);
            navigate("/")
        } catch(error){
            throw error;
        }
    }

    return(
        <div className="container-login">
            <div className="container-form-login">
                <h1 className="title">Sign In</h1>
                <div className="container-input">
                    <TextField id="standard-basic" className="input-login" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} variant="filled" fullWidth />
                    <TextField id="standard-basic" className="input-login" type="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} variant="filled" fullWidth />
                    <Link className="link-cadastro" to="/cadastro">Cadastre-se</Link>
                </div>

                <div className="container-btn-enviar">
                    <Button color="primary" onClick={() => HandleLogin()} >Sign in</Button>
                </div>                
            </div>
        </div>
    );
}