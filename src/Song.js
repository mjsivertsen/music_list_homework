import React from "react";
import { Table, Button, Card } from "semantic-ui-react"
import SongForm from "./SongForm"
import styled, { keyframes } from "styled-components";

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

          <FunCancelButton
          onClick={this.toggleEdit}>
            Cancel Edit
          </FunCancelButton>
        </>
      );
    };



    return (
      <Table.Row key={this.props.id}>
        <Table.Cell static>{this.props.song}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>

          <FunEditButton
          onClick={this.toggleEdit}>
          Edit
          </FunEditButton>

          <FunDeleteButton
          onClick={() => this.props.deleteSong(this.props.id)}>
          Delete
          </FunDeleteButton>

        </Table.Cell>
      </Table.Row>
    )
  }
}

// const Table = styled(Table)`
// background: blue;
// `

const flash = keyframes`
0%, 50%, 100% {opacity: 0}
25%, 75% {opacity: 1}
`;

const FunEditButton = styled.button`
{background-color: #fd581e;
padding: 6px;
border-radius: 6px;
width: 88px;
color: #fff44f;
font-family: Architects Daughter;
border: 2px solid #191970;
box-shadow: rgba(0, .2, .3, .6) 0px 6px 12px;

&:hover {
  animation: ${flash} 1s infinite;
}
`;


const FunCancelButton = styled.button`
{background-color: #fd581e;
padding: 6px;
border-radius: 6px;
width: 88px;
color: #fff44f;
font-family: Architects Daughter;
border: 2px solid #191970;
box-shadow: rgba(0, .2, .3, .6) 0px 6px 12px;

&:hover {
  animation: ${flash} 1s infinite;
}
`;


const FunDeleteButton = styled.button`
{background-color: #660000;
padding: 6px;
border-radius: 6px;
width: 88px;
color: #ff00ff;
font-family: Architects Daughter;
border: 2px solid #191970;
box-shadow: rgba(0, .2, .3, .6) 0px 6px 12px;

&:hover {
  animation: ${flash} 1s infinite;
}
`;



export default Song;