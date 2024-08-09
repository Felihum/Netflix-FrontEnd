import { title } from 'process';
import './index.css';

type titleCardProps = {
    title: string,
    releaseYear: number,
    gender: string,
    duration: number,
    type: string,
    seasons: any,
    image: string,
    logo: string,
    description?: string,
    detailedDescription: string,
    /*setTitle: (title: string) => void,
    setReleaseYear: (releaseYear: number) => void,
    setType: (type: string) => void,
    setSeasons: (seasons: any) => void,
    setImage: (image: string) => void,*/
    onClick: (title: string, releaseYear: number, gender: string, duration: number, type: string, seasons: any, image: any, logo: any, detailedDescription: string, description?: string) => void
}

export function TitleCard(props: titleCardProps){

    /*function setTitleData(){
        props.setTitle(props.title)
    }*/
   function HandleClick(){
        props.onClick(props.title, props.releaseYear, props.gender, props.duration, props.type, props.seasons, props.image, props.logo, props.detailedDescription, props.description);
        console.log(props.detailedDescription);
   }

    return(
        <div className="container-img" onClick={() => HandleClick()}>
            {props.image && (
                <img src={props.image} alt="mandaloriano" />
            )}
        </div>
    );
}