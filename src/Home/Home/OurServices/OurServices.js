import React from "react";
import { Row } from "react-bootstrap";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="service-container-div">
      <Row xs={1} md={4} className="g-5 m-0">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div class="containers service-container">
            <div class="service-card">
              <div class="box">
                <div class="content" style={{ backgroundColor: "#0000" }}></div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default OurServices;
