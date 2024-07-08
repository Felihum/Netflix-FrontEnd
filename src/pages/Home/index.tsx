import { Link } from "react-router-dom";
import { TitleCard } from "../../components/TitleCard";
import "./index.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitlePage } from "../TitlePage";

const imageLogo = require("../../images/logotipo-da-netflix.jpg");



export function Home(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false);

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: titles.length > 5 ? 5 : titles.length,
        slidesToScroll: titles.length > 5 ? 5 : 0,
        touchMove: false,
        useCSS: true,
        arrows: true,
      };

    async function fetchTitltes(){
        try{
            const data = await GetAllTitles();

            console.log(data);

            setTitles(data);
        } catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchTitltes();
    }, []);

    function shuffleArray(array: titleResponseType[]) {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    if(isTitleOpen){
        return(
            <div className="container-geral">
                <TitlePage />
            </div>
        );
    } else{
        return(
            <div className="container-geral">
                <div className="painel-principal">
                    <img src={imageLogo}/>
                </div>
                <div className="titleSection">
                    <div className="containerSlider">
                        <h3 className="title-label">Principais</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard image={title.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    
                    <div className="containerSlider">
                        <h3 className="title-label">Recomendados para Você</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard image={title.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Ação</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard image={title.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Comédia</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard image={title.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Ficção</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard image={title.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Drama</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard image={title.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}