import { Col, Container, Row } from "react-bootstrap";
import styles from "./HeroBanner.module.css";
import classNames from "classnames";


export const HeroBanner = () => {

  return (
    <div className={classNames("w-100", styles.wrapper)}>
      <Container>
        <Row>
          <Col xs={12} lg={6} className={styles.content}>
            <h1 className="p-2 fw-bold lh-sm text-white">
              Online Workout
              <br />
              Personal Program
            </h1>
            <p className="p-2 text-white">
              Start training online with your personal coach
              <br />
              and become healthy
            </p>
            <button
              className={classNames("rounded-5", styles.button)}
            >
              Start Training
            </button>
          </Col>
        </Row>
      </Container>
      <div className={styles.background}/>
    </div>
  )
}
