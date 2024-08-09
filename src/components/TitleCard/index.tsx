import { title } from 'process';
import './index.css';
import { titleResponseType } from '../../controllers/TitlesController';
import { useNavigate } from 'react-router-dom';

type titleCardProps = {
    /*title: string,
    releaseYear: number,
    gender: string,
    duration: string,
    type: string,
    seasons: any,
    image: string,
    logo: string,
    description?: string,
    detailedDescription: string,
    setTitle: (title: string) => void,
    setReleaseYear: (releaseYear: number) => void,
    setType: (type: string) => void,
    setSeasons: (seasons: any) => void,
    setImage: (image: string) => void,*/
    title: titleResponseType,
    onClick: (title: titleResponseType) => void,
    setIsTitleOpen: (isTitleOpen: boolean) => void
}

export function TitleCard(props: titleCardProps){

    const navigate = useNavigate();

    function HandleClick(){
        props.onClick(props.title);
        props.setIsTitleOpen(true);
    }

    return(
        <div className="container-img" onClick={() => HandleClick()}>
            {props.title.image && (
                <img src={props.title.image} alt="mandaloriano" />
            )}
        </div>
    );
}