import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./index.css";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../..";

export function LeftBarAccount(){

    const [currentRoute, setCurrentRoute] = useContext(AccountContext)

    function HandleClick(route: string){
        if(route === "/"){
            setCurrentRoute("/edit-data");
            navigate("/")
        }
        else{
            setCurrentRoute(route);
            navigate(route);
        }
    }

    const navigate = useNavigate();

    return(
        <div className="left-bar">
            <div className="btn-left-bar" onClick={() => HandleClick("/")}>
                <IoIosArrowBack />
            </div>
            {
                currentRoute === "/edit-data"
                ?
                    <div className="btn-left-bar-selected" onClick={() => HandleClick("/edit-data")}>
                        Gerenciar conta
                    </div>
                :
                    <div className="btn-left-bar" onClick={() => HandleClick("/edit-data")}>
                        Gerenciar conta
                    </div>
            }
            {
                currentRoute === "/edit-subscription"
                ?
                    <div className="btn-left-bar-selected" onClick={() => HandleClick("/edit-subscription")}>
                        Assinaturas
                    </div>
                :
                    <div className="btn-left-bar" onClick={() => HandleClick("/edit-subscription")}>
                        Assinaturas
                    </div>
            }
            {
                currentRoute === "/delete-account"
                ?
                    <div className="btn-left-bar-selected" onClick={() => HandleClick("/delete-account")}>
                        Deletar conta
                    </div>
                :
                    <div className="btn-left-bar" onClick={() => HandleClick("/delete-account")}>
                        Deletar conta
                    </div>
            }
        </div>
    )
}