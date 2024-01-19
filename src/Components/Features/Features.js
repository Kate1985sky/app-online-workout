import { Row, Col, Container } from "react-bootstrap";
import { items } from "./FeaturesIcons";

export const Features = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12}>
          <h1 className="mt-5 text-center fw-bold">Features</h1>
        </Col>
      </Row>

      <Row className="mt-5 d-flex align-items-end">
        {items.map(({ text1, text2, icon: Icon }, index) => (
          <Col xs={12} lg={4} className="text-center" key={index}>
            <Icon />

            <p className="mt-3 fw-bold">{text1}</p>
            <p className="lh-1 text-muted">{text2}</p>
          </Col>
        ))}
      </Row>

      <Row>
        <Col xs={12} className="mt-5 text-center">
          <button
            className="rounded-5"
            style={{
              backgroundColor: "#00BFB4",
              color: "white",
              width: 261,
              height: 65,
              border: "none",
              fontSize: 25,
            }}
          >
            Start training
          </button>
        </Col>
      </Row>
    </Container>
  );
};
