import "./index.css";
import { useNavigate } from "react-router-dom";

type ProfileCardProps = {
    image: string,
    name: string
}

export function ProfileCard(props: ProfileCardProps){
    const navigate = useNavigate();

    return(
        <div className="div-img">
            <div className="img-container" onClick={() => navigate("/")}>
                <img src={props.image} alt="" />
            </div>
            <div className="name-container">
                <p>{props.name}</p>
            </div>
        </div>
    );
}