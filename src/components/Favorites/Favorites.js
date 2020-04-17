import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Favorites.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Favorite extends Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_FAVORITES' })
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <div className="container">
                {this.props.favoriteList.map((image) =>
                    <div onClick={this.handleClick} className="element" key={image.url}>
                        <img className="picture" src={image.url} alt={image.name} />
                        <div className="overlay">
                            <div className="text">{image.name}</div>
                        </div>
                    </div>)}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Funny</MenuItem>
                    <MenuItem onClick={this.handleClose}>Cohort</MenuItem>
                    <MenuItem onClick={this.handleClose}>Cartoon</MenuItem>
                    <MenuItem onClick={this.handleClose}>NSFW</MenuItem>
                    <MenuItem onClick={this.handleClose}>Meme</MenuItem>
                </Menu>
            </div>
        )
    }
}

const putStateOnProps = (reduxStore) => ({
    favoriteList: reduxStore.favoriteList
})

export default connect(putStateOnProps)(Favorite);