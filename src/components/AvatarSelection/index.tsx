import Slider from "react-slick";
import "./index.css";
import { ProfileCard } from "../ProfileCard";
import { AvatarCard } from "../AvatarCard";

type AvatarSelectionProps = {
    image: string,
    setSelectedAvatar: (selectedAvatar: boolean) => void,
    setAvatar: (avatar: string) => void
}

export function AvatarSelection(props: AvatarSelectionProps){
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        touchMove: false,
        useCSS: true,
        arrows: true,
    };

    return(
        <div className="container-avatar-selection">
            <div className="slide-section">
                <Slider {...settings}>
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                    <AvatarCard image={props.image} setSelectedAvatar={props.setSelectedAvatar} setAvatar={props.setAvatar} />
                </Slider>
            </div>
        </div>
        
    );
}