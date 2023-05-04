import { Col, Container, Row } from 'react-bootstrap';
import './Servicios.css';
import imgCurso1 from '../../assets/img/hbo.jpeg';
import imgCurso2 from '../../assets/img/netflix.jpeg';
import imgCurso3 from '../../assets/img/prime.jpeg';
import CardServicios from './CardServicios/CardServicios';
export default function Servicios() {

const servicesArray = [
    {
        title: 'Cursos de Wordpress',
        subtitle: 'Leer acerca de CRS',
        image: imgCurso1,
        footer:'👉🏻vamos a los cursos',
        link: '#!'
    },
    {
        title: 'Cursos de Capacitate para el Empleo',
        subtitle: 'Leer acerca de CRS',
        image: imgCurso2,
        footer:'👉🏻vamos a los cursos',
        link: '#!'
    },
    {
        title: 'Cursos de Udemy',
        subtitle: 'Leer acerca de CRS',
        image: imgCurso3,
        footer:'👉🏻vamos a los cursos',
        link: '#!'
    },
]

  return (
    <div className='services p-4 mt-5'>
        <Container fluid >
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8} >
                    <h2 className='text-center'>Servicios</h2>
                    <h4 className='pb-3 text-center'>checa algunos servicios</h4>
                    <Row xs={1} md={3} className='g-4 mt-4'>
                        {servicesArray.map((servicios, index) => (

                            <CardServicios servicios={servicios} key={index}/>
                        ))}
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
