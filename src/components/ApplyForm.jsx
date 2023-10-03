import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const ApplyForm = ({ position = "", closeSelf = () => {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: position,
    resume: null,
    about: "",
  });

  const positions = ["Visual Designer", "Developer", "Product Designer"];

  function submitForm(e) {
    e.preventDefault();

    // Log the form data
    console.log("Form Data:", formData);
  }

  function handleInputChange(e) {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
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
          <button onClick={closeSelf}>
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
              Name <sup>*</sup>
            </label>
          </div>

          <div className="input-field">
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

          <div className="input-field">
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

          <div className="input-field">
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
              )}{" "}
              <Icon src={IMAGES.attachFile} w={24} />{" "}
            </label>
          </div>

          <div className="input-field">
            <textarea
              placeholder="About Yourself"
              name="about"
              required
              value={formData.about}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button className="action" type="submit">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
