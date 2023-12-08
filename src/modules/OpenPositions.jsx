import React, { useContext, useEffect, useState } from "react";

import OpenPosition from "../components/OpenPosition";
import ApplyForm from "../components/ApplyForm";
import MyContext from "../contextApi/MyContext";
import { getJobs } from "../resources/jobsApi";

const OpenPositions = () => {
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState(false);
  const [job_type, setJobType] = useState(1);

  const { jobsData, setJobsData } = useContext(MyContext);

  function applyToPosition(jobId) {
    setForm(jobId);
  }

  function checkJobType(type = "") {
    type = type.toLowerCase();

    if (type.includes("full")) return job_type === 1;
    else if (type.includes("int")) return job_type === 2;
    else if (type.includes("free")) return job_type === 3;
  }

  useEffect(() => {
    if (!jobsData) getJobs(setJobsData);
    // eslint-disable-next-line
  }, []);

  const JobsArray = jobsData?.filter(({ job_type }) => checkJobType(job_type));

  return (
    <section className="positions">
      <div className="container">
        <h2>Open Positions</h2>
        <div className="job_tabs">
          <span
            className={job_type === 1 ? "active" : ""}
            onClick={() => setJobType(1)}
          >
            Full time
          </span>
          <span
            className={job_type === 2 ? "active" : ""}
            onClick={() => setJobType(2)}
          >
            Internship
          </span>
          <span
            className={job_type === 3 ? "active" : ""}
            onClick={() => setJobType(3)}
          >
            Freelance
          </span>
        </div>
        {!jobsData ? (
          <div className="center_pad">Loading...</div>
        ) : (
          <>
            <div className="cards">
              {JobsArray.length ? (
                JobsArray.slice(0, showAll ? undefined : 6).map((position) => (
                  <OpenPosition
                    key={position.id}
                    data={position}
                    apply={() => applyToPosition(position.id)}
                  />
                ))
              ) : (
                <div className="no_jobs_text">
                  No jobs available in this section
                </div>
              )}
            </div>
            {JobsArray.length > 6 && (
              <p>
                <button
                  onClick={() => setShowAll(!showAll)}
                  aria-label={`View ${showAll ? "less" : "all positions"}`}
                >
                  {showAll ? "View Less" : "View All Positions"}
                </button>
              </p>
            )}
          </>
        )}
      </div>

      {form && <ApplyForm jobId={form} closeSelf={() => setForm(false)} />}
    </section>
  );
};

export default OpenPositions;
