import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavMenu = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Acceuil</Nav.Link>
                        <Nav.Link href="">Articles</Nav.Link>
                        <Nav.Link href="">À propos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu;
