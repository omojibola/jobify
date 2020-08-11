import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Form, Col, Row } from "react-bootstrap";

class EditJobModal extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      location: "",
      company: "",
      type: "Full time",
      description: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, location, company, description, type } = this.state;
    if (title === "" || location === "" || company === "") {
      M.toast({ html: "Fields Cannot be empty" });
    } else {
      console.log(title, location, company, description, type);
      this.setState({
        title: "",
        location: "",
        company: "",
        type: "Full time",
        description: "",
      });
    }
  };

  render() {
    const { title, location, company, type, description } = this.state;
    return (
      <div id='edit-job-modal' className='form-container modal'>
        <Form className='modal'>
          <Form.Group>
            <Form.Label className='title'>Job Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={title}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className='title'>Company Name</Form.Label>
            <Form.Control
              type='text'
              name='company'
              value={company}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='title'>Location</Form.Label>
            <Form.Control
              type='text'
              name='location'
              value={location}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='title'>Description</Form.Label>
            <Form.Control
              as='textarea'
              type='text'
              name='description'
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={10}>
              <Form.Check
                className='title'
                type='radio'
                label='Full-Time'
                name='type'
                value='Full time'
                onChange={this.handleChange}
                checked={type === "Full time"}
                id='formHorizontalRadios1'
              />
            </Col>
            <Col sm={10}>
              <Form.Check
                className='title'
                type='radio'
                label='Part-Time'
                name='type'
                onChange={this.handleChange}
                value='Part time'
                id='formHorizontalRadios1'
              />
            </Col>
          </Form.Group>

          <button
            style={{ backgroundColor: " #061d88", width: "100%", margin: 0 }}
            type='submit'
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default EditJobModal;
