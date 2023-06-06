import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BsFillBagHeartFill,
  BsPlusCircleFill,
  BsFillGrid3X2GapFill,
} from "react-icons/bs";
import {
  RiFilter3Line,
  RiSearchLine,
  RiEdit2Line,
  RiDeleteBin6Line,
} from "react-icons/ri";
import { IoReorderFourSharp } from "react-icons/io5";

function InnerNav() {
  return (
    <>
      <Navbar expand="lg" className="inn_nav_main">
        <Container fluid>
          <BsFillBagHeartFill className="bag_inn" />
          <Navbar.Brand href="#" className="title_inn">
            Products
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft: "228.5px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="inn_head">
                Active
              </Nav.Link>
              <Nav.Link href="#action2" className="inn_head">
                Draft
              </Nav.Link>

              <Nav.Link href="#action2" className="inn_head">
                Assembly
              </Nav.Link>
            </Nav>

            <Button className="inn_btn">
              {" "}
              <BsPlusCircleFill className="plusicon_inn" /> Add Product
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="inn_second_nav">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ marginLeft: "25px" }}>
              <Form.Check type="checkbox" label="Select All" />
            </Nav>
            <Nav style={{ marginLeft: "253px", marginRight: "auto" }}>
              <Button
                variant="outline-secondary"
                className="mr-2 filter_btn"
                style={{ borderRadius: "5px 0px 0px 5px !important" }}
              >
                <RiFilter3Line /> <p className="crud_para">Filter</p>
              </Button>
              <Button
                variant="outline-secondary"
                className="mr-2 filter_btn all_inn_btn"
              >
                <RiSearchLine /> <p className="crud_para">Search</p>
              </Button>
              <Button
                variant="outline-secondary"
                className="mr-2 filter_btn all_inn_btn"
              >
                <RiEdit2Line /> <p className="crud_para">Edit</p>
              </Button>
              <Button
                variant="outline-secondary"
                className="mr-2 filter_btn"
                style={{ borderRadius: "0px 5px 5px 0px" }}
              >
                <RiDeleteBin6Line /> <p className="crud_para">Delete</p>
              </Button>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link style={{ marginRight: "-18px" }}>
                <IoReorderFourSharp className="sortbyline" />
              </Nav.Link>
              <Nav.Link>
                <BsFillGrid3X2GapFill className="sortbygrid" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default InnerNav;
