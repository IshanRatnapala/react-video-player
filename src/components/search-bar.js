import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (params) {
        super(params);
        this.state = {
            searchTerm: ''
        };
    }

    render () {
        return (
            <div className="search-bar">
                <input
                    value={ this.state.searchTerm}
                    onChange={ event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }

    onInputChange (searchTerm) {
        this.setState({ searchTerm: searchTerm });
        this.props.onTermChange(searchTerm);
    }
}

export default SearchBar;