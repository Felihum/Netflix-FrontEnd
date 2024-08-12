import { useEffect, useState } from "react";
import { ModalPerfil } from "../ModalPerfil";
import "./index.css";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { GetProfileById, profileResponseType } from "../../controllers/ProfilesController";

export function Header(){
    const [modalPerfilOpen, setModalPerfilOpen] = useState<boolean>(false);
    const [profile, setProfile] = useState<profileResponseType>();

    const idProfile = localStorage.getItem("Profile");

    async function fetchProfileData(){
        try{
            if(idProfile !== null){
                const currentProfile = await GetProfileById(+idProfile);

                if(currentProfile !== null){
                    await setProfile(currentProfile);
                }
            }
        }
        catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, []);

    const navigate = useNavigate();

    if(profile !== undefined){
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
                        <img src={profile.image} alt="" />
                    </div>
                </div>
                {modalPerfilOpen ? <div className="div-modal-perfil"><ModalPerfil setModalPerfilOpen={setModalPerfilOpen} /></div> : null}  
            </div>
            
        );
    }
    else{
        return null;
    }
}