import { useNavigate } from "react-router-dom";
import "./index.css";
import { LeftBarAccount } from "../../components/LeftBarAccount";

export function Account(){
    const navigate = useNavigate();

    return(
        <div className="container-account">
            <LeftBarAccount />
            <div className="container-info-panel">
                <div className="info-panel">
                    <p>CPF:</p>
                    <div className="info">
                        177.228.277-48
                    </div>
                    <p>Email:</p>
                    <div className="info">
                        felipemedeirosinfo@gmail.com
                    </div>
                    <p>Senha:</p>
                    <div className="info">
                        *********
                    </div>
                    <p>Assinatura:</p>
                    <div className="info">
                        Premium +
                    </div>
                    <p>Data de nascimento:</p>
                    <div className="info">
                        24/04/2005
                    </div>
                </div>
            </div>
        </div>
    );
}