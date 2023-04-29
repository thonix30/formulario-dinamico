import { Card, Col } from 'react-bootstrap';
import './cardServicios.css';

export default function cardServicios({servicios}) {
    
    const {title, subtitle, image, footer, link} = servicios;

  return (
    <Col className='container-card-service'>
      <Card>
        <Card.Img src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={link} target='_blank' rel='noreferrer'>
            {footer}
          </a>
        </Card.Footer>
      </Card>
    </Col>
  )
}
