import { title } from 'process';
import './index.css';
import { titleResponseType } from '../../controllers/TitlesController';
import { useNavigate } from 'react-router-dom';

type titleCardProps = {
    title: titleResponseType,
    setTitle: (title: titleResponseType) => void,
}

export function TitleCard(props: titleCardProps){

    const navigate = useNavigate();

    function HandleClick(){
        props.setTitle(props.title);
        navigate(`/title-page/${props.title.id}`);
    }

    return(
        <div className="container-img" onClick={() => HandleClick()}>
            {props.title.image && (
                <img src={props.title.image} alt="mandaloriano" />
            )}
        </div>
    );
}