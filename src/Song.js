import React from "react";
import { Table, Button, Card } from "semantic-ui-react"
import SongForm from "./SongForm"

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
          <Button onClick={this.toggleEdit} basic color="orange">
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
          <Button onClick={this.toggleEdit} basic color="yellow">Edit</Button>
          <Button onClick={() => this.props.deleteSong(this.props.id)} basic color="red">Delete</Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Song