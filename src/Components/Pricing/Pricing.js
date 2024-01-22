import { Container, Row, Col } from "react-bootstrap";
import { items } from "./PricingIcons";

export const Pricing = () => {
  return (
    <div
      className="mt-5"
      style={{ backgroundColor: "#7036BA", minHeight: 560, color: "white" }}
    >
      <Row className="mt-5">
        <Col xs={12}>
          <h1 className="mt-5 text-center fw-bold">Pricing</h1>
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 row justify-content-center">
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
                xs={12}
                lg={3}
                style={{ backgroundColor: "#A76BF2" }}
                className="my-2 mx-3 rounded-2"
                key={index}
              >
                <div className="mb-3 d-flex align-items-start flex-column">
                  <div>
                    <p className="fs-3 fw-bold">{title}</p>

                    <p className="lh-1 mt-3 m-0 px-3 text-muted fs-6">
                      {list1}
                    </p>

                    <p className="lh-1 px-3 m-0 text-muted fs-6">{list2}</p>

                    <p className="lh-1 px-3 m-0 text-muted fs-6">{list3}</p>

                    <p className="lh-1 px-3 m-0 text-muted">{list4}</p>

                    <p className="lh-1 px-3 m-0 text-muted fs-6">{list5}</p>

                    <p className="lh-1 px-3 m-0 text-muted fs-6">{list6}</p>
                  </div>
                  <div className="mt-auto">
                    <Icon />
                    <p className="my-2">{button}</p>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
};
