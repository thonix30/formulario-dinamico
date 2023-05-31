import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";


export default function Resume({showModal, setStep, setModal}) {
  
    const favoritFruit = localStorage.getItem('fruitName');
    const fruitIcon = localStorage.getItem('iconFruit');
    const hobbiesStorage = JSON.parse(localStorage.getItem('hobbies'));
    const  addittionalHobbie= localStorage.getItem('additionalHobbie');
    const comment = localStorage.getItem('comment');
  
    const clearForm = () => {
        localStorage.clear();
        setModal(false);
        setStep(1);
    }


    return (
    <Modal 
    show={showModal} 
    size="lg" 
    aria-labelledby="container-modal-title-vcenter" 
    centered 
    onHide={clearForm}>
    
    

    <Modal.Header closeButton>
        <Modal.Title>FELICIDADES!! 💪🙌</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h4>ve aca tu resumen</h4>
        <CardGroup className="mt-4">
            {favoritFruit && fruitIcon && (
                <CardResume 
                title={fruitIcon} 
                subtitle='Tu fruta favorita es:' 
                text={favoritFruit}
                />
            )}
            {hobbiesStorage && (
                <CardResumeHobbies subtitle="Tus hobbies" text={addittionalHobbie} hobbiesStorage={hobbiesStorage} />
            )}
            {comment &&(
                <CardResume subtitle="Este es el comentario final" text={comment} />
            )}
        </CardGroup>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={clearForm} variant="outline-dark">
            Salida y borrar formulario
        </Button>
    </Modal.Footer>

    </Modal>
  )
}
