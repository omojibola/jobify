import React, { Component } from "react";
import "./Jobs.styles.scss";
import JobList from "./JobList";
import SearchBar from "../SearchBar/SearchBar";
import Preloader from "../Preloader";

export class Jobs extends Component {
  constructor() {
    super();
    this.state = { jobs: [], searchField: "", loading: false, visible: 3 };
  }

  getJobs = async () => {
    this.setState({ loading: true });
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    this.setState({
      jobs: data,
    });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.getJobs();
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  loadMore = (e) => {
    this.setState((old) => {
      return { visible: old.visible + 1 };
    });
  };

  render() {
    const { jobs, searchField, loading, visible } = this.state;
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchField.toLowerCase())
    );

    if (loading) {
      return <Preloader />;
    }

    return (
      <div>
        <SearchBar handleChange={this.handleChange} />
        <div className='job-container'>
          {!loading && jobs.length === 0 ? (
            <p className='text-center' style={{ color: "#061d88" }}>
              No jobs available..
            </p>
          ) : (
            filteredJobs
              .slice(0, visible)
              .map(({ id, ...otherProps }) => (
                <JobList key={id} {...otherProps} />
              ))
          )}
        </div>
        <div className='load-more'>
          {visible < jobs.length && (
            <button onClick={this.loadMore}>Load More</button>
          )}
        </div>
      </div>
    );
  }
}

export default Jobs;
