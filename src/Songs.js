import React from "react";
import Song from "./Song";
import {Card} from "semantic-ui-react";
import styled from "styled-components";
import { screensize } from "./query";


const Songs = ( {songs, deleteSong, updateSong} ) => (
      // <CardOrganize>
        <Card.Group>
        {songs.map((song) => (
          <Song {...song} deleteSong={deleteSong} updateSong={updateSong}/>
        ))}
        </Card.Group>
      // </CardOrganize>
    );

    // const CardOrganize = styled.div`
    //   display: flex;
    //   flex-flow: row wrap;
    //   justify-content: space-around;
    //   @media ${screensize.small} {
    //     flex-flow: column wrap;

    //   }
    // `;


export default Songs;