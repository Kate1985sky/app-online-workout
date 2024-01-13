import { Row, Col} from "react-bootstrap";

export const Footer = () => {
  return (
    
      <Row className="mt-5" style={{ height: 125}}>
        <Col className="d-flex justify-content-around align-items-center" style={{ backgroundColor: "#7036BA", color: "white" }}>
          <p>Terms of Service</p>
          <p>© Fitness Online, 2022</p>
        </Col>
      </Row>
    
  );
};
