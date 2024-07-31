import { Button } from "@mui/material";

type ConfirmModalProps = {
    onClick: () => void,
    setConfirmModal: (confirmModal: boolean) => void
}

export function ConfirmModal(props: ConfirmModalProps){
    return(
        <div className="confirm-modal-background">
            <div className="confirm-modal">
                <h1 className="title-confirm">Salvar alterações?</h1>
                <p>Ao clicar em salvar você irá alterar as informações da sua conta.</p>
                <div className="btn-modal-section">
                    <div className="container-btn-save-confirm">
                        <Button onClick={() => props.onClick()} color="primary">Save</Button>
                    </div>
                    <div className="container-btn-cancel-confirm">
                        <Button onClick={() => props.setConfirmModal(false)} color="primary">Cancelar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}