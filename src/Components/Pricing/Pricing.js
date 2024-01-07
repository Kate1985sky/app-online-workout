import { Container, Row, Col } from "react-bootstrap"


export const Pricing = () => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-center">Pricing</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>Start</h2>
                <p>Program for 8 workouts</p>
                <p>3 calls with the trainer</p>
                <p>Video instructions</p>
                <button>Choose</button>
                </Col>
                <Col>
                <h3>Middle</h3>
                <p>Program for 18 workouts</p>
                <p>5 calls with the trainer</p>
                <p>Video instructions</p>
                <p>Text instructions</p>
                <p>1 technique analysis</p>
                <button>Shoose</button>
                </Col>
                <Col>
                <h4>Pro</h4>
                <p>Program for 40 workouts</p>
                <p>15 calls with the trainer</p>
                <p>Video instructions</p>
                <p>Text instructions</p>
                <p>5 technique analysis</p>
                <p>Acces to chat with other sportsmen</p>
                <button>Shoose</button>
                </Col>
            </Row>
        </Container>
    )
}