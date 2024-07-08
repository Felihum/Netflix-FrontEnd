import "./index.css"

type TitlePageProps = {
    title: string,
    releaseYear: number,
    description?: string,
    type: string,
    seasons?: any,
    image: any,
    setIsTitleOpen: (isTitleOpen: boolean) => void
}

export function TitlePage(props: TitlePageProps){
    return(
        <div className="containerTitleGeral">
            <div className="image-section">
                <img src={props.image} />
            </div>
            <div className="btn-voltar">
                <button onClick={() => props.setIsTitleOpen(false)}>X</button>
            </div>
            <div className="info-section">
                <div className="titleText">
                    <h1>{props.title}</h1>
                </div>
                <div className="releaseYearText">
                    <p>{props.releaseYear}</p>
                </div>
                <div className="descriptionText">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}