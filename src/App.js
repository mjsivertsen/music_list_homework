import React, { Component } from "react";
import Songs from "./Songs";
import SongForm from "./SongForm";
import { Container, Header } from "semantic-ui-react";


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
      <Container style={{paddingTop: "26px"}}>
      <Header as="h1"> Music List - React Homework </Header>
      <Songs songs={this.state.songs} deleteSong={this.deleteSong} updateSong={this.updateSong}/>
      <SongForm addSong={this.addSong}/>
      </Container>
      );
  };
};

export default App;
