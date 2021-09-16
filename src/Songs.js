import React from "react";
import Song from "./Song";
import {Card} from "semantic-ui-react";
import styled from "styled-components";


const Songs = ( {songs, deleteSong, updateSong} ) => (
        <Card.Group>
        {songs.map((song) => (
          <Song {...song} deleteSong={deleteSong} updateSong={updateSong}/>
        ))}
        </Card.Group>
    );




export default Songs;