import { Row, Col, Container } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">About Us</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="w-25"><iframe width="560" height="315" src="https://www.youtube.com/embed/5u0D7D5Jcro?si=3F-9BgnuF4XfnQw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
        <Col className="w-25"><iframe width="560" height="315" src="https://www.youtube.com/embed/5u0D7D5Jcro?si=3F-9BgnuF4XfnQw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
      </Row>
    </Container>
  );
};
