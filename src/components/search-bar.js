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
          <div>
              <input
                  value={ this.state.searchTerm}
                  onChange={ event => this.setState({ searchTerm: event.target.value }) }
              />
          </div>
      );
   }
}

export default SearchBar;