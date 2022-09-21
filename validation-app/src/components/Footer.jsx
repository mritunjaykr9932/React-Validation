import { AiOutlineAlignRight, AiOutlineArrowRight } from "react-icons/ai";
import { BiArrowFromLeft, BiArrowToLeft } from "react-icons/bi";
import { BootstrapReboot } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";
// import { IconName } from "react-icons/bs";
import "./style.css";
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router";
import { useState } from "react";

export default function () {
    const history = useNavigate();
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="previous">
          <span>
            <BiArrowToLeft /> Previous
          </span>
        </div>
        <div className="fot-button">
          <button className="button-footer">
            Next
            <span className="right-arrow">
              <BsArrowRight className="arrow" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
