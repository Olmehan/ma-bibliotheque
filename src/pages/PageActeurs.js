import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FormatDate } from "../components/FormatDate";

export const PageActeurs = () => {
    const[listActeurs, setListActeurs] = useState([]);

    useEffect(() => {
        getTousActeurs();
    }, []);

    async function getTousActeurs(){
        const result = await fetch('http://localhost:3000/acteurs');
        const acteurs = await result.json();
        console.log('Acteurs: ');
        console.log(acteurs);

        setListActeurs(acteurs);
    }

    return (
        <Container>
            <h1>Bienvenue dans la page des acteurs</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date naissance</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(listActeurs) ? listActeurs.map((a, index) => (
                        <tr key={a.idActeur}>
                            <td>{index + 1}</td>
                            <td>{a.nomActeur}</td>
                            <td>{a.prenomActeur}</td>
                            <td><FormatDate donneesDateTime={a.dateNaissance} /></td>
                        </tr>
                    )) : []}
                </tbody>
            </Table>
        </Container>
    )
}
