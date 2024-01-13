import { Container, Row, Col } from "react-bootstrap";
import { items } from "./PricingIcons";

export const Pricing = () => {
  return (
    <div style={{ backgroundColor: "#7036BA", height: 560, color: "white" }}>
      <Row className="mt-5">
        <Col>
          <h1 className="mt-5 text-center fw-bold">Pricing</h1>
        </Col>
      </Row>
      <Container>
        <Row className="row justify-content-md-center mt-5">
          {items.map(
            (
              {
                list1,
                list2,
                list3,
                list4,
                list5,
                list6,
                title,
                button,
                icon: Icon,
              },
              index
            ) => (
              <Col
                style={{ backgroundColor: "#A76BF2" }}
                className="p-2 col col-lg-3 mx-3 rounded-2"
                key={index}
              >
                <p className="fs-3 fw-bold">{title}</p>

                <p className="lh-1 mt-3 m-0 px-3 text-muted fs-6">{list1}</p>

                <p className="lh-1 px-3 m-0 text-muted fs-6">{list2}</p>

                <p className="lh-1 px-3 m-0 text-muted fs-6">{list3}</p>

                <p className="lh-1 px-3 m-0 text-muted">{list4}</p>

                <p className="lh-1 px-3 m-0 text-muted fs-6">{list5}</p>

                <p className="lh-1 px-3 m-0 text-muted fs-6">{list6}</p>

                <div className="mt-5 d-flex flex-column align-self-end">
                  <Icon />
                  <span className="mt-3">{button}</span>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
};
