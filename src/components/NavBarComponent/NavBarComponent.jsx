import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tecnologia</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Zapatillas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >Ayuda</Nav.Link>
            
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <CardWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;