import { Row, Col, Container } from "react-bootstrap";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Online Workout
            <br />
            Personal Program
          </h1>
          <p>
            Start training online with your personal coach and become healthy
          </p>
          <button>Start Training</button>
        </Col>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};
