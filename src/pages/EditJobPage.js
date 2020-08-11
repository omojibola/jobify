import React from "react";
import EditJob from "../components/Jobs/EditJob";
import Hero from "../components/Hero";

const EditJobPage = ({ bigText }) => {
  return (
    <div>
      <Hero bigText='Edit job' />
      <EditJob />
    </div>
  );
};

export default EditJobPage;
