import { useContext, useEffect, useState } from "react";
import { GetAllMovies, GetAllSeries, GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitleCard } from "../../components/TitleCard";
import { Header } from "../../components/Header";
import "./index.css";

export function Series(){

    const [titles, setTitles] = useState<titleResponseType[]>([]);
    //const [filteredTitles, setFilteredTitles] = useState<titleResponseType[]>([]);

    const [title, setTitle] = useState<titleResponseType>();

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
                        <TitleCard key={title.id} title={title} setTitle={setTitle} />
                    ))}
                </div>
            </div>
        </div>
    );
}