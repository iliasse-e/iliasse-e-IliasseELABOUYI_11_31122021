import React from "react";
import Banner from "../components/Banner";
import "../styles/FlatPage.css"
import banner1 from "../assets/images/banner-1.png";
import FlatList from "../components/FlatList";
import Dropdown from "../components/Dropdown";
import Profile from "../components/Owner-profile";
import { withRouter} from "react-router"
import Tags from "../components/Tags";
import Gallery from "../components/Gallery";

class FlatPage extends React.Component {

    
    render() {
        const currentUserId = window.location.pathname.substring(6)
        const currentFlat = this.props.flats.find( ({ id }) => id === currentUserId );
        console.log(currentFlat)
        return <div className="flat-page">
            <Gallery pictures={currentFlat.pictures}/>
            <div className="flat-page__header">
                <div className="title-and-tags">
                    <h2 className="flat-page__title">{currentFlat.title}</h2>
                    <p className="flat-page__subtitle">{currentFlat.location}</p>
                    <div className="tag-container">
                       <Tags tags={currentFlat.tags} />
                    </div>
                </div>
                <Profile flat={currentFlat}/>
                
            </div>
            <div className="flat-page__main">
                <Dropdown description title="description" content={currentFlat.description} className="flat-dropdown"/>
                <Dropdown equipments title="equipements" content={currentFlat.equipments} className="flat-dropdown"/>
            </div>
        </div>
            
    }
}

export default withRouter(FlatPage)