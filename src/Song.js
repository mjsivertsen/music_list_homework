import React from "react";
import { Card, Grid } from "semantic-ui-react"
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
          <Organize>

            <SongForm
            toggleEdit={this.toggleEdit} 
            updateSong={this.props.updateSong}
            showForm={this.state.showForm}
            {...this.props} />

            <FunCancelButton onClick={this.toggleEdit}>
            Cancel Edit
            </FunCancelButton>

          </Organize>
        </>
      );
    };



    return (
        <StyledCard key={this.props.id}>
          <StyledCard.Content>
          <StyledCard.Header style={changeFontDangit}>{this.props.song}</StyledCard.Header>
          <StyledCard.Meta>{this.props.artist}</StyledCard.Meta>
          </StyledCard.Content>
          <StyledCard.Content extra>

            <FunEditButton
            onClick={this.toggleEdit}>
            Edit
            </FunEditButton>

            <FunDeleteButton
            onClick={() => this.props.deleteSong(this.props.id)}>
            Delete
            </FunDeleteButton>

          </StyledCard.Content>
        </StyledCard>
    )
  }
}

const Organize = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const changeFontDangit = {
fontFamily: "Architects Daughter"
}

const StyledCard = styled(Card)`
font-family: Architects Daughter;
border: 2px solid #191970;
`;

const flash = keyframes`
0%, 50%, 100% {opacity: 0}
25%, 75% {opacity: 1}
`;

const FunEditButton = styled.button`
{background-color: #fd581e;
margin: 6px;
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
margin: 6px;
padding: 6px;
border-radius: 6px;
width: 88px;
color: #fff44f;
font-family: Architects Daughter;
border: 2px solid #191970;
box-shadow: rgba(0, .2, .3, .6) 0px 6px 12px;
float: right;

&:hover {
  animation: ${flash} 1s infinite;
}
`;

const FunDeleteButton = styled.button`
{background-color: #660000;
margin: 6px;
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