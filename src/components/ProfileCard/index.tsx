import { GetProfileById, profileResponseType } from "../../controllers/ProfilesController";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useContext } from "react";

type ProfileCardProps = {
    id: number,
    image: string,
    name: string,
    route: string,
    type: string
}

export function ProfileCard(props: ProfileCardProps){
    const navigate = useNavigate();

    async function HandleClick(){
        try{
            const profile: profileResponseType = await GetProfileById(props.id);
            await localStorage.setItem("Profile", profile.id.toString());

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