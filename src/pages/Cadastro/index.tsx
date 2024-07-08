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
    return(
        <CadastroForm />
    );
}