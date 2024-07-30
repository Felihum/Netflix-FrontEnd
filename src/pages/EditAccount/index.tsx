import { Button, TextField } from "@mui/material";
import { LeftBarAccount } from "../../components/LeftBarAccount";
import "./index.css";
import { MdAccountBox, MdEmail, MdDateRange } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

export function EditAccount(){
    const [confirmModal, setConfirmModal] = useState(false);

    return(
        <div className="container-edit-data">
            <LeftBarAccount />
            {
                confirmModal ? 
                    <div className="confirm-modal-background">
                        <div className="confirm-modal">
                            <h1 className="title-confirm">Salvar alterações?</h1>
                            <p>Ao clicar em salvar você irá alterar as informações da sua conta.</p>
                            <div className="btn-modal-section">
                                <div className="container-btn-save-confirm">
                                    <Button onClick={() => setConfirmModal(true)} color="primary">Save</Button>
                                </div>
                                <div className="container-btn-cancel-confirm">
                                    <Button onClick={() => setConfirmModal(false)} color="primary">Cancelar</Button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    :
                    null
            }
            
            <div className="form-section-edit-data">
                <div className="form">
                    <div className="inputBox">
                        <MdAccountBox />
                        <TextField id="outlined-basic" className="input-edit-data" value="177.228.277-48" variant="filled" />
                    </div>
                    <div className="inputBox">
                        <MdEmail />
                        <TextField id="outlined-basic" className="input-edit-data" value="felipemedeirosinfo@gmail.com" variant="filled" />
                    </div>
                    <div className="inputBox">
                        <RiLockPasswordFill />
                        <TextField id="outlined-basic" className="input-edit-data" type="password" value="123" variant="filled" />
                    </div>
                    <div className="inputBox">
                        <MdDateRange />
                        <TextField id="outlined-basic" type="date" className="input-edit-data" value="24-04-2005" variant="filled" />
                    </div>
                    <div className="btnBox">
                        <div className="container-btn-save">
                            <Button onClick={() => setConfirmModal(true)} color="primary">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}