import { useState } from "react";
import { ModalPerfil } from "../ModalPerfil";
import "./index.css";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { profileResponseType } from "../../controllers/ProfilesController";

type HeaderProps = {
    profile: profileResponseType
}

export function Header(props: HeaderProps){
    const [modalPerfilOpen, setModalPerfilOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    return(
        <div className="modal-header">
            <div className="header-container">
                <div className="btn-section">
                    <div onClick={() => navigate("/")}><IoMdHome className="icon"/><p>Inicio</p></div>
                    <div onClick={() => navigate("/search")}><IoIosSearch className="icon"/><p>Descobrir</p></div>
                    <div onClick={() => navigate("/movies")}><MdLocalMovies className="icon"/><p>Filmes</p></div>
                    <div onClick={() => navigate("/series")}><PiTelevision className="icon"/><p>Séries</p></div>
                </div>
                <div className="MyAccount-btn" onClick={() => setModalPerfilOpen(!modalPerfilOpen)}>
                    <img src={props.profile.image} alt="" />
                </div>
            </div>
            {modalPerfilOpen ? <div className="div-modal-perfil"><ModalPerfil setModalPerfilOpen={setModalPerfilOpen} /></div> : null}  
        </div>
        
    );
}