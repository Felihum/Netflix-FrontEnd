import "./index.css";
import { useNavigate } from "react-router-dom";

type ModalPerfilProps = {
    setModalPerfilOpen: (modalPerfilOpen: boolean) => void
}

export function ModalPerfil(props: ModalPerfilProps){
    const navigate = useNavigate();

    function LogOut(){
        localStorage.removeItem('token');
        navigate("/login");
    }

    return(
        <div className="background-modal" onClick={() => props.setModalPerfilOpen(false)}>
            <div className="container-modal-perfil">
                <div className="btn-menu">
                    Conta
                </div>
                <div className="btn-menu" onClick={() => navigate("/change-profile")}>
                    Trocar Perfil
                </div>
                <div className="btn-menu">
                    Editar Perfis
                </div>
                <div className="btn-menu" onClick={() => LogOut()}>
                    Sair
                </div>
            </div>
        </div>
    );  
}