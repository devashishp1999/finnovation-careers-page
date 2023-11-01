import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../resources/jobsApi";
import MyContext from "../contextApi/MyContext";
import Icon from "../components/Icon";
import { IMAGES } from "../assets/assets";
import useScreenSize from "../hooks/useScreenSize";
import OpenPositions from "../modules/OpenPositions";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const viewport = useScreenSize();

  const { jobsData, setJobsData } = useContext(MyContext);

  useEffect(() => {
    if (!jobsData) getJobs(setJobsData);
    // eslint-disable-next-line
  }, []);

  function submitForm(e) {
    e.preventDefault();

    console.log(e);
  }

  if (!jobsData) return <div className="center_pad">Loading...</div>;

  const pageData = jobsData.find((job) => job.id == jobId);
  if (!pageData)
    return (
      <>
        <h3 className="center_pad">404 | Job Not Found</h3>
        <OpenPositions />
      </>
    );

  const {
    id,
    job_title,
    city,
    min_exp,
    max_exp,
    department,
    job_type,
    positions,
    salary_min,
    salary_max,
    details,
    requirements,
    responsibilities,
    work_mode,
  } = pageData;

  return (
    <div className="job_detail_page">
      <div className="container details">
        <div className="head">
          <Icon src={IMAGES.jobPageIcon} alt="Job icon" w={80} h={80} />

          <div className="title">
            <h1>{job_title}</h1>
            <p>{city}</p>
          </div>

          <div className={`actions${viewport == "mobile" ? " d_none" : ""}`}>
            <button className="share">
              <Icon src={IMAGES.shareIcon} alt="Share icon" />
            </button>
            <button className="action">Apply Now</button>
          </div>
        </div>

        <p>
          We are seeking a Communication Specialist to join our dynamic team. As
          a Communication Specialist, you will play a crucial role in
          maintaining and enhancing our online presence through effective
          management of social media platforms. You will be responsible for
          responding to social media direct messages, engaging with our
          audience, and ensuring that our online communication aligns with our
          brand image and goals.
        </p>

        <hr />

        <div className="responsibility">
          <h2>Responsibilities</h2>

          <div dangerouslySetInnerHTML={{ __html: responsibilities }} />
        </div>

        <div className="qualifications">
          <h2>Qualifications</h2>

          <div dangerouslySetInnerHTML={{ __html: requirements }} />
        </div>
      </div>

      <div className="form">
        <div className="container">
          <h2>
            Are you excited for this <span>job opportunity</span>
          </h2>
          <hr />

          <form onSubmit={submitForm}>
            <button type="submit" className="action">
              Submit Now
            </button>
          </form>
        </div>
        <div className="curve c1">
          <img src={IMAGES.arc} alt="" />
        </div>

        <div className="curve c2">
          <img src={IMAGES.arc} alt="" />
        </div>
      </div>

      <div className="similar_jobs">
        <div className="container">
          <h2>Similar Jobs for you</h2>

          <div>Positions</div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
