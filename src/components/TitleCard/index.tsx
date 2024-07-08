import './index.css';

const imgMando = require("../../images/mandaloriano.png");

type titleCardProps = {
    title: string,

}

export function TitleCard(props: titleCardProps){
    return(
        <div className="container-img">
            <img src={imgMando} alt="mandaloriano" />
        </div>
    );    
}