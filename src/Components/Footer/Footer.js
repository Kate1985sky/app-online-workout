import { Row, Col} from "react-bootstrap";

export const Footer = () => {
  return (
    
      <Row style={{ height: 125}}>
        <Col className="d-flex justify-content-around align-items-center" style={{ backgroundColor: "#7036BA", color: "white" }}>
          <p>Terms of Service</p>
          <p>© Fitness Online, 2022</p>
        </Col>
      </Row>
    
  );
};
