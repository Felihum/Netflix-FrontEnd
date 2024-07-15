import "./index.css";
import { MdAccountCircle } from "react-icons/md";

type HeaderType = {
    modalPerfilOpen: boolean,
    onPerfilClick: (modalPerfilOpen: boolean) => void
}

export function Header(props: HeaderType){
    return(
        <div className="header-container">
            <div className="btn-section">
                <button>Início</button>
                <button>Descobrir</button>
                <button>Filmes</button>
                <button>Séries</button>
            </div>
            <div className="MyAccount-btn" onClick={() => props.onPerfilClick(!props.modalPerfilOpen)}>
                <MdAccountCircle />
            </div>
        </div>
    );
}