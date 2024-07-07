import { Link } from "react-router-dom";
import { TitleCard } from "../../components/TitleCard";
import "./index.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageLogo = require("../../images/logotipo-da-netflix.jpg");

const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 7,
    touchMove: false,
    useCSS: true,
    arrows: true,
    
  };

export function Home(){
    return(
        <div className="container-geral">
            <div className="painel-principal">
                <img src={imageLogo}/>
            </div>
            <div className="titleSection">
                <div className="containerTitles">
                    <Slider {...settings}>
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                    </Slider>
                </div>
                <div className="containerTitles">
                    <Slider {...settings}>
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                    </Slider>
                </div>
                <div className="containerTitles">
                    <Slider {...settings}>
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                        <TitleCard />
                    </Slider>
                </div>
            </div>
            
            
            <Link to="login">Ir para Login</Link>
        </div>
    );
}