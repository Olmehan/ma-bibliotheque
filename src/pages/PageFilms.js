import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export const PageFilms = () => {
    const[listFilms, setListFilms] = useState([]);

    useEffect(() => {
        getTousLesFilms();
    }, []);

    async function getTousLesFilms(){
        const result = await fetch('http://localhost:8000/films');
        console.log(result);
        const films = await result.json();
        console.log('Films: ');
        console.log(films);

        setListFilms(films);
    }

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
