import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faqItems } from "./Faq.data";

export const Faq = () => {
  return (
    <div
      className="mt-5"
      style={{ backgroundColor: "#7036BA", height: 500, color: "white" }}
    >
      <Row>
        <Col>
          <h1 className="mt-5 text-center fw-bold">FAQ</h1>
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 w-50">
        <Col>
            <Accordion defaultActiveKey="0">
              {
                faqItems.map(({title, body}, index) => (
                  <Accordion.Item  eventKey={index} key={index}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body dangerouslySetInnerHTML={{ __html: body }} />
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
