import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faqItems } from "./Faq.data";
import styles from "./Faq.module.css";
import classNames from "classnames";

export const Faq = () => {
  return (
    <div
      className="mt-5"
      style={{ backgroundColor: "#7036BA", minHeight: 400, color: "white" }}
    >
      <Row>
        <Col xs={12}>
          <h1 className="mt-5 text-center fw-bold">FAQ</h1>
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 w-75 pb-5">
        <Col>
            <Accordion className={styles.bodyColor} defaultActiveKey="0">
              {
                faqItems.map(({title, body}, index) => (
                  <Accordion.Item  eventKey={index} key={index}>
                    <Accordion.Header className={classNames("fw-bold", styles.accordionButton)}>{title}</Accordion.Header>
                    <Accordion.Body className="lh-1 p-0 px-4 fw-light" dangerouslySetInnerHTML={{ __html: body }} />
                  </Accordion.Item>
                ))
              }
            </Accordion>
          </Col>

        </Row>
      </Container>
    </div>
  );
};
