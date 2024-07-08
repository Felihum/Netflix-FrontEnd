import './index.css';
import { useNavigate } from 'react-router-dom';

const imgMando = require("../../images/mandaloriano.png");

type titleCardProps = {
    image: string,

}

export function TitleCard(props: titleCardProps){

    const navigate = useNavigate();

    return(
        <div className="container-img" onClick={() => navigate("title")}>
            {props.image && (
                <img src={`data:image/png;base64,${props.image}`} alt="mandaloriano" />
            )}
        </div>
    );    
}