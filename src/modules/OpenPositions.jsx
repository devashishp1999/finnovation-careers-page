import React, { useContext, useEffect, useState } from "react";

import OpenPosition from "../components/OpenPosition";
import ApplyForm from "../components/ApplyForm";
import MyContext from "../contextApi/MyContext";
import { getJobs } from "../resources/jobsApi";

const OpenPositions = () => {
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState(false);

  const { jobsData, setJobsData } = useContext(MyContext);

  function applyToPosition(job) {
    setForm(job);
  }

  useEffect(() => {
    if (!jobsData) getJobs(setJobsData);
    // eslint-disable-next-line
  }, []);

  if (!jobsData) return <div className="center_pad">Loading...</div>;

  return (
    <section className="positions">
      <div className="container">
        <h2>Open Positions</h2>
        <div className="cards">
          {jobsData.slice(0, showAll ? undefined : 6).map((position, i) => (
            <OpenPosition
              key={position.id + i}
              data={position}
              apply={() => applyToPosition(position.job_title)}
            />
          ))}
        </div>
        {jobsData.length > 6 && (
          <p>
            <button
              onClick={() => setShowAll(!showAll)}
              aria-label={`View ${showAll ? "less" : "all positions"}`}
            >
              {showAll ? "View Less" : "View All Positions"}
            </button>
          </p>
        )}
      </div>

      {form && <ApplyForm position={form} closeSelf={() => setForm(false)} />}
    </section>
  );
};

export default OpenPositions;
