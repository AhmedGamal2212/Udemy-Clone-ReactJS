import React from "react";
import SingleCourseHeader from "../single-course-header/SingleCourseHeader";

function CourseDetailsPage({ courseDetails }) {
  return (
    <>
      <SingleCourseHeader courseDetails={courseDetails} />
    </>
  );
}

export default CourseDetailsPage;
