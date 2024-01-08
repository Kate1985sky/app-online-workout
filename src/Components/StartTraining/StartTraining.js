import { Container, Row, Col } from "react-bootstrap";

export const StartTraining = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Start Training</h1>
          <p className="text-center">
            Leave your phone and we will send you a link to our special chat
            bot. No spam guarateed.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form className="dropdown-menu p-4">
            <div className="mb-3">
              <label for="exampleDropdownFormEmail2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleDropdownFormPassword2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck2"
                />
                <label className="form-check-label" for="dropdownCheck2">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
