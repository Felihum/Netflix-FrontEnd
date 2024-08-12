import { Button } from "@mui/material";
import "./index.css"
import CSS from "csstype";
import { FaArrowLeft } from "react-icons/fa6";
import { GetTitlesById, titleResponseType } from "../../controllers/TitlesController";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export function TitlePage(){

    const { idTitle } = useParams();

    let currentTitle: titleResponseType;

    const [title, setTitle] = useState<titleResponseType>();
    const [isTrailerOpen, setIsTrailerOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    async function fetchData(){
        try{
            if(idTitle !== undefined){
                currentTitle = await GetTitlesById(+idTitle);

                if(currentTitle !== undefined){
                    await setTitle(currentTitle);
                    console.log(currentTitle)
                }
            }
        }
        catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(title !== undefined){
        let style: CSS.Properties = {
            backgroundImage: `url(${title.image})`,
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

        if(!isTrailerOpen){
            return(
                <div className="container-geral-title-page">
                    <div style={style}>
                        <div className="header-container">
                            <div className="go-back-btn" onClick={() => navigate("/")}>
                                <FaArrowLeft />
                            </div>
                        </div>
                        <div className="info-section">
                            <div className="imgLogo">
                                <img src={title.logo} alt="" />
                            </div>
                            <div className="releaseYearText">
                                <p>{title.releaseYear} - {title.duration} - {title.gender}</p>
                            </div>
                            <div className="descriptionText">
                                <p>{title.description}</p>
                            </div>
    
                            <div className="btn-play-section">
                                <Button className="btn-assistir" variant="contained" color="primary">Assistir</Button>
                                <Button className="btn-trailer" variant="contained" color="primary" onClick={() => setIsTrailerOpen(true)}>Trailer</Button>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="detailsSection">
                            <div className="descriptionDetailed">
                                <p>{title.detailedDescription}</p>
                            </div>
                            <div className="infoDetailed">
                                <div className="infoContainer">
                                    <p>Duração: {title.duration}</p>
                                    <p>Classificação: {title.ageRating}</p>
                                    <p>Avaliação: 5</p>
                                </div>
                                <div className="infoContainer">
                                    <p>Gênero: {title.gender}</p>
                                    <p>Data de Lançamento: {title.releaseYear}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="container-trailer">
                    <div className="header-container">
                        <div className="go-back-btn" onClick={() => setIsTrailerOpen(false)}>
                            <FaArrowLeft />
                        </div>
                    </div>
                    <div className="video-container">
                        <iframe width="100%" height="100%" src={title.trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            );
        }
    }
    else {
        return null;
    }
}