import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";
// import "./nav.css";
import Nav from "./nav-1";
import Foter from "./fotter";
import "./story.css";
import { Link } from "react-router-dom";


const Story = () => {
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
                <Link to='/' className="menu-edit">Home</Link>
                <Link to='story' className="menu-edit">Our Story</Link>
                <img
                  src="https://oldladygang.com/wp-content/uploads/2017/03/olg-logo-sticky-1.png"
                  style={{
                    padding: "10px 0",
                    width: "20%",
                  }}
                  alt=""
                />
                <Link to='/menu' className="menu-edit">Menu</Link>
                <Link to='careers' className="menu-edit">Careers</Link>
              </Typography>
              
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <div className="slid">
        <div className="back-img-5">
          <div className="back-head container">
            <h2 className="head-edit">OUR STORY</h2>

            <div className="img-back">
              <img
                src="https://oldladygang.com/wp-content/uploads/2017/03/star-3.png"
                alt=""
              />
            </div>
            <h2 className="edit-2">
              <strong>
                The Old Lady Gang promises to deliver its patrons good old
                fashioned southern cuisine made with love.
              </strong>
            </h2>
          </div>
        </div>
      </div>

      <div>
        <div className="para">
          <div className="para-2">
            <p>
              The <strong> Old Lady Gang (OLG)</strong> was conceptualized in
              2016, when husband and wife team, New York City native Todd Tucker
              & Atlanta, Georgia native Kandi Burruss-Tucker had the great idea
              of sharing some of the delicious down home Southern recipes, that
              Kandi was raised on as a child and has come to love as an adult,
              with the public. Although Kandi may credit herself for mastering
              some of the traditional family recipes, she also gives credit
              where credit is due; to her mother Joyce Jones, aunts Bertha Jones
              & Nora Wilcox, affectionately known as the “Old Lady Gang,” for
              teaching her a few things in the kitchen.
            </p>
            <p>
              No Strangers to the Arts & Entertainment, it was only fitting that
              the Tuckers would choose the Castleberry Hill neighborhood in
              Atlanta, GA as the home for The{" "}
              <strong> Old Lady Gang (OLG).</strong> One of the city’s Historic
              + Art Districts, Castleberry Hill continues to grow in both the
              number of residents as well as retail and other establishments.
            </p>
            <p>
              <strong> Joyce Jones</strong>, <strong>Bertha Jones</strong> &{" "}
              <strong>Nora Wilcox</strong> are the original <strong>OLG</strong>
              . If there’s one thing that you don’t have to question, when it
              comes to these three firecrackers, is that family truly comes
              first as far as they’re concerned. They’re three enthusiastic
              sisters from Atlanta that certainly know their way around a
              kitchen.
            </p>
            <p>
              We were first introduced to the <strong>OLG</strong> on Bravo TV’s
              Real Housewives of Atlanta. Whether they were revealing conspiracy
              theories, confirming the distance that their love will go, or
              bringing family issues to an order, they never failed to leave a
              lasting impression on you.
            </p>
            <p>
              One thing is for certain, if these three women put as much love
              and dedication into their original recipes as they do into their
              families, we are guaranteed to have some of the best southern
              cuisine that the South&nbsp;has to offer.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "40px",
          display: "block",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      ></div>

      <div className="back-gr">
        <div className="para-3">
          <div className="para-2">
            <h2 className="editt-h2">AWARDS & RECOGNITION</h2>
            <div style={{ height: "40px", display: "block" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "#262526",
                  lineHeight: "1.66em",
                }}
              >
                OpenTable 2018 Diners’ Choice Award
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#262526",
                  lineHeight: "1.66em",
                }}
              >
                Taste of Soul Atlanta 25 Best Soul Food Restaurants
              </p>
            </div>
            <div style={{ height: "40px", display: "block" }}></div>
          </div>
        </div>
      </div>
      <Foter></Foter>
    </div>
  );
};

export default Story;
