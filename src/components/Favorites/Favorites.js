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
            <div id="favorites">
            {/* <nav>
                <ul>
                    <li onClick={this.handleCategory('funny')}>funny</li>
                    <li onClick={this.handleCategory('cohort')}>cohort</li>
                    <li onClick={this.handleCategory('cartoon')}>cartoon</li>
                    <li onClick={this.handleCategory('nsfw')}>nsfw</li>
                    <li onClick={this.handleCategory('meme')}>meme</li>
                </ul>
            </nav> */}
            <main>
            {this.props.favoriteList.map((image) => 
            <div><img src={image.url} alt={image.id} width="320" height="240"/></div>)}
            </main>
            </div>
        )
    }
}

const putStateOnProps = (reduxStore) => ({
    favoriteList: reduxStore.favoriteList
})

export default connect(putStateOnProps)(Favorite);