import {
  GET_JOBS,
  SET_LOADING,
  JOBS_ERROR,
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  EDIT_JOB,
} from "./types";

//get jobs from server
export const getJobs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    const sortedData = data.sort((a, b) => b.id - a.id);
    dispatch({
      type: GET_JOBS,
      payload: sortedData,
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error.response.data,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//Add new job
export const addJob = (job) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const sortedData = data.sort((a, b) => b.id - a.id);

    dispatch({
      type: ADD_JOB,
      payload: sortedData,
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error,
    });
  }
};

//delete jobs
export const deleteJob = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_JOB,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error.response.data,
    });
  }
};

//edit job on server
export const editJob = (job) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/jobs/${job.id}`, {
      method: "PUT",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch({
      type: EDIT_JOB,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error.response.data,
    });
  }
};

//set current job
export const setCurrent = (job) => {
  return {
    type: SET_CURRENT,
    payload: job,
  };
};

//clear current job
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
