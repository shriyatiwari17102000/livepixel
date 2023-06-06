import React from "react";
import { Card, Col, Button, Row, Dropdown } from "react-bootstrap";
import Chart1 from "../images/Chart1.png";
import Chart2 from "../images/Chart2.png";
import Chart3 from "../images/Chart3.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const RightSideBar = () => {
  const actions = ["11:32", "11:21", "10:54", "9:45", "9:45", "9:45"];
  const orders = [
    { data: "New Category Added «Mobile phones»" },
    { data: "New Product Added «Apple iPhone 9»" },
    { data: "New Product Added «Apple iPad Pro 12.9»" },
    { data: "New Product Added «Apple iPad Pro 12.9»" },
    { data: "New Category Added  «Smart Watches»" },
    { data: "New Category Added  «Smart Watches»" },
  ];
  return (
    <div className="d-flex flex-column align-items-end right_main_div ">
      <Card
        style={{
          width: "16rem",
          height: "155px",
          marginBottom: "26px",
          background: "#F7F8FA",
        }}
      >
        <div className="d-flex align-items-center" style={{ height: "106px" }}>
          <div>
            <Card.Title className="sidebar_head">Total Sales</Card.Title>
            <Card.Title className="sidebar_price_title">$281.90</Card.Title>
          </div>
          <Card.Img
            variant="top"
            src={Chart1}
            style={{
              marginLeft: "25px",
              width: "100px",
              height: "55px",
              marginTop: "21px",
            }}
          />
        </div>
        <div style={{ borderBottom: "1px solid #ddd" }} />
        <div className="d-flex justify-content-between">
          <span className="chart1_span" style={{ marginLeft: "11px" }}>
            6 total orders
          </span>
          <span className="chart1_span">View report</span>
        </div>
      </Card>

      <Card
        style={{
          width: "16rem",
          height: "155px",
          marginBottom: "26px",
          background: "#F7F8FA",
        }}
      >
        <div className="d-flex align-items-center" style={{ height: "106px" }}>
          <div>
            <Card.Title className="sidebar_head">Total Sessions</Card.Title>
            <Card.Title className="sidebar_price_title">456</Card.Title>
          </div>
          <Card.Img
            variant="top"
            src={Chart2}
            style={{
              marginLeft: "25px",
              width: "100px",
              height: "55px",
              marginTop: "21px",
            }}
          />
        </div>
        <div style={{ borderBottom: "1px solid #ddd" }} />
        <div className="d-flex justify-content-between">
          <Button className="btn_sidebarchart">Live</Button>
          <span className="chart1_span" style={{ marginLeft: "27px" }}>
            4 visitors
          </span>
          <span className="chart1_span">See Live View</span>
        </div>
      </Card>

      <Card style={{ width: "16rem", height: "155px", background: "#F7F8FA" }}>
        <div className="d-flex align-items-center" style={{ height: "106px" }}>
          <div>
            <Card.Title className="sidebar_head">Customer rate</Card.Title>
            <Card.Title className="sidebar_price_title">5.43%</Card.Title>
          </div>
          <Card.Img
            variant="top"
            src={Chart3}
            style={{
              marginLeft: "25px",
              width: "100px",
              height: "55px",
              marginTop: "21px",
            }}
          />
        </div>
        <div style={{ borderBottom: "1px solid #ddd" }} />
        <div className="d-flex justify-content-between">
          <span className="chart1_span" style={{ marginLeft: "11px" }}>
            First Time
          </span>
          <span className="chart1_span">Returning</span>
        </div>
      </Card>

      <Card style={{ marginTop: "32px", background: "#F7F8FA" }}>
        <BsThreeDotsVertical className="menu_rightsidebar" />
        <Card.Body>
          <Row>
            <Col xs={4}>
              <h5 className="rightnav_section_action">Actions</h5>
              <ul>
                {actions.map((action, index) => (
                  <li key={index} className="action_time">
                    {action}
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={8}>
              <h5 className="rightnav_section_order">Orders</h5>
              <ul>
                {orders.map((order) => (
                  <li className="action_order">{order.data}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightSideBar;
