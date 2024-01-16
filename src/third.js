import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Nav from "./nav-1";
import Foter from "./fotter";
import { FiMenu } from "react-icons/fi";
import "./third.css";
import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="nav-stop">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="menu-edit">
                  Home
                </Link>
                <Link to="story" className="menu-edit">
                  Our Story
                </Link>
                <img
                  src="https://oldladygang.com/wp-content/uploads/2017/03/olg-logo-sticky-1.png"
                  style={{
                    padding: "10px 0",
                    width: "20%",
                  }}
                  alt=""
                />
                <Link to="/menu" className="menu-edit">
                  Menu
                </Link>
                <Link to="careers" className="menu-edit">
                  Careers
                </Link>
              </Typography>

              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <div className="slid">
        <div className="back-img-6">
          <div className="back-head container">
            <h2 className="head-edit">CAREERS AT OLG</h2>

            <div className="img-back">
              <img
                src="https://oldladygang.com/wp-content/uploads/2017/03/star-3.png"
                alt=""
              />
            </div>
            <h2 className="edit-2">
              <strong>
                Apply to become a part of our team and we’ll get back to you
                ASAP!
              </strong>
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="third-1">
          <form action="">
            <div>
              <div className="he-30"></div>
              <p className="third-2">
                Name
                <span className="third-3">(Required)</span>
              </p>
              <div className="third-4">
                <span className="padd-1">
                  <input className="third-5" type="text" required />
                  <span>First</span>
                </span>
                <span className="padd-1">
                  <input className="third-5" type="text" required />
                  <span>Last</span>
                </span>
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Birthdate
                <span className="third-3">(Required)</span>
              </p>
              <div className="third-6">
                <div className="third-7">
                  <input type="text" name="" id="" placeholder="MM" required />
                </div>
                <div className="third-7" style={{ marginLeft: "2%" }}>
                  <input type="text" name="" id="" placeholder="DD" required />
                </div>
                <div className="third-7" style={{ marginLeft: "2%" }}>
                  <input type="text" name="" id="" placeholder="YY" required />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Email
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <input type="text" className="third-8" required />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Phone
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <input type="text" className="third-8" required />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Address
                <span className="third-3">(Required)</span>
              </p>
              <div className="add-1">
                <div className="add-2">
                  <input type="text" className="third-8" required />
                  <span className="span-1">Street Address</span>
                </div>
                <div className="add-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="third-8"
                    required
                  />
                  <span className="span-1">City</span>
                </div>
                <div className="add-3">
                  <select name="Select" id="" className="third-9">
                    <option value="Selected" selected></option>
                    <option value="">Gujarat</option>
                    <option value="">Maharashtra</option>
                    <option value="">U.P</option>
                    <option value="">Madhya Pradesh</option>
                    <option value="">Rajasthan</option>
                    <option value="">Tamilnadu</option>
                    <option value="">Keral</option>
                  </select>
                  <span className="span-1">State</span>
                </div>
                <div className="add-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="third-8"
                    required
                  />
                  <span className="span-1">ZIP Code</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Select location applying for
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <select name="" id="" className="third-8">
                  <option value="OLG Peters Street">OLG Peters Street</option>
                  <option value="OLG Camp Creek">OLG Camp Creek</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Which position(s) are you interested in?
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Line Cook</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Prep Cook</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Dish/Utility/Busser</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Expo</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Kitchen Manager/Chef</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Front of House Manager</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Server</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Bartender</span>
                </div>
                <div>
                  <input type="checkbox" className="input-1" required />
                  <span className="span-2">Host</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Date available?
                <span className="third-3">(Required)</span>
              </p>
              <div className="third-6">
                <div className="third-7">
                  <input type="text" name="" id="" placeholder="MM" required />
                </div>
                <div className="third-7" style={{ marginLeft: "2%" }}>
                  <input type="text" name="" id="" placeholder="DD" required />
                </div>
                <div className="third-7" style={{ marginLeft: "2%" }}>
                  <input type="text" name="" id="" placeholder="YY" required />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                How did you hear about us?
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <input type="text" className="third-8" required />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Friends or relatives employed by OLG?
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <input type="text" className="third-8" required />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Days and hours available?
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <input type="text" className="third-8" required />
                  <span className="span-1">Please list all availability</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">
                Emergency Contact
                <span className="third-3">(Required)</span>
              </p>
              <div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="text-1"
                    cols="50"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p className="third-2">Upload Your Resume (Optional)</p>
              <div>
                <div>
                  <input type="file" style={{ width: "100%" }} required />
                  <span className="span-3">
                    Accepted file types: pdf, doc, docx, Max. file size: 5 MB.
                  </span>
                </div>
              </div>
            </div>

            <div className="submit-1">
              <input type="submit" className="submit-2" required />
            </div>
          </form>
          <div>
            <p className="p-1">
              Burruss Tucker Restaurant Group APPLICATION FOR EMPLOYMENT (BTRG)
              is an EQUAL OPPORTUNITY EMPLOYER & does not discriminate in
              employment) No question on this application is used for the
              purpose of limiting or exchanging any applicant’s consideration
              for employment on a basis prohibited by local, state or federal
              law{" "}
            </p>
          </div>
        </div>
      </div>
      <div style={{ fontSize: "14px", color: "white", fontWeight: "400" }}>
        <div style={{ backgroundColor: "#262526" }}>
          <div style={{ width: "1140px", margin: "0 auto" }}>
            <span
              style={{
                padding: "25px 0 25px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                letterSpacing: "0",
              }}
            >
              Copyright All Rights Reserved © 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Third;
