import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyDliSaLEnaPDJ4r1BPf4VJsRHoDL39GV78';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.onTermChange('battlefield 1');
    }

    onTermChange (searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render () {
        const onTermChange = _.debounce((searchTerm) => {
            this.onTermChange(searchTerm)
        }, 800);

        return (
            <div>
                <SearchBar
                    onTermChange={ onTermChange }/>
                <VideoDetail
                    video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={
                        (selectedVideo) => {
                            this.setState({ selectedVideo: selectedVideo });
                        }
                    }
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));