import { InputAdornment, TextField } from "@mui/material";
import { Header } from "../../components/Header";
import "./index.css";
import { IoIosSearch } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { GetAllTitles, titleResponseType } from "../../controllers/TitlesController";
import { TitleCard } from "../../components/TitleCard";
import { TitlePage } from "../../components/TitlePage";
import { ProfileContext } from "../..";

export function Search(){
    const [titles, setTitles] = useState<titleResponseType[]>([]);
    const [filteredTitles, setFilteredTitles] = useState<titleResponseType[]>([]);

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
    const [currentProfile, setCurrentProfile] = useContext(ProfileContext);

    async function fetchTitles(){
        try{
            const data = await GetAllTitles();

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

    function FilterTitles(searchParam: string){
        if(searchParam != ""){
            let auxTitles = titles.filter((title) => {
                if(title.title.toLowerCase().includes(searchParam)){
                    return true;
                }
                else{
                    return false;
                }
            });
            setFilteredTitles(auxTitles);
        } else{
            setFilteredTitles([]);
        }
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
    }
    else{
        return(
            <div className="container-geral-search">
                <div className="header-section">
                    <Header profile={currentProfile} />
                </div>
                <div className="input-search-container">
                    <TextField 
                        id="standard-basic" 
                        className="input-search" 
                        label="Search" 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IoIosSearch className="icon" />
                                </InputAdornment>
                            ),
                        }} 
                        variant="filled" 
                        onChange={(event) => FilterTitles(event.target.value)}
                    />
                </div>
                <div className="grid-container">
                    <div className="grid-titles">
                        {filteredTitles.map((title) => (
                            <TitleCard key={title.id} title={title.title} gender={title.gender} description={title.description} duration={title.duration} releaseYear={title.releaseYear} type={title.type} seasons={title.seasons} image={title.image} logo={title.logo} onClick={setTitleData} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}