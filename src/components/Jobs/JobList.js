import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Modal, Button, Alert } from "react-bootstrap";
import { deleteJob } from "../../actions/jobActions";
import M from "materialize-css/dist/js/materialize.min.js";

import "./Jobs.styles.scss";

const JobList = ({ jobs, deleteJob }) => {
  //Modal
  const [show, setShow] = useState(false);

  //Alert
  const [alert, setAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = () => {
    deleteJob(jobs.id);
    setAlert(true);
  };

  return (
    <div>
      <Card
        style={{
          width: "60%",
          margin: " 30px auto ",
        }}
        body
      >
        <div className='title' onClick={handleShow}>
          {jobs.title}
        </div>

        <div className='company'>{jobs.company}</div>

        <div className='location'>{jobs.location}</div>
        <div
          className={
            "badge " +
            (jobs.type === "Full time" ? "badge-primary" : "badge-secondary")
          }
        >
          {jobs.type}
        </div>
        <a href='#' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='title text-center'>
              {jobs.title}, {jobs.company}
            </div>
            <div className='title' style={{ fontSize: 14, marginTop: 30 }}>
              {jobs.description}
            </div>
            <div className='title' style={{ fontSize: 14, marginTop: 30 }}>
              <p>Location: {jobs.location}</p>
            </div>

            <div className='title' style={{ fontSize: 14, marginTop: 30 }}>
              <p>Contract-Type: {jobs.type}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </div>
  );
};

export default connect(null, { deleteJob })(JobList);
