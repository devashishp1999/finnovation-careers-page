import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";
import { applyForJob } from "../resources/jobsApi";
import { Toast } from "utils-deva";

const ApplyForm = ({ position = "", closeSelf = () => {} }) => {
  const toast = new Toast();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    total_exp: "",
    relevant_exp: "",
    current_ctc: "",
    expected_ctc: "",
    position: position,
    will_relocate: "",
    notice_period: "",
    qualification: "",
    resume: null,
  });

  // const positions = ["Visual Designer", "Developer", "Product Designer"];

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
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <label>
              Full Name <sup>*</sup>
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

          <div className="input-field half">
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
            <label>
              Phone Number <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>
              Email <sup>*</sup>
            </label>
          </div>

          <div className="input-field half">
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

          <div className="input-field half">
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

          <div className="input-field half">
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

          <div className="input-field half">
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

          <div className="input-field half">
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

          <div className="input-field half">
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

          {/* <div className="input-field">
            <input
              type="text"
              name="position"
              list="open_position_list"
              required
              value={formData.position}
              onChange={handleInputChange}
            />
            <label>
              Applying for <sup>*</sup>
            </label>

            <datalist id="open_position_list">
              {positions.map((role) => (
                <option key={role} value={role} />
              ))}
            </datalist>
          </div> */}

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
