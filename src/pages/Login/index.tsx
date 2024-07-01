import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import TextField from '@mui/material/TextField';

export function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="container-login">
            <div className="container-image-login">
                <img src="" alt="ola" />
            </div>
            <div className="container-form-login">
                <TextField id="standard-basic" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} variant="outlined" fullWidth />
                <TextField id="standard-basic" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} variant="outlined" fullWidth />
                <button onClick={() => console.log(email)}>Enviar</button>
            </div>
        </div>
    );
}