import React from "react";
import { Form, Button, Card, Container } from "semantic-ui-react";
import styled, {keyframes} from "styled-components";
import WebFont from "webfontloader";



class SongForm extends React.Component {
  state = {
    song: this.props.song ? this.props.song: "",
    artist: this.props.artist ? this.props.artist: "",
  } 

  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Architects Daughter']
  }})};

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.id) {
      this.props.updateSong({ id: this.props.id, ...this.state });
      this.props.toggleEdit();
    }
    else {
    this.props.addSong({id: Math.random(), ...this.state});
    this.setState({song: "", artist: "",})
    console.log(this.state)
  }
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value,});
  };

  render() {
    return(
      <div>
      <Container  style={{margin: "20px"}}>
        <FormCard>
        <Form onSubmit={this.handleSubmit}>
        <Card.Content>
          <Form.Group widths="equal">
            <Form.Input fluid
            style={FunInput}
            name={"song"}
            onChange={this.handleChange}
            value={this.state.song}
            label="Song"
            onChange={this.handleChange}
            />

            <Form.Input fluid
            style={FunInput}
            color="green"
            name={"artist"}
            onChange={this.handleChange}
            value={this.state.artist}
            label="Artist"
            onChange={this.handleChange}
            />
          </Form.Group>
          </Card.Content>
          <Card.Content extra>
          <FunButton>{this.props.id ? "Update Song" : "Add Song"}</FunButton>
          </Card.Content>
        </Form>
        </FormCard>
        </Container>
      </div>
    );
  }
}


const flash = keyframes`
0%, 50%, 100% {opacity: 0}
25%, 75% {opacity: 1}
`;

const FormCard = styled.div`
margin: 26px;
padding: 13px;
width: 333px;
background-color: teal;
font-color: #191970;
font-family: Architects Daughter;
border-radius: 6px;
box-shadow: rgba(0, .2, .3, .6) 0px 6px 12px;
border: 2px solid #191970;
`;

const FunButton = styled.button`
margin: 6px;
background-color: #00ff7f;
padding: 6px;
border-radius: 6px;
width: 88px;
color: #191970;
font-family: Architects Daughter;
border: 2px solid #191970;
box-shadow: rgba(0, .2, .3, .6) 0px 6px 12px;

&:hover {
  animation: ${flash} 1s infinite;
}
`;

const FunInput = {
fontFamily: "Architects Daughter",
border: "2px solid #191970",
borderRadius: "6px",
}

export default SongForm;