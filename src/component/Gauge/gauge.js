// import { Component } from "react";
import "./gaugeStyle.css";
// import ReactDOM from "react-dom";
import ReactSpeedometer from "react-d3-speedometer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gauge = ({ value }) => {
  return (
    <div className="center">
      <h1 className="title">Speed</h1>

      <Container className="p-3">
        <Col>
          <Row>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={210}
                ringWidth={20}
                customSegmentStops={[
                  0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 210,
                ]}
                segmentColors={[
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FF0000",
                  "#FF0000",
                  "#FAFAFA",
                  "#FAFAFA",
                  "#FAFAFA",
                ]}
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText={"${value} Km/h"}
                value={value}
              />
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Gauge;
