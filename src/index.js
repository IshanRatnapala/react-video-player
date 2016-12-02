import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDliSaLEnaPDJ4r1BPf4VJsRHoDL39GV78';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'battlefield' }, (videos) => {
            this.setState({ videos });
        });
    }

    render () {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));