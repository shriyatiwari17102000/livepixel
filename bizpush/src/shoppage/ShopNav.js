import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { Container } from "react-bootstrap";
import userimg1 from "../images/userimg1.png";
import userimg2 from "../images/userimg2.png";
import userimg3 from "../images/userimg3.png";
import userimg4 from "../images/userimg4.png";
import { IoCompassSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { SiMessenger } from "react-icons/si";
import { HiArrowTrendingUp } from "react-icons/hi2";
import {
  BsGlobeAsiaAustralia,
  BsFillBuildingFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import MyCard from "./ShopPage";
import RightSideBar from "./RightsideBar";

const MyNavbar = () => {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ borderBottom: "2px solid rgba(242, 243, 245, 1)" }}
      >
        <IoReorderThreeSharp className="threeline_icon" />
        <Navbar.Brand href="#home" className="title_shopnav">
          Constructor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav style={{ marginLeft: "100px", marginTop: "-10px" }}>
            <Nav.Link className="shopnav_heading">Dashboard</Nav.Link>
            <Nav.Link className="shopnav_heading">About Us</Nav.Link>
            <Nav.Link
              className="shopnav_heading"
              style={{ marginLeft: "-5px" }}
            >
              News
            </Nav.Link>
            <Nav.Link
              className="shopnav_heading"
              style={{ marginLeft: "-30px" }}
            >
              User Policy
            </Nav.Link>
            <Nav.Link className="shopnav_heading">Contacts</Nav.Link>
            <NavDropdown
              title={<BsThreeDots className="threedot_shop" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <div className="custom-search-input">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search Transaction and Documents"
                className="search-input shop_input"
              />
            </div>
          </Form>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            {" "}
            <FaUserCircle className="shopnav_user" />
            <p className="shopnav-para2">Clayton Santos</p>
            <BsFillBellFill className="shopnav_bell" />
            <div className="cross_shopnav">
              {" "}
              <RxCrossCircled className="cross_inn" />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid className="sidenav_cont">
        <Nav className="flex-column" style={{ marginLeft: "15px" }}>
          <Nav.Link className="sidenav_icon" style={{ marginTop: "52px" }}>
            <IoCompassSharp className="side_icon" />
          </Nav.Link>
          <Nav.Link className="sidenav_icon">
            <AiFillStar className="side_icon" />
          </Nav.Link>
          <Nav.Link className="sidenav_icon">
            <SiMessenger className="side_icon" />
          </Nav.Link>
          <Nav.Link className="sidenav_icon">
            <HiArrowTrendingUp className="side_icon" />
          </Nav.Link>
          <Nav.Link className="sidenav_icon">
            <BsGlobeAsiaAustralia className="side_icon" />
          </Nav.Link>
          <Nav.Link className="sidenav_icon">
            <BsFillBuildingFill className="side_icon" />
          </Nav.Link>
        </Nav>
        <Nav
          className="flex-column"
          style={{ marginTop: "266px", marginLeft: "15px" }}
        >
          <Nav.Link href="#star" className="sidenav_icon">
            <BsPlusCircleFill className="side_icon" />
          </Nav.Link>
          <Nav.Link href="#camera">
            <img src={userimg1} className="userimg_sidenav" />
          </Nav.Link>
          <Nav.Link href="#music">
            <img src={userimg2} className="userimg_sidenav" />
          </Nav.Link>
          <Nav.Link href="#film">
            <img src={userimg3} className="userimg_sidenav" />
          </Nav.Link>
          <Nav.Link href="#book">
            <img src={userimg4} className="userimg_sidenav" />
          </Nav.Link>
        </Nav>
      </Container>

      <MyCard />
      <RightSideBar />
    </>
  );
};

export default MyNavbar;
