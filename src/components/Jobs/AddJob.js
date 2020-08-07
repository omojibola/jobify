import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import "./Jobs.styles.scss";
import { Form, Col, Row } from "react-bootstrap";

class AddJob extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      location: "",
      company: "",
      type: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, location, company } = this.state;
    if (title === "" || location === "" || company === "") {
      M.toast({ html: "Fields Cannot be empty" });
    } else {
      console.log(title, location, company);
    }
  };

  render() {
    const { title, location, company, type } = this.state;
    return (
      <div className='form-container'>
        <Form>
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
          <Form.Group as={Row}>
            <Col sm={10}>
              <Form.Check
                className='title'
                type='radio'
                label='Full-Time'
                name='type'
                value={type}
                id='formHorizontalRadios1'
              />
            </Col>
            <Col sm={10}>
              <Form.Check
                className='title'
                type='radio'
                label='Part-Time'
                name='type'
                value={type}
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

export default AddJob;
