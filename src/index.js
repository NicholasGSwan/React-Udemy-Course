import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyDXWpjVuzx3n9C98lI7nRCWsqF2ie27qfQ";



// Create a new component.
// This component should produce some HTML
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos }); < == above resolves to this
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        //call back function passed to VideoList then VideoListItem
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        </div>
      );
    }
}

// Take this component's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
