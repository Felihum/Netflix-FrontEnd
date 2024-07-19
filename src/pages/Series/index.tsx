import { useEffect, useState } from "react";
import { GetAllMovies, GetAllSeries, GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitleCard } from "../../components/TitleCard";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import "./index.css";

export function Series(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    //const [filteredTitles, setFilteredTitles] = useState<titleResponseType[]>([]);

    const [title, setTitle] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState(0);
    const [description, setDescription] = useState<any>();
    const [type, setType] = useState<string>("");
    const [seasons, setSeasons] = useState<any>();
    const [image, setImage] = useState<any>();
    const [logo, setLogo] = useState<any>();
    const [gender, setGender] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false);

    async function fetchTitles(){
        try{
            const data = await GetAllSeries();

            setTitles(data);
        } catch(error){
            throw error;
        }
    }

    function setTitleData(titleParam: string, releaseYearParam: number, genderParam: string, durationParam: number, typeParam: string, seasonsParam: any, imageParam: any, logoParam: any, descriptionParam?: string){
        setTitle(titleParam);
        setReleaseYear(releaseYearParam);
        setType(typeParam);
        setSeasons(seasonsParam);
        setImage(imageParam);
        setDescription(descriptionParam);
        setDuration(durationParam);
        setGender(genderParam);
        setLogo(logoParam);
        setIsTitleOpen(true);
    }

    useEffect(() => {
        fetchTitles();
    }, []);

    if(isTitleOpen){
        return(
            <div className="container-geral">
                <TitlePage setIsTitleOpen={setIsTitleOpen} duration={duration} gender={gender} title={title} releaseYear={releaseYear} description={description} type={type} seasons={seasons} image={image} logo={logo} />
            </div>
        );
    } else{
        return(
            <div className="container-geral-movies">
                <div className="header-section">
                    <Header />
                </div>
                <div className="title-container">
                    <h1>SERIES</h1>
                </div>
                <div className="grid-container">
                    <div className="grid-titles">
                        {titles.map((title) => (
                            <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} logo={title.logo} onClick={setTitleData} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}