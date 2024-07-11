import { SubscriptionCard } from "../SubscriptionCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button } from "@mui/material";
import { GetAllUsuarios, PostUsuario } from "../../controllers/UsuariosController";
import { GetAllSubscriptions, subscriptionResponseType } from "../../controllers/SubscriptionsController";

export function CadastroForm(){

    async function fetchSubscriptions(){
        try{
            const data = await GetAllSubscriptions();
            setSubscriptions(data);
        }
        catch(error){
            throw error;
        }
    }

    const [openModalSub, setOpenModalSub] = useState(false);

    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState<string>("");
    const [subscriptions, setSubscriptions] = useState<subscriptionResponseType[]>([]);

    useEffect(() => {
        fetchSubscriptions();
    }, []);
    
    if(openModalSub){
        return(
            <div className="container-modal">
                <div className="button-voltar">
                    <button onClick={() => setOpenModalSub(false)}>X</button>
                </div>
                <div className="modalSubscriptions">
                    {subscriptions.map((sub) => (
                        <SubscriptionCard key={sub.id} id={sub.id} cpf={cpf} email={email} password={password} birthday={birthday} nameSubscription={sub.name} valueSubscription={sub.value} periodSubscription={sub.period} />
                    ))}
                </div>
            </div>
            
        )
    } 
    else{
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
                        <Button color="primary" onClick={() => setOpenModalSub(true)}>Cadastre-se</Button>
                    </div>                
                </div>
            </div>
        )
    }
    
}