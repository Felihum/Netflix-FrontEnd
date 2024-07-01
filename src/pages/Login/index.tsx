import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button } from "@mui/material";

export function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="container-login">
            <div className="container-form-login">
                <TextField id="standard-basic" color="primary" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} variant="filled" fullWidth />
                <TextField id="standard-basic" color="primary" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} variant="filled" fullWidth />
                <Button color="primary">Enviar</Button>
            </div>
        </div>
    );
}