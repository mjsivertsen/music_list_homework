import React, { Component } from "react";
import Songs from "./Songs";
import SongForm from "./SongForm";
import { Container, Header, Icon } from "semantic-ui-react";
import styled, {keyframes} from "styled-components";
import axios from "axios";
import WebFont from "webfontloader";


class App extends Component {
  state = {
    songs: [
      {id: 1, song: "Mirror Reaper", artist: "Bell Witch"},
      {id: 2, song: "Santa Monica", artist: "Honus Honus"},
      {id: 3, song: "Trekka", artist: "Puscifer"},
      {id: 4, song: "Say It Isn't So", artist: "Julie London"},
      {id: 5, song: "Borderlands", artist: "Devin Townsend"},
      {id: 6, song: "Murder at the Bingo Hall", artist: "Amigo the Devil" },
    ],
  }
  

  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Architects Daughter']
  }})};

  componentDidMount() {
    console.log("The Component Hath Mounted")
  }

  componentDidUpdate() {
    console.log("The Component Hath Changed and Rerendered Thusly")
  }

  componentWillUnmount() {
    console.log("The Component Biddeth Goodbye")
  }

  addSong = (song) => {
  this.setState({
    songs: [song, ...this.state.songs],
  });
  }

  deleteSong = (id) => {
    let filteredSongs = this.state.songs.filter((s) => s.id !== id);
    this.setState({ songs: filteredSongs})
  };

  updateSong = (song) => {
    let updatedSongs = this.state.songs.map((s) => s.id === song.id ? song : s);
    this.setState({songs: updatedSongs});
  }
  
  render () {
    return (
      <AppContainer style={{paddingTop: "26px"}}>
      <SuperHeader> 
        <Music>
          <Icon size="large" name="music" />
        </Music>
        Music List - React Homework 
        <Music>
          <Icon size="large" name="music" />
        </Music>
      </SuperHeader>
      <Songs songs={this.state.songs} deleteSong={this.deleteSong} updateSong={this.updateSong} />
      <SongForm addSong={this.addSong}/>
      </AppContainer>
      );
  };
};


const AppContainer = styled.div`
padding: 66px;
min-height: 100vh; 
background: rgb(0,71,62);
background: linear-gradient(90deg, rgba(0,71,62,1) 0%, rgba(0,64,82,1) 50%, rgba(9,0,55,1) 100%);
`;

const SuperHeader = styled.div`
color: teal;
font-family: Architects Daughter;
font-size: 36px;
`;

const bounce = keyframes`
0%, 50%, 100%  {transform: translate(0,0);}
25% {transform: translate(3px, -6px);}
75% {transform: translate(-3px, -6px);}
`;

const Music = styled.div`
color:  #191970;
margin: 6px;
fontsize: 26px;
display: inline-block;
animation: ${bounce} .8s linear;
animation-iteration-count: 2;
`;

<i class="music icon"></i>


export default App;
