import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as IconOne } from "./icons/one.svg";
import { ReactComponent as IconTwo } from "./icons/two.svg";
import { ReactComponent as IconThree } from "./icons/three.svg";

const items = [
  {
    icon: IconOne,
    text: `Sign up in Fitness Online with your phone number. No spam
    guaranteed. You can skip using Fitness Onlline at any moment`,
  },
  {
    icon: IconTwo,
    text: `We will immeadiately add you in our chat bot, where you will be
  able to pay chosen pricing plan`,
  },
  {
    icon: IconThree,
    text: `In 24 hours after payment your trainer will contact you to get
  acquainted and to make training program best for you`,
  },
];

export const HowToStart = () => {
  return (
    <div style={{ backgroundColor: "#7036BA", minHeight: 400, color: "white" }}>
      <Row className="mt-5">
        <Col xs={12}>
          <h1 className="mt-5 text-center fw-bold">How to start</h1>
          <br />
          <p className="text-center">
            It’s easy to start training right now without going anywhere, just
            in your room, having without missing important things and coach
            <br />
            advices
          </p>
        </Col>
      </Row>
      <Container>
        <Row className="mt-4 flex-md-column">
          {items.map(({ text, icon: Icon }, index) => (
            <Col key={index} className="py-3" xs={4} md={12}>
              <div className="d-flex justify-content-start align-items-center lh-1">
                <div className="mx-2" style={{ width: 40, height: 50 }}>
                  <Icon />
                </div>
                <p>{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
// mt-5 d-flex justify-content-center align-self-center lh-1