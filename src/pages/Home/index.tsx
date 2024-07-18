import { Link } from "react-router-dom";
import { TitleCard } from "../../components/TitleCard";
import "./index.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import { ModalPerfil } from "../../components/ModalPerfil";
import { GetCurrentUsuario } from "../../controllers/UsuariosController";

const imageLogo = require("../../images/logotipo-da-netflix.jpg");

export function Home(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false);

    const [title, setTitle] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState(0);
    const [description, setDescription] = useState<any>();
    const [type, setType] = useState<string>("");
    const [seasons, setSeasons] = useState<any>();
    const [image, setImage] = useState<any>();
    const [gender, setGender] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);

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

    function setTitleData(titleParam: string, releaseYearParam: number, genderParam: string, durationParam: number, typeParam: string, seasonsParam: any, imageParam: any, descriptionParam?: string){
        setTitle(titleParam);
        setReleaseYear(releaseYearParam);
        setType(typeParam);
        setSeasons(seasonsParam);
        setImage(imageParam);
        setDescription(descriptionParam);
        setDuration(durationParam);
        setGender(genderParam)
        setIsTitleOpen(true);
    }

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
                <TitlePage setIsTitleOpen={setIsTitleOpen} duration={duration} gender={gender} title={title} releaseYear={releaseYear} description={description} type={type} seasons={seasons} image={image} />
            </div>
        );
    } else{
        return(
            <div className="container-geral">
                <div className="header-section">
                    <Header />
                </div>
                <div className="painel-principal">
                    <img src={imageLogo}/>
                </div>
                <div className="titleSection">
                    <div className="containerSlider">
                        <h3 className="title-label">Principais</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title.title} gender={title.gender} duration={title.duration} description={title.description} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    
                    <div className="containerSlider">
                        <h3 className="title-label">Recomendados para Você</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Ação</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Comédia</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Ficção</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="containerSlider">
                        <h3 className="title-label">Drama</h3>
                        <div className="containerTitles">
                            <Slider {...settings}>
                                {shuffleArray(titles).map((title) => (
                                    <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}