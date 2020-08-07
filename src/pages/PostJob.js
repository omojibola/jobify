import React from "react";
import AddJob from "../components/Jobs/AddJob";
import Hero from "../components/Hero";

const PostJob = ({ bigText }) => {
  return (
    <div>
      <Hero bigText='Post A job' />
      <AddJob />
    </div>
  );
};

export default PostJob;
