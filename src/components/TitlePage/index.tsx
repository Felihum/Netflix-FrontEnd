import { Button } from "@mui/material";
import "./index.css"
import CSS from "csstype";
import { FaChevronLeft } from "react-icons/fa";
import { Header } from "../Header";
import { titleResponseType } from "../../controllers/TitlesController";

type TitlePageProps = {
    /*title: string,
    releaseYear: number,
    description?: string,
    detailedDescription: string,
    duration: string,
    gender: string,
    type: string,
    seasons?: any,
    image: string,
    logo: string,*/
    title: titleResponseType,
    setIsTitleOpen: (isTitleOpen: boolean) => void
    
}

export function TitlePage(props: TitlePageProps){
    const style: CSS.Properties = {
        backgroundImage: `url(${props.title.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        opacity: 0,
        animation: "opacityGrow 1s forwards",
        boxShadow: "inset 45rem 10px 60rem -30px rgba(0, 0, 0, 1)"
    }

    return(
        <div className="container-geral-title-page">
            <div style={style}>
                <div className="btn-voltar">
                    <button onClick={() => props.setIsTitleOpen(false)}><FaChevronLeft /></button>
                </div>
                <div className="info-section">
                    <div className="imgLogo">
                        <img src={props.title.logo} alt="" />
                    </div>
                    <div className="releaseYearText">
                        <p>{props.title.releaseYear} - {props.title.duration} - {props.title.gender}</p>
                    </div>
                    <div className="descriptionText">
                        <p>{props.title.description}</p>
                    </div>

                    <div className="btn-play-section">
                        <Button className="btn-assistir" variant="contained" color="primary">Assistir</Button>
                        <Button className="btn-trailer" variant="contained" color="primary">Trailer</Button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="detailsSection">
                    <div className="descriptionDetailed">
                        <p>{props.title.detailedDescription}</p>
                    </div>
                    <div className="infoDetailed">
                        <div className="infoContainer">
                            <p>Duração: {props.title.duration}</p>
                            <p>Classificação: {props.title.ageRating}</p>
                            <p>Avaliação: 5</p>
                        </div>
                        <div className="infoContainer">
                            <p>Gênero: {props.title.gender}</p>
                            <p>Data de Lançamento: {props.title.releaseYear}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}

