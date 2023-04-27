import { Button, Col, Container, Row } from 'react-bootstrap';
import './Introduction.css';

export default function Introduccion() {
  return (
    <div className='introduction p-3 p-lg-5 mt-5' >
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className='pl-2 text-center'>
              Bienvenidos al Formulario Dinamico{" "}<span className='pt-2 pb-4'>donde puedes hacer lo que quieras🤪</span>
            </h1>
            <h4 className='text-center pt-3'>
  
                Me enfoco en el desarrollo web, ya que me gusta mucho lo visual que es el FrontEnd, tengo conocimientos solidos tanto de Frontend como backend.
            </h4>
            <div className='d-flex container-actions mt-5'>
              <div className='container-buttons'>
                <Button className='p-3' 
                onClick={() => console.log('click button')}>Get in Touch</Button>
                <Button className='p-3'>Get in touch
                </Button>
                </div>
                  <div className='btn-start-create'>
                    <a href='#dynamic-form'>Start to Create 👉🏻</a>
                  </div>
                </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  )
}
