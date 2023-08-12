import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavMenu = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-success">Accueil</Nav.Link>
                        <Nav.Link href="/pageFilms" className="text-success">Films</Nav.Link>
                        <Nav.Link href="/pageActeurs" className="text-success">Acteurs</Nav.Link>
                        <Nav.Link href="/pageRealisateurs" className="text-success">Réalisateurs</Nav.Link>
                        {/* <Nav.Link href="" className="float-end">À propos</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu;
