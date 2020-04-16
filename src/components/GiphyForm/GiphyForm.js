import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class GiphyForm extends Component {
    state = {
        search: '',
    }

    //Handles the input field to get the search from the user
    handleInputField = event => {
        console.log('event happended')
        this.setState({search: event.target.value});
    }

    //Once the input field is filled once you click submit will send the info to the server
    submitSearch = (event) => {
        event.preventDefault();
        console.log('Item to search', this.state.search);
        this.props.dispatch({type: 'FETCH_SEARCH', payload: this.state.search});
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.search)}</pre>
                <form onSubmit={this.submitSearch}>
                    <input type='text' value={this.state.search} onChange={this.handleInputField} />
                    <input type='submit' value='New Search' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(GiphyForm);