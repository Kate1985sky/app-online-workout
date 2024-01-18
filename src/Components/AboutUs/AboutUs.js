import { Row, Col, Container } from "react-bootstrap";

const YouTubeVideo = ({ id }) => {
  const url = `https://www.youtube.com/embed/${id}`;

  return (
    <iframe
      style={{ width: "100%" }}
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs="12">
          <h1 className="text-center fw-bold">About Us</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs="12" lg="6">
          <YouTubeVideo id="5u0D7D5Jcro" />
        </Col>
        <Col xs="12" lg="6">
          <YouTubeVideo id="5u0D7D5Jcro" />
        </Col>
      </Row>
    </Container>
  );
};
