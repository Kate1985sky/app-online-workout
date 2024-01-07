import { Container, Row, Col } from "react-bootstrap";

export const Feedback = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Feedback About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="../../image/female.png" className="img-fluid rounded-start" alt="Should be photo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="../../image/male.png" className="img-fluid rounded-start" alt="Should be photo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
