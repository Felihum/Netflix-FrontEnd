import './index.css';

const imgMando = require("../../images/mandaloriano.png");

type titleCardProps = {
    image: string,

}

export function TitleCard(props: titleCardProps){


    return(
        <div className="container-img">
            {props.image && (
                <img src={`data:image/png;base64,${props.image}`} alt="mandaloriano" />
            )}
        </div>
    );    
}