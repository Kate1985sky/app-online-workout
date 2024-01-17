import { Row, Col } from "react-bootstrap";
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Row style={{ minHeight: 500 }} className="flex-column-md-column">
      <Col xs sm md="12" style={{ backgroundColor: "#7036BA" }}>
        <Col lg={{ span: 7, offset: 5 }} >
        <div className="mt-3 mb-5 p-2">
          <Logo />
        </div>
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
      </Col>
      <Col xs sm md="12" className={styles.font}>
        <Navigation />
      </Col>
    </Row>
  );
};


