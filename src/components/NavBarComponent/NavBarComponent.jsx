import {Button, Container,Form, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import CardWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from "react-router-dom";


export const NavBarComponent = () => {
  return (
      <Navbar style={{
      backgroundColor: "#FF5733",
      color:"#fff",
    }}>
        <Container fluid >
          <Navbar.Brand>
            <Link to={"/"}>
            Ecommerce
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="#link">Productos</Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to={"/category/laptops"}>Laptops</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to={"/category/smartphones"}>Smartphones</Link>
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
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

