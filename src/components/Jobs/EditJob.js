import React, { Component } from "react";
import { connect } from "react-redux";
import { editJob } from "../../actions/jobActions";
import "./Jobs.styles.scss";
import { Form, Col, Row } from "react-bootstrap";
import { Alert } from "reactstrap";

class EditJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      location: "",
      company: "",
      type: "Full time",
      description: "",
      dateAdded: new Date(),
      visible: false,
    };
  }

  componentDidMount() {
    const { current } = this.props;
    if (current) {
      this.setState({
        title: current.title,
        location: current.location,
        company: current.company,
        type: current.type,
        description: current.description,
      });
    }
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, location, company, description, type } = this.state;
    const { current, editJob } = this.props;
    if (title === "" || location === "" || company === "") {
    } else {
      const updatedJob = {
        id: current.id,
        title,
        location,
        company,
        type,
        description,
        date: new Date(),
      };

      editJob(updatedJob);
      this.toggle();
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
    const { title, location, company, type, description, visible } = this.state;
    return (
      <div>
        <Alert variant='success' isOpen={visible} toggle={this.toggle}>
          <p className='text-center'> Job has been edited successfully</p>
        </Alert>
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
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  current: state.job.current,
});
export default connect(mapStateToProps, { editJob })(EditJob);
