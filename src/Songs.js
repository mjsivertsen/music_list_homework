import React from "react";
import Song from "./Song";
import {Table} from "semantic-ui-react";
import styled from "styled-components";


const Songs = ( {songs, deleteSong, updateSong} ) => (
      <StyleTable celled padded>
        <StyleTable.Header>
          <StyleTable.Row>
            <StyleTable.HeaderCell>Song Title</StyleTable.HeaderCell>
            <StyleTable.HeaderCell>Artist</StyleTable.HeaderCell>
            <StyleTable.HeaderCell>Stuff</StyleTable.HeaderCell>
          </StyleTable.Row>
        </StyleTable.Header>

      <StyleTable.Body>
        {songs.map((song) => (
          <Song {...song} StyleTable={StyleTable} deleteSong={deleteSong} updateSong={updateSong}/>
        ))}
      </StyleTable.Body>
      </StyleTable>
    );

    const StyleTable = styled(Table)`
    font-family: Architects Daughter;
    background-color: 
    `


export default Songs;