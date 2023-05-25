import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import './ThirdStep.css';

export default function ThirdStep() {
  return (
    <div>
      <h2>Tercer paso</h2>
      <h4>¿que es lo que necesitas?</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="deja un comentario" onChange={(e) => console.log(e.target.value)} />

            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={()=> console.log("viendo resultados")}>
            Viendo resultados 🙌
          </p>
        </div>
      </Container>
    </div>
  )
}
