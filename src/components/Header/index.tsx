import { useState } from "react";
import { ModalPerfil } from "../ModalPerfil";
import "./index.css";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export function Header(){
    const [modalPerfilOpen, setModalPerfilOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    return(
        <div className="modal-header">
            <div className="header-container">
                <div className="btn-section">
                    <div onClick={() => navigate("/")}><IoMdHome className="icon"/><p>Inicio</p></div>
                    <div onClick={() => navigate("/login")}><IoIosSearch className="icon"/><p>Descobrir</p></div>
                    <div onClick={() => navigate("/")}><MdLocalMovies className="icon"/><p>Filmes</p></div>
                    <div onClick={() => navigate("/")}><PiTelevision className="icon"/><p>Séries</p></div>
                </div>
                <div className="MyAccount-btn" onClick={() => setModalPerfilOpen(!modalPerfilOpen)}>
                    <MdAccountCircle />
                </div>
            </div>
            {modalPerfilOpen ? <div className="div-modal-perfil"><ModalPerfil setModalPerfilOpen={setModalPerfilOpen} /></div> : null}  
        </div>
        
    );
}