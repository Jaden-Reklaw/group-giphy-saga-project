import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import components
import SearchItem from '../SearchItem/SearchItem';

//Import Styles
import './SearchList.css';

const mapStateToProps = reduxState => ({
    searchList: reduxState.searchList
});

class SearchList extends Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.searchList.map((item, i) => <SearchItem key={i} image={item.images.original.url} description={item.title}/>)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchList);