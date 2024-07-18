import "./index.css";

type AvatarCardProps = {
    image: string,
    setSelectedAvatar: (selectedAvatar: boolean) => void,
    setAvatar: (avatar: string) => void
}

export function AvatarCard(props: AvatarCardProps){
    function HandleSelection(){
        props.setSelectedAvatar(true);
        props.setAvatar(props.image);
    }

    return(
        <div className="div-img">
            <div className="img-container" onClick={() => HandleSelection()}>
                <img src={props.image} alt="" />
            </div>
        </div>
    );
}