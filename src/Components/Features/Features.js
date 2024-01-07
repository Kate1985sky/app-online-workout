import { Row, Col, Container } from "react-bootstrap";

export const Features = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Features</h1>
        </Col>
      </Row>
      <Row>
        <Col><img src="../../icons/gift.svg" alt="should be icon"/></Col>
        <Col><img src="../../icons/program.png.png" alt="should be icon"/></Col>
        <Col><img src="../../icons/laptop.png.png" alt="should be icon"/></Col>
      </Row>
      <Row>
        <button>Start training</button>
      </Row>
    </Container>
  );
};
