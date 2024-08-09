import { TitleCard } from "../../components/TitleCard";
import "./index.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import { GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import { ProfileContext, SelectedProfileContext } from "../..";

const imageLogo = require("../../images/logotipo-da-netflix.jpg");

export function Home(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false);
    const [currentProfile, setCurrentProfile] = useContext(ProfileContext);

    const [title, setTitle] = useState<titleResponseType>();

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

    async function fetchTitles(){
        try{
            const data = await GetAllTitles();

            setTitles(data);
        } catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchTitles();
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
                {
                    title && <TitlePage setIsTitleOpen={setIsTitleOpen} title={title} />
                }
            </div>
        );
    } else{
        return(
            <div className="container-geral">
                <div className="header-section">
                    <Header profile={currentProfile} />
                </div>
                <div className="painel-principal">
                    <img src={imageLogo} alt="logo"/>
                </div>
                <div className="titleSection">
                    <div className="containerSlider">
                        <h3 className="title-label">Principais</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    
                    <div className="containerSlider">
                        <h3 className="title-label">Recomendados para Você</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Ação</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Comédia</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Ficção</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Drama</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}