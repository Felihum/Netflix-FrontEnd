import { GetProfileById } from "../../controllers/ProfilesController";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useContext } from "react";
import { ProfileContext } from "../..";

type ProfileCardProps = {
    id: number,
    image: string,
    name: string,
    route: string,
    type: string
}

export function ProfileCard(props: ProfileCardProps){
    const navigate = useNavigate();
    const [currentProfile, setCurrentProfile] = useContext(ProfileContext);

    async function HandleClick(){
        try{
            const profile = await GetProfileById(props.id);

            await setCurrentProfile(profile);

            navigate("/");
        }
        catch(error){
            throw error;
        }
    }

    if(props.type === "default"){
        return(
            <div className="div-img">
                <div className="img-container" onClick={() => HandleClick()}>
                    <img src={props.image} alt="" />
                </div>
                <div className="name-container">
                    <p>{props.name}</p>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="div-img">
                <div className="img-container" onClick={() => navigate(props.route + `/${props.id}`)}>
                    <img src={props.image} alt="" />
                </div>
                <div className="edit-icon">
                    <MdEdit />
                </div>
                <div className="name-container">
                    <p>{props.name}</p>
                </div>
            </div>
        );
    }
    
}