import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Favorites.css';

class Favorite extends Component {

    // handleCategory = (category) => () => {
    //     this.props.dispatch({type:'CATEGORY', payload: category})
    // }
    componentDidMount(){
        this.props.dispatch({type:'FETCH_FAVORITES'})
    }

    render(){
        return(
            <div className="container">
                {/* <nav>
                    <ul>
                        <li onClick={this.handleCategory('funny')}>All</li>
                        <li onClick={this.handleCategory('funny')}>Funny</li>
                        <li onClick={this.handleCategory('cohort')}>Cohort</li>
                        <li onClick={this.handleCategory('cartoon')}>Cartoon</li>
                        <li onClick={this.handleCategory('nsfw')}>NSFW</li>
                        <li onClick={this.handleCategory('meme')}>Meme</li>
                    </ul>
                </nav> */}
                {this.props.favoriteList.map((image) => 
                <div className="element">
                    <img className="picture" src={image.url} alt={image.name} />
                <div className="overlay">
                    <div className="text">{image.name}</div>
                </div>
                </div>)}
            </div>
        )
    }
}

const putStateOnProps = (reduxStore) => ({
    favoriteList: reduxStore.favoriteList
})

export default connect(putStateOnProps)(Favorite);