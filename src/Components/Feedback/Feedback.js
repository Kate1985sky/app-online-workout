import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as IconFemale } from "./icons/female.svg";
import { ReactComponent as IconMale } from "./icons/male.svg";
import { ReactComponent as LeftIcon } from "./icons/icon-left.svg";
import { ReactComponent as RightIcon } from "./icons/icon-right.svg";

const items = [
  {
    icon: LeftIcon,
    photo: IconFemale,
    text: `The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional. The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional.The most amazing fitness trainings!`,
  },
  {
    icon: RightIcon,
    photo: IconMale,
    text: `The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional. The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional.The most amazing fitness trainings!.`,
  }
]

export const Feedback = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="mt-5 text-center fw-bold">Feedback About Us</h1>
        </Col>
      </Row>
      
      <Row className="mt-5">
      {
            items.map(({text, photo: Icon, icon: Sign}, index) => (
              <Col key={index}>
                <div className="d-flex px-2">
                  <div>
                    <Sign />
                    <Icon />
                  </div>
                  <p>{text}</p>
                </div>
              </Col>
            ))
          }
      </Row>
      </Container>
    
  );
};
