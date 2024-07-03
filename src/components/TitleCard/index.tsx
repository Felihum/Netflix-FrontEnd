import './index.css';

const imgMando = require("../../images/mandaloriano.png");

export function TitleCard(){
    return(
        <div className="container-img">
            <img src={imgMando} alt="mandaloriano" />
        </div>
    );    
}