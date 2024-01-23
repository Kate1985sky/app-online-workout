import { Col, Container, Row } from "react-bootstrap";
import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <div
      className="w-100 position-relative overflow-hidden flex-md-column"
      style={{ background: "var(--basic, #7036BA)" }}
    >
      <Container className={styles.content}>
        <Row>
          <Col>
            <h1 className="p-2 fw-bold lh-sm" style={{ color: "white" }}>
              Online Workout
              <br />
              Personal Program
            </h1>
            <p className="p-2" style={{ color: "white" }}>
              Start training online with your personal coach
              <br />
              and become healthy
            </p>
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
              Start Training
            </button>
          </Col>
        </Row>
      </Container>

      <Container fluid className={styles.bg}>
        <Row className={styles.wrapper}>
          <Col xs={{ span: 6, offset: 6 }}>
            <div className={styles.heroImage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
