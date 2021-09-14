import React from "react";
import { Table, Button, Card } from "semantic-ui-react"
import SongForm from "./SongForm"
import { keyframes } from "styled-components";

class Song extends React.Component {
 state = { showForm: false};
 toggleEdit = () => {
  this.setState({
    showForm: !this.state.showForm,
 })}

  render() {
    if (this.state.showForm) {
      return (
        <>
          <SongForm
          toggleEdit={this.toggleEdit} 
          updateSong={this.props.updateSong}
          {...this.props} />

          <Button 
          style={FunCancelButton}
          onClick={this.toggleEdit}>
            Cancel Edit
          </Button>
        </>
      );
    };



    return (
      <Table.Row key={this.props.id}>
        <Table.Cell static>{this.props.song}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>

          <Button 
          style={FunEditButton}
          onClick={this.toggleEdit}>
          Edit
          </Button>

          <Button 
          style={FunDeleteButton}
          onClick={() => this.props.deleteSong(this.props.id)}>
          Delete
          </Button>

        </Table.Cell>
      </Table.Row>
    )
  }
}

const bounce = keyframes`
0% {margin-bottom: 0;}
50% {margin-bottom: 6px;}
100% {margin-bottom: 0;}
`;

const FunEditButton = 
{backgroundColor: "#fd581e",
padding: "6px",
borderRadius: "6px",
width: "88px",
color: "#fff44f",
fontFamily: "Architects Daughter",
border: "2px solid #191970",
boxShadow: "rgba(0, .2, .3, .6) 0px 6px 12px;",
}

const FunCancelButton = 
{backgroundColor: "#fd581e",
padding: "6px",
borderRadius: "6px",
width: "88px",
color: "#fff44f",
fontFamily: "Architects Daughter",
border: "2px solid #191970",
boxShadow: "rgba(0, .2, .3, .6) 0px 6px 12px;"}

const FunDeleteButton = 
{backgroundColor: "#660000",
padding: "6px",
borderRadius: "6px",
width: "88px",
color: "#ff00ff",
fontFamily: "Architects Daughter",
border: "2px solid #191970",
boxShadow: "rgba(0, .2, .3, .6) 0px 6px 12px;"}

export default Song;