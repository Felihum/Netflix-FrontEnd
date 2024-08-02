import { useEffect, useState } from "react";
import { LeftBarAccount } from "../../components/LeftBarAccount";
import { Subscription } from "../../components/Subscription";
import { SubscriptionCard } from "../../components/SubscriptionCard";
import "./index.css";
import { Button } from "@mui/material";
import { ConfirmModal } from "../../components/ConfirmModal";
import { GetAllSubscriptions, subscriptionResponseType } from "../../controllers/SubscriptionsController";
import { EditUsuario, ExecuteLogin, GetCurrentUsuario } from "../../controllers/UsuariosController";
import { useNavigate } from "react-router-dom";

export function EditSubscription(){
    const [confirmModal, setConfirmModal] = useState(false);
    const [subscriptions, setSubscritpions] = useState<subscriptionResponseType[]>([]);
    const [user, setUser] = useState<any>();
    const [idSubscription, setIdSubscription] = useState<number>(0);

    const navigate = useNavigate();

    async function fetchUser(){
        try{
            const currentUser = await GetCurrentUsuario();
            setUser(currentUser);
        }
        catch(error){
            throw error;
        }
    }

    async function fetchSubscriptions(){
        try{
            const data = await GetAllSubscriptions();
            setSubscritpions(data);
        }
        catch(error){
            throw error;
        }
    }

    async function fetchData(){
        try{
            await fetchUser();
            await fetchSubscriptions();
        }
        catch(error){
            throw error;
        }
    }

    async function SaveData(){
        try{
            await EditUsuario(user.id, user.cpf, user.email, user.password, user.birthday, idSubscription);
            await ExecuteLogin(user.email, user.password);
            navigate("/");
        }
        catch(error){
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="container-edit-subscriptions">
            <LeftBarAccount />
            {
                confirmModal ? 
                    <ConfirmModal onClick={SaveData} setConfirmModal={setConfirmModal} />
                    :
                    null
            }
            <div className="container-subscription-section">
                <div className="subscription-section">
                    <div className="current-sub-info">
                        <h1>Gerenciar assinatura</h1>
                        <p>Assinatura atual: Premium + (R$ 33,23/mês)</p>
                    </div>
                    <div className="sub-list-section">
                        {
                            subscriptions.map((sub) => (
                                sub.id === user.idSubscription ?
                                    <Subscription currentSubscription={true} id={sub.id} title={sub.name} value={sub.value} setConfirmModal={setConfirmModal} setIdSubscription={setIdSubscription} />
                                    :
                                    <Subscription currentSubscription={false} id={sub.id} title={sub.name} value={sub.value} setConfirmModal={setConfirmModal} setIdSubscription={setIdSubscription} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}