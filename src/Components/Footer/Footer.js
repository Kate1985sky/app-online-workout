import { Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <Row
      className="mt-5 align-items-center"
      style={{ height: 125, backgroundColor: "#7036BA", color: "white" }}
    >
      <Col className="text-center" xs={12} sm={6}>
        <p>Terms of Service</p>
      </Col>
      <Col className="text-center" xs={12} sm={6}>
        <p>© Fitness Online, 2022</p>
      </Col>
    </Row>
  );
};
