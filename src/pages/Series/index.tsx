import { useContext, useEffect, useState } from "react";
import { GetAllMovies, GetAllSeries, GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitleCard } from "../../components/TitleCard";
import { TitlePage } from "../../components/TitlePage";
import { Header } from "../../components/Header";
import "./index.css";
import { ProfileContext } from "../..";

export function Series(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    //const [filteredTitles, setFilteredTitles] = useState<titleResponseType[]>([]);
    const [currentProfile, setCurrentProfile] = useContext(ProfileContext);

    const [title, setTitle] = useState<titleResponseType>();

    const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false);

    async function fetchTitles(){
        try{
            const data = await GetAllSeries();

            setTitles(data);
        } catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchTitles();
    }, []);

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
            <div className="container-geral-movies">
                <div className="header-section">
                    <Header profile={currentProfile} />
                </div>
                <div className="title-container">
                    <h1>SERIES</h1>
                </div>
                <div className="grid-container">
                    <div className="grid-titles">
                        {titles.map((title) => (
                            <TitleCard key={title.id} title={title} onClick={setTitle} setIsTitleOpen={setIsTitleOpen} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}