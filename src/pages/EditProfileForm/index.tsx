import { useEffect, useState } from "react";
import { AvatarSelection } from "../../components/AvatarSelection";
import "./index.css";
import { AvatarCard } from "../../components/AvatarCard";
import { Button, Switch, TextField } from "@mui/material";
import { EditProfile, GetProfileById, PostProfile, profileDTOType, profileResponseType } from "../../controllers/ProfilesController";
import { useNavigate, useParams } from "react-router-dom";
import { GetCurrentUsuario } from "../../controllers/UsuariosController";

const image1 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDFFF1669F80FAD0A8BF7B42B9F63FA40B1FF6515CC42284A9F4B32141E48F69/scale?width=300&aspectRatio=1.00&format=png";
const image2 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD4BA850B2614BD698458B373A438D7CF70BD4D79EF8FD99667A2C6403CA4CB7/scale?width=300&aspectRatio=1.00&format=png";
const image3 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDFFF1669F80FAD0A8BF7B42B9F63FA40B1FF6515CC42284A9F4B32141E48F69/scale?width=300&aspectRatio=1.00&format=png";
const image4 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDFFF1669F80FAD0A8BF7B42B9F63FA40B1FF6515CC42284A9F4B32141E48F69/scale?width=300&aspectRatio=1.00&format=png";

export function EditProfileForm(){
    const [selectedAvatar, setSelectedAvatar] = useState<boolean>(true);
    const [avatar, setAvatar] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<boolean>(false);

    let profile: profileResponseType;

    const {idProfile} = useParams();

    const navigate = useNavigate();

    async function HandleSave(){
        try{
            const currentUser = await GetCurrentUsuario();
                
            const editedProfile: profileDTOType = {
                image: avatar,
                name: name,
                type: type ? "infantil" : "adulto",
                idUser: currentUser.id,
            }

            if(idProfile !== undefined){
                await EditProfile(+idProfile, editedProfile);
            }

            
            navigate("/change-profile");
        }
        catch(error){
            throw error;
        }   
    }

    async function fetchData(){
        try{
            if(idProfile !== undefined){
                profile = await GetProfileById(+idProfile);

                console.log(profile);

                if(profile !== undefined){
                    await setAvatar(profile.image)
                    await setName(profile.name)
                    if(profile.type === "adulto"){
                        await setType(false);
                    }
                    else{
                        await setType(true);
                    }
                }
                
            }
        }
        catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(!selectedAvatar){
        return(
            <div className="container-add-avatar">
                <div className="btn-cancelar" onClick={() => navigate("/")}>
                    <Button color="primary">Cancelar</Button>
                </div>
                <div className="label-select-avatar">
                    <h1>Selecione o avatar</h1>
                </div>
                <div className="sliders-avatar">
                    <AvatarSelection image={image1} setSelectedAvatar={setSelectedAvatar} setAvatar={setAvatar}/>
                    <AvatarSelection image={image2} setSelectedAvatar={setSelectedAvatar} setAvatar={setAvatar}/>
                    <AvatarSelection image={image3} setSelectedAvatar={setSelectedAvatar} setAvatar={setAvatar}/>
                </div>
            </div>
        );
    } else{
        return(
            <div className="background-add-profile">
                <div className="btn-cancelar-form" onClick={() => navigate("/")}>
                    <Button color="primary">Cancelar</Button>
                </div>
                <div className="container-form-label">
                    <div className="label-add-profile">
                        <h1>Insira os dados</h1>
                    </div>
                    <div className="form-add-profile">
                        <div className="inputs-add-profile">
                            <TextField id="standard-basic" className="input-name-profile" value={name} onChange={(event) => setName(event.target.value)} label="Name" variant="filled" fullWidth />
                            <div className="input-toggle">
                                <p>Modo Infatil</p>
                                {
                                    type
                                    ?
                                        <Switch checked onChange={(event, checked) => setType(checked)} />
                                    :
                                        <Switch onChange={(event, checked) => setType(checked)} />
                                }
                            </div>
                            
                            <div className="container-btn-save">
                                <Button color="primary" onClick={() => HandleSave()}>Save</Button>
                            </div>
                        </div>
                        <div className="div-img">
                            <div className="img-container" onClick={() => setSelectedAvatar(!selectedAvatar)}>
                                <img src={avatar} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}