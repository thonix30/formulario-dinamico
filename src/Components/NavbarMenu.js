import { Container, Navbar } from "react-bootstrap";

export default function NavbarMenu() {
  return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#!" >
                        Formulario <b>Dinamico</b>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Registrado como:{" "}
                            <a href="https://github.com/thonix30" 
                            target="_blank" 
                            rel="noreferrer">
                                Anthony Martínez</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
  );
}
