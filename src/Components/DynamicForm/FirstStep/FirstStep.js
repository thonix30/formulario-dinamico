import { Container, Row } from 'react-bootstrap';
import './FirstStep.css';
import CardFruit from './CardFruit';
import { useState } from 'react';

export const fruits = [
  {
    id: 1,
    icon: "🍊",
    name: "Naranja",
    description:
      "Fruta color naranja que utilizamos para hacer frescos de naranja con soda",
  },
  {
    id: 2,
    icon: "🍓",
    name: "fresa",
    description:
      "fruta que nrmalmente comemos en los yogurts",
  },
  {
    id: 3,
    icon: "🍌",
    name: "Banana",
    description:
      "Fruta que utilizamos para hacer licuados",
  },
];


export default function FirstStep() {

  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (fruit) => {
    setSelectedCard(fruit.id);
    localStorage.setItem('fruitName', fruit.name);
    localStorage.setItem('iconFruit', fruit.icon);
  };

 
  
  return (
    <div>
      <h2>Coloca tu fruta favorita</h2>
      <h4>Selecciona la fruta con click </h4>
      <Container className='p-5 text-center'>
        <Row>
          {fruits.map((fruit, index) => (
              <CardFruit 
              fruit={fruit} 
              key={index} 
              clickCard={clickCard} 
              selectedCard={selectedCard}
              />
          ))}
          
        </Row>
      </Container>
    </div>
  )
}
