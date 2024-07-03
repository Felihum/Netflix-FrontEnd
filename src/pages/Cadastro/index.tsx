import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button } from "@mui/material";
import { PostUsuario } from "../../controllers/UsuariosController";

export function Cadastro(){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState<string>("");
    
    const navigate = useNavigate();
    
    function Cadastrar(){
        PostUsuario({name, cpf, email, password, birthday});
        navigate("/login");
    }

    return(
        <div className="container-cadastro">
            <div className="container-form-cadastro">
                <h1 className="title">Cadastro</h1>
                <div className="container-input-cadastro">
                    <TextField id="standard-basic" className="input-cadastro" label="Cpf" value={cpf} onChange={(event) => setCpf(event.target.value)} variant="filled" fullWidth />
                    <TextField id="standard-basic" className="input-cadastro" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} variant="filled" fullWidth />
                    <TextField id="standard-basic" className="input-cadastro" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} variant="filled" fullWidth />
                    <TextField id="standard-basic" className="input-cadastro" label="Birthday" type="date" value={birthday} onChange={(event) => setBirthday(event.target.value)} variant="filled" fullWidth />
                    <Link className="link-login" to="/login">Sign in</Link>
                </div>

                <div className="container-btn-enviar-cadastro">
                    <Button color="primary" onClick={() => Cadastrar()}>Cadastre-se</Button>
                </div>                
            </div>
        </div>
    );
}