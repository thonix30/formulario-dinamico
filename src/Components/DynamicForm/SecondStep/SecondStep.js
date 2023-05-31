import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";


const options = [
  { id: 1, value: "beisbol", label: "Beisbol ⚾" },
  { id: 2, value: "futbol", label: "Futbol ⚽" },
  { id: 3, value: "computacion", label: "Computacion 💻" },
  { id: 4, value: "jugar", label: "Jugar 🎮" },
  { id: 5, value: "musica", label: "Escuchar musica 🎼" },
  { id: 6, value: "Patinaje", label: "Patinaje de Hielo ⛸️" },
  { id: 7, value: "foto", label: "Fotografia 📷" },
  { id: 8, value: "nadar", label: "Natacion 🥽" },
  { id: 9, value: "correr", label: "Correr 👟" },
  { id: 10, value: "basquetbol", label: "Basquetbol 🏀" },
  { id: 11, value: "boxeo", label: "boxeo🥊 " },
  
];


export default function SecondStep() {

const [selectOption, setSelectOption] = useState(null);

const hobbiesSer = JSON.stringify(selectOption);
localStorage.setItem('hobbies',hobbiesSer);

const onChangeAdditionalHobbie =(e) => {
  const sport = e.target.value;
  localStorage.setItem('additionalHobbie', sport);
}

  return (


    <div>
      <h2>Selecciona tu deporte favorito </h2>
      <h4>dime acerca de tus hobbies</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="7">
            <h5>Selecciona tus Hobbies</h5>
            <Select
            defaultValue={selectOption}
            onChange={setSelectOption}
            options={options}
            isSearchable
            isMulti />

          </Col>
          <Col lg="7" className="mt-4">
            <h5>Quieres añadir otro Hobbie</h5>
            <Form.Control type="text" placeholder="Karate" onChange={(e)=> onChangeAdditionalHobbie(e)}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
