import React from "react";
import Card from "react-bootstrap/Card";

import "./Jobs.styles.scss";

const JobList = ({ title, location, type, company }) => {
  return (
    <Card
      style={{
        width: "60%",
        margin: " 30px auto ",
      }}
      body
    >
      <div className='title'>{title}</div>
      <div className='company'>{company}</div>

      <div className='location'>{location}</div>
      <div
        className={
          "badge " +
          (type === "Full time" ? "badge-primary" : "badge-secondary")
        }
      >
        {type}
      </div>
      <a href='#' className='secondary-content'>
        <i className='material-icons grey-text'>delete</i>
      </a>
    </Card>
  );
};

export default JobList;
