import React from "react";
import './Business.css';



class Business extends React.Component {

    render(){
        return (
            <div className="Business" key={this.props.keyId}>
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt=''/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="business-information">
                    <div className="business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state} {this.props.business.zipcode}</p>
                    </div>
                    <div className="business-reviews">
                        <h3>{this.props.business.category[0]['title']}</h3>
                        <h3 className="rating">{this.props.business.rating} stars rating</h3>
                        <p>{this.props.business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Business;