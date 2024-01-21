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

      <Row className="mt-5 align-items-end">
        {items.map(({ text1, text2, icon: Icon }, index) => (
          <Col xs={12} lg={4} className="p-3" key={index}>
            <div className="d-inline-flex flex-lg-column d-flex align-items-center">
              <div className="flex-shrink-0">
                <Icon />
              </div>
              <div className="px-3 py-2 flex-grow-1 text-center">
                <span className="mt-3 fw-bold">{text1}</span>
                <br />
                <span className="lh-1 text-muted">{text2}</span>
              </div>
            </div>
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
