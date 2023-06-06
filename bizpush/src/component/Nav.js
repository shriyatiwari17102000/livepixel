import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import user from "../images/user.png";
import { LuSearch } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

function NavBar() {
  const [state, setState] = useState(0);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container style={{ marginTop: "23.48px" }}>
        <Image src={logo} rounded className="img_dash" />
        <Navbar.Brand href="#home" className="logo_name">
          BIZPUSH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-center flex-grow-1"
            style={{ marginLeft: "-10rem" }}
          >
            <Nav.Link className="nav_titles">Home</Nav.Link>
            <Nav.Link className="nav_titles">Gallery</Nav.Link>
            <Nav.Link className="nav_titles">Shop</Nav.Link>
            <Nav.Link className="nav_titles">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {" "}
              <LuSearch className="icon_search" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <AiOutlineShoppingCart className="icon_cart" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="cart_count">
              {state}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img src={user} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
