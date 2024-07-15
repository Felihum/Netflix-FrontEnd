import { useState } from "react";
import { ModalPerfil } from "../ModalPerfil";
import "./index.css";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";

export function Header(){
    const [modalPerfilOpen, setModalPerfilOpen] = useState<boolean>(false);

    return(
        <div>
            <div className="header-container">
                <div className="btn-section">
                    <div><IoMdHome className="icon"/><p>Inicio</p></div>
                    <div><IoIosSearch className="icon"/><p>Descobrir</p></div>
                    <div><MdLocalMovies className="icon"/><p>Filmes</p></div>
                    <div><PiTelevision className="icon"/><p>Séries</p></div>
                </div>
                <div className="MyAccount-btn" onClick={() => setModalPerfilOpen(!modalPerfilOpen)}>
                    <MdAccountCircle />
                </div>
            </div>
            <div className="modal-menu">
                {modalPerfilOpen ? <ModalPerfil /> : null}  
            </div>
        </div>
        
    );
}