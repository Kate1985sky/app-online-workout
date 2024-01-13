import { Container, Row, Col } from "react-bootstrap";

export const StartTraining = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center fw-bold mt-5">Start Training</h1>
          <p className="text-center mt-4 fs-6 fw-lighter text-body">
            Leave your phone and we will send you a link to our special chat
            bot. No spam guarateed.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }}>
          <form className="p-4">
            <div className="mb-3">
              <label for="exampleDropdownFormEmail2" className="form-label">
                Your Phone
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="+1_"
              />
            </div>
            <div className="mb-3">
              <label for="exampleDropdownFormPassword2" className="form-label">
                Your Name
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="Your name"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="flexCheckChecked" checked
                />
                <label className="form-check-label" for="dropdownCheck2">
                  I accept Terms of Service
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-5 mt-2 ms-4"
              style={{
                backgroundColor: "#00BFB4",
                color: "white",
                width: 261,
                height: 65,
                border: "none",
                fontSize: 25,
              }}
            >
              Start Training
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
