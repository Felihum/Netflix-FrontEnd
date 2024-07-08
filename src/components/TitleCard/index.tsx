import { title } from 'process';
import './index.css';

type titleCardProps = {
    title: string,
    releaseYear: number,
    type: string,
    seasons: any,
    image: string,
    description?: string,
    /*setTitle: (title: string) => void,
    setReleaseYear: (releaseYear: number) => void,
    setType: (type: string) => void,
    setSeasons: (seasons: any) => void,
    setImage: (image: string) => void,*/
    onClick: (title: string, releaseYear: number, type: string, seasons: any, image: any, description?: string) => void
}

export function TitleCard(props: titleCardProps){

    /*function setTitleData(){
        props.setTitle(props.title)
    }*/

    return(
        <div className="container-img" onClick={() => props.onClick(props.title, props.releaseYear, props.type, props.seasons, props.image, props.description)}>
            {props.image && (
                <img src={props.image} alt="mandaloriano" />
            )}
        </div>
    );    
}