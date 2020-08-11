import React, { Component } from "react";
import { connect } from "react-redux";
import { addJob } from "../../actions/jobActions";
import "./Jobs.styles.scss";
import { Form, Col, Row } from "react-bootstrap";

class AddJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      location: "",
      company: "",
      type: "Full time",
      description: "",
      dateAdded: new Date(),
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
    } else {
      const newJob = {
        title,
        location,
        company,
        type,
        description,
        date: new Date(),
      };

      this.props.addJob(newJob);

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

export default connect(null, { addJob })(AddJob);
