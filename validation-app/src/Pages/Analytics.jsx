import Footer from "../components/Footer";
import Header from "../components/Header";
import "./analytic.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Jobs from "./Jobs";
import ReactModal, { Modal } from "react-modal";
// import "./assets/css/fonts.css";

const Analytics = (props) => {
  const initialValues = {
    firstname: "",
    email: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setModalIsOpen(true);
    //console.log("hi" + setIsSubmitA);
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

    return error;
  };

  return isSubmit && Object.keys(formErrors).length === 0 ? (
    <ReactModal isOpen={modalIsOpen}>
      <div className="modal-body">
        <h2>Form Submitted Successfully</h2>
        <div className="user-info-modal">
          <div className="Recruiter-info">
            <div className="info-datails">
              <h3>Recruiter info</h3>
              <h4>{formValues.firstname}</h4>
              <h4>{formValues.email}</h4>
              <h4>{formValues.phone}</h4>
            </div>
            <div className="info-details">
              <h3>candidate info</h3>
              <p>{props.name.firstname}</p>
              <p>{props.name.email}</p>
              <p>{props.name.phone}</p>
              <p>{props.name.jobId}</p>
              <p>{props.name.jobTitle}</p>
              <p>{props.name.company}</p>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  ) : (
    <>
      <Header />

      <form onSubmit={handleSubmit} className="analytic-container">
        <div className="analytic-main">
          <div className="analytic-card">
            <h3>Recruiter Details</h3>
            <form className="analytic-form">
              <div className="analytic-input">
                <label>
                  Full Name <br></br>
                </label>
                <input
                  type="text"
                  placeholder="olivia@untitledui.com"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.firstname}</p>
              </div>

              <div className="analytic-input">
                <label>
                  Email<br></br>
                </label>
                <input
                  type="email"
                  placeholder="olivia@untitledui.com"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.email}</p>
              </div>

              <div className="analytic-input">
                <label>
                  Phone Number<br></br>
                </label>
                <input
                  type="phone"
                  placeholder="0000 000 000"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.phone}</p>
              </div>
            </form>
          </div>

          <div className="analytic-card">
            <h3>Interviwer Details (1)</h3>
            <form className="analytic-form">
              <div className="analytic-input">
                <label>
                  Job ID <br></br>
                </label>
                <input
                  type="text"
                  placeholder="olivia@untitledui.com"
                  value={props.name.jobId}
                />
              </div>

              <div className="analytic-input">
                <label>
                  job title<br></br>
                </label>
                <input
                  type="text"
                  placeholder="olivia@untitledui.com"
                  value={props.name.jobTitle}
                />
              </div>

              <div className="analytic-input">
                <label>
                  Phone Number<br></br>
                </label>
                <input
                  type="phone"
                  placeholder="0000 000 000"
                  value={props.name.phone}
                />
              </div>
            </form>
          </div>

          <div className="analytic-card">
            <h3>Interviwer Details (2)</h3>
            <form className="analytic-form">
              <div className="analytic-input">
                <label>
                  Job ID <br></br>
                </label>
                <input type="text" placeholder="olivia@untitledui.com" />
              </div>

              <div className="analytic-input">
                <label>
                  Job title<br></br>
                </label>
                <input type="text" placeholder="olivia@untitledui.com" />
              </div>

              <div className="analytic-input">
                <label>
                  Phone Number<br></br>
                </label>
                <input type="phone" placeholder="0000 000 000" />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </form>
    </>
  );
};

export default Analytics;
