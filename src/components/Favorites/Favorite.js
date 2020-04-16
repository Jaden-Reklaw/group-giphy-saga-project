import React, {Component} from 'react';

class Favorite extends Component {

    handleCategory = (category) => () => {
        this.props.dispatch({type:'CATEGORY', payload: category})
    }

    render(){
        return(
            <>
            <nav>
                <ul>
                    <li onClick={this.handleCategory('funny')}>funny</li>
                    <li onClick={this.handleCategory('cohort')}>cohort</li>
                    <li onClick={this.handleCategory('cartoon')}>cartoon</li>
                    <li onClick={this.handleCategory('nsfw')}>nsfw</li>
                    <li onClick={this.handleCategory('meme')}>meme</li>
                </ul>
            </nav>
            <main>
            {this.props.images.map((image) => 
            <div><img src={image} alt={image} width="320" height="240"/></div>)}
            </main>
            </>
        )
    }
}

const putStateOnProps = (reduxStore) => ({
    images: reduxStore.images
})

export default connect(putStateOnProps)(Favorite);