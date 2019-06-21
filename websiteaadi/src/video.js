import React from 'react';
//import logo from './logo.svg';
import './App.css';

import YouTube from 'react-youtube'

class Video extends React.Component{
      

  render(){
    console.log(this.props)
    let params = new URLSearchParams(this.props.location.search);
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
      console.log(this.props)
    return (
    
    <div className="App">
      <header className="App-header">
       <YouTube
        videoId={params.get("v")}
        opts={opts}
        onReady={this._onReady}
      />
      </header>
    </div>
  );
  
  }
  _onReady(event) {
    event.target.pauseVideo();
   
  }
  
}

export default Video;
