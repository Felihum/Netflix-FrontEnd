import "./index.css"

type SubscriptionProps = {
    currentSubscription: boolean,
    id: number,
    title: string,
    value: number,
    setConfirmModal: (confirmModal: boolean) => void,
    setIdSubscription: (idSubscription: number) => void
}

export function Subscription(props: SubscriptionProps){

    function HandleClick(){
        props.setConfirmModal(true);
        props.setIdSubscription(props.id);
    }

    if(props.currentSubscription){
        return(
            <div className="container-current-subscription">
                <h3>Assinatura atual</h3>
                <h2>{props.title}</h2>
                <p>R$ {props.value}</p>
            </div>
        );
    }
    else{
        return(
            <div className="container-subscription" onClick={() => HandleClick()}>
                <h2>{props.title}</h2>
                <p>R$ {props.value}</p>
            </div>
        );
    }
    
}