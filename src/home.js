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
import Nav from "./nav-1";
import Foter from "./fotter";
import { FiMenu } from "react-icons/fi";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div style={{ textAlign: "center", position: "sticky" }}>
        <div>
          <img
            src="https://oldladygang.com/wp-content/uploads/2017/03/bg.jpg"
            alt=""
          />
        </div>
        <img
          src="https://oldladygang.com/wp-content/uploads/2020/09/vip-4.png"
          className="uper-2"
          alt=""
        />
        <img
          src="https://oldladygang.com/wp-content/uploads/2017/04/olg.png"
          className="uper-1"
          alt=""
        />
        <img
          src="https://oldladygang.com/wp-content/uploads/2017/04/down.png"
          className="uper-3"
          alt=""
        />
        <img
          src="https://oldladygang.com/wp-content/uploads/2018/04/awards.png"
          className="uper-4"
          alt=""
        />
      </div>

      {/* <img
          src="https://oldladygang.com/wp-content/plugins/revslider/admin/assets/images/transparent.png"
          alt=""
        />
        <img
          src="https://oldladygang.com/wp-content/uploads/2017/06/mama-joyce-5.png"
          className="middle-1"
          alt=""
        />
      </div> */}
      <div style={{ marginTop: "40px" }}>
        <div className="second">
          <div>
            <div className="second-1">Discover</div>
            <p className="second-2">OUR STORY</p>
            <div style={{ textAlign: "center" }}>
              <img
                className="second-3"
                src="https://oldladygang.com/wp-content/uploads/2017/05/icon.png"
                alt=""
              />
            </div>
            <div className="second-4">
              {" "}
              <b>Joyce Jones</b>
              <b>Bertha Jones</b>
              <b>Nora Wilcox</b> are the original OLG’s. If there’s one thing
              that you don’t have to question, when it comes to these three
              firecrackers, is that family truly comes first as far as they’re
              concerned. They’re three enthusiastic sisters from Atlanta,
              Georgia that certainly know their way around a kitchen.{" "}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <a href="" className="second-5">
                <span>READ MORE</span>
              </a>
            </div>
          </div>

          <img
            src="https://oldladygang.com/wp-content/plugins/revslider/admin/assets/images/transparent.png"
            alt=""
          />
          <img
            src="https://oldladygang.com/wp-content/uploads/2017/06/mama-joyce-5.png"
            className="middle-1"
            alt=""
          />
        </div>
      </div>

      <div style={{ marginTop: "48px" }}>
        <div className="backk-img">
          <div className="backk">
            <div className="backk-2">
              <h2 className="backk-1">
                <span>view our menu</span>
              </h2>
              <div className="img-1">
                <div style={{ width: "33.3333%" }}></div>
                <div className="img-2">
                  <img
                    src="https://oldladygang.com/wp-content/uploads/2017/03/divider-3.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
                <div style={{ width: "33.333%" }}></div>
              </div>
              <h2 className="h2-edit">
                <p style={{ margin: "0px" }}>
                  The Old Lady Gang promises to deliver good old fashioned
                  southern cuisine made with love. Browse below or{" "}
                  <a
                    href=""
                    style={{
                      outline: "0 none",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <strong>CLICK HERE</strong>
                  </a>{" "}
                  to view our full menu selection.
                </p>
              </h2>
              <div style={{ width: "100%" }}>
                <div className="one-5">
                  <div>
                    <div className="one-1">
                      <a href="" className="one">
                        DRINKS
                      </a>
                    </div>
                    <div className="one-1">
                      <a href="" className="one">
                        ENTREES
                      </a>
                    </div>
                  </div>
                </div>
                <div className="one-5">
                  <div>
                    <div className="one-1">
                      <a href="" className="one">
                        STARTERS
                      </a>
                    </div>
                    <div className="one-1">
                      <a href="" className="one">
                        DESSERT
                      </a>
                    </div>
                  </div>
                </div>
                <div className="one-5">
                  <div>
                    <div className="one-1">
                      <a href="" className="one">
                        SIDES
                      </a>
                    </div>
                    <div className="one-1">
                      <a href="" className="one">
                        VIEW FULL MENU
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="em-edit">
                    {" "}
                    <em>
                      Our menu is subject to change without notice. If you have
                      questions about an item please contact us ahead of time.
                      Additionally, we know mistakes can happen, & we are always
                      happy to correct any errors made by our staff. Food that
                      is prepared correctly may NOT be returned. This applies to
                      everything, from spicy dishes to cocktails. If you have a
                      sensitive palate, please let your server know.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="seco">
          <img
            src="https://oldladygang.com/wp-content/uploads/2017/06/aunt-bertha.png"
            className="middle-3"
            alt=""
          />

          <div>
            <div className="second-1">Wanted </div>
            <p className="second-2">FOR THE BEST </p>
            <div style={{ textAlign: "center" }}>
              <img
                className="second-3"
                src="https://oldladygang.com/wp-content/uploads/2017/05/cuisine-icon.png"
                alt=""
              />
            </div>
            <div className="seco-4">
              <img
                src="https://oldladygang.com/wp-content/uploads/2020/09/olg-food-2-2.11.33-pm.png"
                className="seco-1"
                width={"100%"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <span
            // src="//player.vimeo.com/video/457955699?autoplay=1&badge=0&title=0&byline=0&background=1&muted=1&loop=1"
            // frameborder="0"
            // width="500"
            // height="281"
            // allowfullscreen
            // mozallowfullscreen
            // webkitallowfullscreen
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage:
                "url('https://oldladygang.com/wp-content/uploads/2017/03/story.jpg')",
            }}
          ></span>
        </div>
        <div className="backk">
          <div className="backk-2">
            <h2 className="backk-1">
              <span>the olg experience</span>
            </h2>
            <div className="img-1">
              <div style={{ width: "33.3333%" }}></div>
              <div className="img-2">
                <img
                  src="https://oldladygang.com/wp-content/uploads/2017/03/divider-3.png"
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
              <div style={{ width: "33.333%" }}></div>
            </div>
            <h2 className="h2-edit">
              <p style={{ margin: "0px" }}>
                Second only to the incredible food is our atmosphere at Old Lady
                Gang. Located in Atlanta, GA’s historic Castleberry Hill, this
                multi-level dining and entertainment complex, complete with two
                full bars and outdoor patio has a style that’s all its own.
              </p>
            </h2>
            <div style={{marginBottom:'80px',marginTop:'0px',marginRight:'15px'}}>
              <div className="one-2">
                <div style={{ width: "20%" }}>
                  <div>
                    <a href="" className="one">
                      GO INSIDE
                    </a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "50px" }}>
        <div className="second">
          <div>
            <div className="second-1">Host </div>
            <p className="second-2">YOUR EVENT </p>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <img
                className="second-3"
                src="https://oldladygang.com/wp-content/uploads/2017/05/calendar-icon.png"
                alt=""
              />
            </div>
            <div className="second-4">
              At the Old Lady Gang, there’s a space for every occasion. From the
              private dining room, and the performance stage, to the outdoor
              patio. Your guests will be thrilled as you bring your event to
              life at OLG. Contact us today and a representative will contact
              you to discuss hosting your private event with us.
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <a href="" className="second-5">
                <span>CONTACT US</span>
              </a>
            </div>
          </div>

          <img
            src="https://oldladygang.com/wp-content/plugins/revslider/admin/assets/images/transparent.png"
            alt=""
          />
          <img
            src="https://oldladygang.com/wp-content/uploads/2017/03/aunt-nora.png"
            className="middle-1"
            alt=""
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#121212", minHeight: "100px" }}>
        <div
          style={{
            margin: "0 auto",
            width: "1140px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <img
            src="https://oldladygang.com/wp-content/uploads/2022/12/desktop.jpg"
            alt=""
            style={{ width: "100%", paddingLeft: "15px", paddingRight: "15px" }}
          />
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
export default Home;
