import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import {
  BiArrowToLeft,
  BiBriefcaseAlt,
  BiCheckDouble,
  BiLeftArrowAlt,
  BiSearch,
  IconName,
} from "react-icons/bi";
import { Bootstrap } from "react-bootstrap-icons";
import { FaBootstrap } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Jobs",
      icon: <BiBriefcaseAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "400px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "190px" : "10px" }}
            className="bars"
          >
            <BiLeftArrowAlt onClick={toggle} />
          </div>
          </div>
          <div className="main">
            <div className="form-group has-search">
              <span className="form-control-feedback">
                <BiSearch className="search" />
              </span>
              <input
                style={{ display: isOpen ? "block" : "none"}}
                type="text"
                className="form-control"
                placeholder="search"
              />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
