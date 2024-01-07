import { Row, Col, Container } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col>Some video</Col>
        <Col>Some video</Col>
      </Row>
    </Container>
  );
};
