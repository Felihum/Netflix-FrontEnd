import "./index.css";

type ModalPerfilProps = {
    setModalPerfilOpen: (modalPerfilOpen: boolean) => void
}

export function ModalPerfil(props: ModalPerfilProps){
    return(
        <div className="background-modal" onClick={() => props.setModalPerfilOpen(false)}>
            <div className="container-modal-perfil">
                <div className="btn-menu">
                    Conta
                </div>
                <div className="btn-menu">
                    Trocar Perfil
                </div>
                <div className="btn-menu">
                    Editar Perfis
                </div>
                <div className="btn-menu">
                    Sair
                </div>
            </div>
        </div>
    );  
}