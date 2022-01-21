import React from "react";
import "../styles/Gallery.css"
import arrowPrevious from "../assets/images/arrow-left.svg"
import arrowNext from "../assets/images/arrow-right.svg"

class Gallery extends React.Component {

    render() {
        const pictures = this.props.pictures
        return <div className="flat-page__gallery" id="gallery">
            <img className="flat-page__gallery__prev" src={arrowPrevious} alt="image précédente" />
            <img className="flat-page__gallery__next" src={arrowNext} alt="image suivante" />

            {pictures.map((picture, index) =>
                <div className="image-container" id={"container-" + index}>
                    <img className="flat-page__gallery__img" key={"picture-" + index} src={picture} alt="photo du bien immobilier"/>
                </div>
            )}

        </div>
            
    }
}

export default Gallery