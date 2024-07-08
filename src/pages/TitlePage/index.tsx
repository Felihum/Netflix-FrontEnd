type TitlePageProps = {
    title: string,
    releaseYear: number,
    description?: string,
    type: string,
    episodes?: any,
}

export function TitlePage(props: TitlePageProps){
    return(
        <div className="containerTitleGeral">
            <div className="image-section">
                <img src="" alt="" />
            </div>
            <div className="info-section">
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <div className="releaseYear">
                    <p>{props.releaseYear}</p>
                </div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}