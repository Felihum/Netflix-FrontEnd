import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./index.css";

export function LeftBarAccount(){
    const navigate = useNavigate();

    return(
        <div className="left-bar">
            <div className="btn-left-bar" onClick={() => navigate("/")}>
                <IoIosArrowBack />
            </div>
            <div className="btn-left-bar" onClick={() => navigate("/edit-data")}>
                Alterar dados
            </div>
            <div className="btn-left-bar" onClick={() => navigate("/edit-subscription")}>
                Assinaturas
            </div>
            <div className="btn-left-bar">
                Deletar conta
            </div>
        </div>
    )
}