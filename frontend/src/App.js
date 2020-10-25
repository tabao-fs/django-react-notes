import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import ListNotes from './components/ListNotes';

var notes_temp = [
  {
    'id': 1,
    'title': 'this is a react note',
    'content': 'this is the content'
  },
  {
    'id': 2,
    'title': 'second note',
    'content': 'this is the second content'
  },
  {
    'id': 3,
    'title': 'third note',
    'content': 'this is the third content'
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes_temp,
      current_note_id: 0,
      is_creating: true
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  };

  handleItemClick(id) {
    console.log("id", id);
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="10">
              <h2>Realtime notes</h2>
            </Col>
            <Col xs="2">
              <Button color="primary">Create a new note</Button>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <ListNotes notes={this.state.notes} handleItemClick={(id) => this.handleItemClick(id)} />
            </Col>
            <Col xs="8">
              <p>Content/Editing here...</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

};

export default App;
