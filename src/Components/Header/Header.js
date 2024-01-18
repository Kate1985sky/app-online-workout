import { Row, Col, Container } from "react-bootstrap";
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";


export const Header = () => {
  return (
    <div className="position-absolute w-100 top-0 z-2">
      <Container >
        <Row className="d-flex align-items-center">
          <Col xs={9} sm={6}>
            <Logo />
          </Col>
          <Col xs={3} sm={6}>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
};


