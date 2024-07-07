import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button } from "@mui/material";
import { PostUsuario } from "../../controllers/UsuariosController";
import { GetAllSubscriptions } from "../../controllers/SubscriptionsController";
import { CadastroForm } from "../../components/CadastroForm";

export function Cadastro(){
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState<string>("");

    const [openModalSub, setOpenModalSub] = useState(false);

    const idSubscription: number = 1;
    
    const navigate = useNavigate();
    
    function Cadastrar(){
        PostUsuario({cpf, email, password, birthday, idSubscription});
        navigate("/login");
    }

    return(
        <CadastroForm />
    );
}