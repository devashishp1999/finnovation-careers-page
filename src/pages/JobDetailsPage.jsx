import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { applyForJob, getJobs } from "../resources/jobsApi";
import MyContext from "../contextApi/MyContext";
import Icon from "../components/Icon";
import { IMAGES } from "../assets/assets";
import useScreenSize from "../hooks/useScreenSize";
import { $, Toast } from "utils-deva";
import ApplyForm from "../components/ApplyForm";
import OpenPosition from "../components/OpenPosition";

const JobDetailsPage = () => {
  const [form, setForm] = useState(false);
  const { jobId } = useParams();
  const viewport = useScreenSize();

  const { jobsData, setJobsData } = useContext(MyContext);

  const [pageData, setPageData] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    total_exp: "",
    relevant_exp: "",
    current_ctc: "",
    expected_ctc: "",
    will_relocate: true,
    notice_period: "",
    qualification: true,
    resume: "",
  });

  async function submitForm(e) {
    e.preventDefault();

    if (!formData.resume) {
      return showToast("Upload a resume to apply", "red");
    }

    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    console.log(data);
    applyForJob(data)
      .then((result) => {
        showToast("Job application successful", "#48e048");
        console.log("job success", result);
      })
      .catch((error) => {
        showToast("An error occurred", "red");
        console.log(error);
      })
      .finally(() =>
        setFormData({
          name: "",
          location: "",
          total_exp: "",
          relevant_exp: "",
          current_ctc: "",
          expected_ctc: "",
          will_relocate: true,
          notice_period: "",
          qualification: true,
          resume: "",
        })
      );
  }

  function handleInputChange(e) {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    });
  }

  function showToast(text, color) {
    const toast = new Toast();
    toast.show({
      text: text,
      position: "bottom center",
      duration: 3,
      styles: {
        backgroundColor: color,
        color: "white",
        fontSize: "14px",
      },
    });
    setTimeout(
      () => $(".toast-container", 1).forEach((el) => el.remove()),
      3000
    );
  }

  function applyToPosition(job) {
    setForm(job);
  }

  useEffect(() => {
    if (!jobsData) getJobs(setJobsData);
    window.scrollBy({
      top: -10000,
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const pageId = path.slice(path.lastIndexOf("/") + 1);

    if (pageData && pageData.id !== pageId) {
      // eslint-disable-next-line
      setPageData(jobsData.find((job) => job.id == pageId));
      window.scrollBy({
        top: -10000,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line
  }, [window.location.pathname]);

  if (!jobsData) return <div className="center_pad">Loading...</div>;

  if (!pageData && pageData !== undefined) {
    // eslint-disable-next-line
    setPageData(jobsData.find((job) => job.id == jobId));
  }

  if (pageData === undefined)
    return <h3 className="center_pad">404 | Job Not Found</h3>;

  const {
    id,
    job_title,
    city,
    // min_exp,
    // max_exp,
    // department,
    // job_type,
    // positions,
    // salary_min,
    // salary_max,
    details,
    requirements,
    responsibilities,
    // work_mode,
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

          <div className={`actions${viewport === "mobile" ? " d_none" : ""}`}>
            {/* <button className="share">
              <Icon src={IMAGES.shareIcon} alt="Share icon" />
            </button> */}
            <button className="action" onClick={() => setForm(id)}>
              Apply Now
            </button>
          </div>
        </div>

        <p dangerouslySetInnerHTML={{ __html: details }}></p>

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

          <div className="form_container">
            <form onSubmit={submitForm}>
              <div>
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label>
                    Name <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                  <label>
                    Current Location <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <input
                    type="number"
                    name="total_exp"
                    required
                    value={formData.total_exp}
                    onChange={handleInputChange}
                  />
                  <label>
                    Total Year of Experience <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <input
                    type="number"
                    name="relevant_exp"
                    required
                    value={formData.relevant_exp}
                    onChange={handleInputChange}
                  />
                  <label>
                    Relevant Experience <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <input
                    type="number"
                    name="current_ctc"
                    required
                    value={formData.current_ctc}
                    onChange={handleInputChange}
                  />
                  <label>
                    Current Annual CTC <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <input
                    type="number"
                    name="expected_ctc"
                    required
                    value={formData.expected_ctc}
                    onChange={handleInputChange}
                  />
                  <label>
                    Expected CTC <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <select
                    name="will_relocate"
                    value={formData.will_relocate}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label>
                    Willing to relocate <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <select
                    name="notice_period"
                    value={formData.notice_period}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                  </select>
                  <label>
                    Notice Period <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Ph.D.">Ph.D.</option>
                  </select>
                  <label>
                    Last Qualification <sup>*</sup>
                  </label>
                </div>

                <div className="input-field">
                  <input
                    type="file"
                    id="file_ip"
                    name="resume"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="file_ip">
                    {formData?.resume?.name ? (
                      formData?.resume?.name
                    ) : (
                      <>
                        Resume/CV <sup>*</sup>
                      </>
                    )}
                    <Icon src={IMAGES.attachFile} w={24} />{" "}
                  </label>
                </div>
              </div>

              <button type="submit" className="action">
                Submit Now
              </button>
            </form>
          </div>
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

          <div className="jobs">
            {jobsData
              .filter((job) => job.id !== pageData.id)
              .slice(0, 3)
              .map((job, i) => (
                <OpenPosition
                  key={job.id + i}
                  data={job}
                  apply={() => applyToPosition(job.id)}
                />
              ))}
          </div>
        </div>
      </div>

      {form && <ApplyForm jobId={form} closeSelf={() => setForm(false)} />}
    </div>
  );
};

export default JobDetailsPage;
