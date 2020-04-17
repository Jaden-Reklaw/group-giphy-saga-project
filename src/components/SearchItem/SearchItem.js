import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import some styles
import './SearchItem.css';

const mapStateToProps = reduxState => ({
    searchList: reduxState.searchList
});

class SearchItem extends Component {
    render() {
        const image = this.props.image;
        const description = this.props.description;
        return (
            <div className="card">
                <img src={image} alt={description}/>
                <div className="container">
                    <h3>{description}</h3>
                    
                </div>
                <button className="favorite-btn">☆</button>
            </div>
            
        );
    }
}

export default connect(mapStateToProps)(SearchItem);