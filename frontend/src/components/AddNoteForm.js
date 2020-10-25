import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSave(this.state);

    this.setState({
      title: '',
      content: ''
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    return (
      <Fragment>
        <Form>
          <FormGroup onSubmit={this.handleSubmit}>
            <Label>Title</Label>
            <Input name="title" type="text" value={this.state.title} />
          </FormGroup>
          <FormGroup>
            <Label>Content</Label>
            <Input onChange={this.handleChange} name="content" type="textarea" value={this.state.content} />
          </FormGroup>
          <Button color="success">Save</Button>
        </Form>
      </Fragment>
    )
  }
}

export default AddNoteForm;
