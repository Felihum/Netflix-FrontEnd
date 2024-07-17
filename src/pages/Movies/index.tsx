import { useEffect, useState } from "react";
import { GetAllMovies, GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitleCard } from "../../components/TitleCard";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import "./index.css";

export function Movies(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    //const [filteredTitles, setFilteredTitles] = useState<titleResponseType[]>([]);

    const [title, setTitle] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState(0);
    const [description, setDescription] = useState<any>();
    const [type, setType] = useState<string>("");
    const [seasons, setSeasons] = useState<any>();
    const [image, setImage] = useState<any>();
    const [gender, setGender] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false);

    async function fetchTitles(){
        try{
            const data = await GetAllMovies();

            setTitles(data);
        } catch(error){
            throw error;
        }
    }

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

    useEffect(() => {
        fetchTitles();
    }, []);

    if(isTitleOpen){
        return(
            <div className="container-geral">
                <TitlePage setIsTitleOpen={setIsTitleOpen} duration={duration} gender={gender} title={title} releaseYear={releaseYear} description={description} type={type} seasons={seasons} image={image} />
            </div>
        );
    } else{
        return(
            <div className="container-geral-movies">
                <div className="header-section">
                    <Header />
                </div>
                <div className="title-container">
                    <h1>FILMES</h1>
                </div>
                <div className="grid-container">
                    <div className="grid-titles">
                        {titles.map((title) => (
                            <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} onClick={setTitleData} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}