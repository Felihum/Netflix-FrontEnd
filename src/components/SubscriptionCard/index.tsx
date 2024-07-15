import { PostUsuario } from "../../controllers/UsuariosController";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

type SubscriptionCardProps = {
    id: number,
    cpf: string,
    email: string,
    password: string,
    birthday: string,
    nameSubscription: string,
    valueSubscription: number,
    periodSubscription: string
}

export function SubscriptionCard(props: SubscriptionCardProps){
    const navigate = useNavigate();

    function Cadastrar(){
        let cpf = props.cpf;
        let email = props.email;
        let password = props.password;
        let birthday = props.birthday;
        let idSubscription = props.id;
        let role = "comum";
        
        PostUsuario({cpf, email, password, birthday, role, idSubscription});
        navigate("/login");
    }

    return (
        <div className="SubCard" onClick={() => Cadastrar()}>
            <h2 className="card-title">{props.nameSubscription}</h2>
            <p className="card-value">{props.valueSubscription}</p>
            <p className="card-period">{props.periodSubscription}</p>
        </div>
    )
}