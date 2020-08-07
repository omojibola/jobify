import React, { Component } from "react";
import JOB_DATA from "./JobData";
import JobList from "./JobList";
import SearchBar from "../SearchBar/SearchBar";

export class Jobs extends Component {
  constructor() {
    super();
    this.state = { jobs: JOB_DATA, searchField: "" };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { jobs, searchField } = this.state;
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <SearchBar handleChange={this.handleChange} />
        <div className='job-container'>
          {filteredJobs.map(({ id, ...otherProps }) => (
            <JobList key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
