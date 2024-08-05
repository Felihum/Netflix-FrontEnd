import { useState } from "react";
import { ProfilesSection } from "../../components/ProfilesSection";
import "./index.css";
import { profileResponseType } from "../../controllers/ProfilesController";

export function EditProfile(){

    return (
        <div className="edit-profile-container">
            <div className="editProfileLabel">
                <h1>Editar Perfil</h1>
            </div>
            <div className="profilesSectionContainer">
                <ProfilesSection route="/edit-profile-form" type="edit"/>
            </div>
        </div>
    );
}