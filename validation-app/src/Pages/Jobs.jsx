import "./style.css";
import PhoneInput from "react-phone-number-input";
import {
  BsArrow90DegLeft,
  BsArrowBarLeft,
  BsArrowLeft,
  BsBell,
  BsQuestionCircle,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Analytics from "./Analytics";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Jobs() {
  const initialValues = {
    firstname: "",
    email: "",
    phone: "",
    jobId: "",
    jobTitle: "",
    company: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log("hi" + setIsSubmit);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const error = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{10}$/;

    if (!values.firstname) {
      error.firstname = "first name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!mailformat.test(values.email)) {
      error.email = "this is not a valid email format";
    }
    if (!values.phone) {
      error.phone = "phone number is required";
    } else if (!values.phone.match(phoneno)) {
      error.phone = "phone number is Invalid";
    }
    if (!values.jobId) {
      error.jobId = "job ID is required";
    }
    if (!values.jobTitle) {
      error.jobTitle = "job title is required";
    }
    if (!values.company) {
      error.company = "company name is required";
    }
    return error;
  };

  let hello;

  return isSubmit && Object.keys(formErrors).length === 0 ? (
    <Analytics name={formValues} />
    
  ) : (
    // <Route name={formValues} path="/analytics" element={<Analytics />} />
    <div className="main-body">
      <form onSubmit={handleSubmit}>
        <header className="header">
          <div className="header-info">
            <div className="left-arrow">
              <BsArrowLeft />
            </div>
            <div className="header-inter">
              <h2>Inteview Information</h2>
            </div>
          </div>
          <div className="user-info">
            <div className="question">
              <BsQuestionCircle />
            </div>
            <div className="bell">
              <BsBell />
            </div>
            <div className="user">
              <p className="User-name">Jaykr</p>
              <p className="company-name">Hire++ admin</p>
            </div>
          </div>
        </header>

        <div className="main-job">
          <h1>Interview information</h1>
          <div className="card">
            <h4>Candidate Details</h4>
            <div class="row">
              <div class="col">
                <label>
                  Full Name<br></br>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Jhon"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.firstname}</p>
              </div>
              <div class="col">
                <label>
                  Email <br></br>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.email}</p>
              </div>
              <div class="col">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="0000 000 000"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.phone}</p>
              </div>
              <div class="col">
                <label>
                  Resume<br></br>
                </label>
                <input
                  className="file-upload"
                  id="file"
                  type="file"
                  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                <label for="file">
                  <div className="button">Upload</div>
                </label>
              </div>
            </div>
            <h4>Job Details</h4>
            <div class="row">
              <div class="col">
                <label>
                  Job ID<br></br>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="jobId"
                  value={formValues.jobId}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.jobId}</p>
              </div>
              <div class="col">
                <label>
                  Job title <br></br>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="jobTitle"
                  value={formValues.jobTitle}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.jobTitle}</p>
              </div>
              <div class="col">
                <label>
                  Company<br></br>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.company}</p>
              </div>
              <div class="col">
                <label>
                  Job description<br></br>
                </label>
                <input className="file-upload" id="file" type="file" />

                <label for="file">
                  <div className="button">Upload</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </form>
    </div>
  );
}
