import React, { Component } from "react";
import "./Jobs.styles.scss";
import { connect } from "react-redux";
import JobList from "./JobList";
import SearchBar from "../SearchBar/SearchBar";
import { getJobs } from "../../actions/jobActions";
import Preloader from "../Preloader";
import { Alert } from "reactstrap";

export class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = { searchField: "", visible: 3, show: false };
  }

  componentDidMount() {
    this.props.getJobs();
  }

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  loadMore = (e) => {
    this.setState((old) => {
      return { visible: old.visible + 3 };
    });
  };

  render() {
    const { jobs, loading } = this.props;
    const { visible, searchField, show } = this.state;
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchField.toLowerCase())
    );

    if (loading) {
      return <Preloader />;
    }

    return (
      <div>
        <SearchBar handleChange={this.handleChange} />
        <Alert variant='success' isOpen={show} toggle={this.toggle}>
          <p className='text-center'> Job has been deleted successfully</p>
        </Alert>
        <div className='job-container'>
          {!loading && jobs.length === 0 ? (
            <p className='text-center' style={{ color: "#061d88" }}>
              No jobs available..
            </p>
          ) : (
            filteredJobs
              .slice(0, visible)
              .map((job) => (
                <JobList jobs={job} key={job.id} toggle={this.toggle} />
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

const mapStateToProps = (state) => ({
  jobs: state.job.jobs,
  loading: state.job.loading,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
