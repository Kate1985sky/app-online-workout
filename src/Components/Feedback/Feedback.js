import { Container, Row, Col } from "react-bootstrap";

export const Feedback = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="mt-5 text-center fw-bold">Feedback About Us</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="../../image/female.svg"
                  className="img-fluid rounded-start"
                  alt="Should be photo"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
                <img
                  src="../../image/male.svg"
                  className="img-fluid rounded-start"
                  alt="Should be photo"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
