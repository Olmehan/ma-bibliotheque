import React from "react";
import { Container, Table } from "react-bootstrap";

export const PageFilms = () => {
    return (
        <Container>
            <h1>Bienvenue dans la page des films</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Film</th>
                        <th>Durée</th>
                        <th>Réalisateur</th>
                        <th>Date de premiere</th>
                    </tr>
                </thead>
            </Table>
        </Container>
    );
}
