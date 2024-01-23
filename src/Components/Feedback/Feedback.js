import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ReactComponent as IconFemale } from "./icons/female.svg";
import { ReactComponent as IconMale } from "./icons/male.svg";
import { ReactComponent as LeftIcon } from "./icons/icon-left.svg";
import { ReactComponent as RightIcon } from "./icons/icon-right.svg";

const items = [
  [
    {
      icon: LeftIcon,
      photo: IconFemale,
      text: `The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional. The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional.The most amazing fitness trainings!`,
    },
    {
      icon: RightIcon,
      photo: IconMale,
      text: `The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional. The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional.The most amazing fitness trainings!.`,
    },
  ],
  [
    {
      icon: LeftIcon,
      photo: IconFemale,
      text: `The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional. The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional.The most amazing fitness trainings!`,
    },
    {
      icon: RightIcon,
      photo: IconMale,
      text: `The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional. The most amazing fitness trainings! I’ve became true sportsman with it! Trainer is really professional.The most amazing fitness trainings!.`,
    },
  ],
];

export const Feedback = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs="12">
          <h1 className="mt-5 text-center fw-bold">Feedback About Us</h1>
        </Col>
        <Col xs={12}>
          <Carousel data-bs-theme="dark" indicators={false}>
            {items.map((list, index) => (
              <Carousel.Item key={index}>
                <Container>
                  <Row className="px-5">
                    {list.map(({ text, photo: Icon }, listIndex) => (
                      <Col
                        xs={12}
                        lg={6}
                        className="mt-5 px-3"
                        key={listIndex}
                      >
                        <div className="d-flex">
                          <div className="px-4">
                            <Icon />
                          </div>
                          <p>{text}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
