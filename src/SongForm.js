import React from "react";
import { Form, Button, Card, Container } from "semantic-ui-react";


class SongForm extends React.Component {
  state = {
    song: this.props.song ? this.props.song: "",
    artist: this.props.artist ? this.props.artist: "",
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.id) {
      this.props.updateSong({ id: this.props.id, ...this.state });
      this.props.toggleEdit();
    }
    else {
    this.props.addSong(this.state);
    this.setState({song: "", artist: "",})
  }
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value,});
  };
  
  render () {
    return(
      <div>
      <Container  style={{margin: "20px"}}>
        <Card style={{padding: "6px"}}>
        <Form onSubmit={this.handleSubmit}>
        <Card.Content>
          <Form.Group widths="equal">
            <Form.Input fluid
            name={"song"}
            onChange={this.handleChange}
            value={this.state.song}
            label="Song"
            onChange={this.handleChange}
            />

            <Form.Input fluid
            name={"artist"}
            onChange={this.handleChange}
            value={this.state.artist}
            label="Artist"
            onChange={this.handleChange}
            />
          </Form.Group>
          </Card.Content>
          <Card.Content extra>
        <Button basic color="green">{this.props.id ? "Update Song" : "Add Song"}</Button>
          </Card.Content>
        </Form>
        </Card>
        </Container>
      </div>
    );
  }
}

export default SongForm;