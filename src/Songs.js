import React from "react";
import Song from "./Song";
import {Table} from "semantic-ui-react";


const Songs = ( {songs, deleteSong, updateSong} ) => (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Song Title</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Stuff</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

      <Table.Body>
        {songs.map((song) => (
          <Song {...song} deleteSong={deleteSong} updateSong={updateSong}/>
        ))}
      </Table.Body>
      </Table>
    );

export default Songs;