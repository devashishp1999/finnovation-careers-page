import React, { useContext, useEffect, useState } from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";
import { applyForJob } from "../resources/jobsApi";
import { Toast } from "utils-deva";
import MyContext from "../contextApi/MyContext";

const ApplyForm = ({ jobId = "", closeSelf = () => {} }) => {
  const toast = new Toast();
  const { jobsData } = useContext(MyContext);
  const [formData, setFormData] = useState({
    full_name: "",
    location: "",
    mobile: "",
    email_id: "",
    total_experience: "",
    relevant_experience: "",
    current_ctc: "",
    expected_ctc: "",
    job_role: jobId, //
    relocate: "",
    notice_period: "",
    // portfolio: "", 
    qualification: "",
    resume: null,
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

    applyForJob(data)
      .then((result) => {
        showToast("Job application successful", "#48e048");
        console.log("job success", result);
        closeSelf();
      })
      .catch((error) => {
        showToast("An error occurred", "red");
        console.log(error);
        closeSelf();
      });
  }

  function handleInputChange(e) {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    });
  }

  function showToast(text, color) {
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
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  });
  return (
    <div className="form_overlay" onClick={closeSelf}>
      <div className="form_container" onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <h3>Apply for this job</h3>
          <button onClick={closeSelf} aria-label="Close Form">
            <Icon src={IMAGES.closeIcon} alt="close icon" w={35} h={35} />
          </button>
        </div>

        <form onSubmit={submitForm}>
          <div className="input-field">
            <input
              type="text"
              name="full_name"
              required
              value={formData.full_name}
              onChange={handleInputChange}
            />
            <label>
              Full Name <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <label>
              Phone Number <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="email"
              name="email_id"
              required
              value={formData.email_id}
              onChange={handleInputChange}
            />
            <label>
              Email Id<sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
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

          <div className="input-field half">
            <select
              name="job_role"
              value={formData.job_role}
              onChange={handleInputChange}
              required
            >
              <option value="">{jobsData?.length ? "Select": "No Openings"}</option>
              {jobsData?.map((el) => (
                <option value={el.id}>{el.job_title}</option>
              ))}
            </select>
            <label>
              Job Role<sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="number"
              name="total_experience"
              required
              value={formData.total_experience}
              onChange={handleInputChange}
            />
            <label>
              Total Year of Experience <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="number"
              name="relevant_experience"
              required
              value={formData.relevant_experience}
              onChange={handleInputChange}
            />
            <label>
              Relevant Experience <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="text"
              name="current_ctc"
              required
              value={formData.current_ctc}
              onChange={handleInputChange}
            />
            <label>
              Current Annual CTC <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="text"
              name="expected_ctc"
              required
              value={formData.expected_ctc}
              onChange={handleInputChange}
            />
            <label>
              Expected CTC <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <select
              name="relocate"
              value={formData.relocate}
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

          <div className="input-field half">
            <select
              name="notice_period"
              value={formData.notice_period}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Immediate">Immediate</option>
              <option value="15 days">15 days</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="3 Months">3 Months</option>
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
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Ph.D.">Ph.D.</option>
              <option value="Others">Others</option>
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

          {/* <div className="input-field">
            <textarea
              placeholder="About Yourself"
              name="about"
              required
              value={formData.about}
              onChange={handleInputChange}
            ></textarea>
          </div> */}

          <button className="action" type="submit" aria-label="Apply for Job">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
