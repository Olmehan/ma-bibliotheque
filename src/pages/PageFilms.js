import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FormatDate } from "../components/FormatDate";
import { useNavigate } from "react-router-dom";

export const PageFilms = () => {
    const[listFilms, setListFilms] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getTousLesFilms();
    }, []);

    async function getTousLesFilms(){
        const result = await fetch('http://localhost:3000/films');
        // console.log(result);
        const films = await result.json();
        console.log('Films: ');
        console.log(films);

        setListFilms(films);
    }

    return (
        <Container>
            <Row>
                <Col xs={9}>
                    <h1>Bienvenue dans la page des films</h1>
                </Col>
                <Col xs={3}>
                    <Button variant="primary" onClick={() => navigate('/PageAjouterUnFilmManuel')} style={{ marginTop: "0.5em" }} className="float-end">Ajouter un film</Button>
                </Col>
            </Row>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Film</th>
                        <th>Durée</th>
                        <th>Réalisateur</th>
                        <th>Date de sortie</th>
                        <th>Pays</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(listFilms) ? listFilms.map((f, index) => (
                        <tr key={f.idFilm} onClick={() => navigate(`/pageUnFilm/${f.idFilm}`)} style={{cursor: "pointer"}}>
                            <td>{index + 1}</td>
                            <td>{f.Film}</td>
                            <td>{f.Duree}</td>
                            <td>{f.realisateur}</td>
                            <td><FormatDate donneesDateTime={f.DatePremiere} /></td>
                            <td>{f.pays}</td>
                        </tr>
                    )):[]}
                </tbody>
            </Table>
        </Container>
    );
}
