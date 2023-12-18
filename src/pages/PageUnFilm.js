import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FormatDate } from "../components/FormatDate";

export const PageUnFilm = () => {
    const[unFilm, setUnFilm] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        obtenirUnFilm();
    }, []);

    async function obtenirUnFilm(){
        const result = await fetch(`http://localhost:3000/unFilm/${id}`);
        //console.log(result);
        const film = await result.json();
        console.log(film);

        setUnFilm(film);
    }

    return (
        <Container>
            <h3>Page de film <span style={{color: "blue"}}>{unFilm.NomFilm}</span></h3>
            {/* <p>{id}</p> */}
            <p>Date de premiere : <span style={{color: "blue"}}><FormatDate donneesDateTime={unFilm.DatePremiere} /></span></p>
            <p>Date de creation : <span style={{color: "blue"}}><FormatDate donneesDateTime={unFilm.DateCreation} /></span></p>
            <p>Date de derniere modification : <FormatDate donneesDateTime={unFilm.DateModification} /></p>
            <p>Durée de film : <span style={{color: "blue"}}>{unFilm.Duree}</span></p>
            <p>Realisateur : <span style={{color: "blue"}}>{unFilm.Realisateur}</span></p>
            <p>Pays : <span style={{color: "blue"}}>{unFilm.Pays}</span></p>
        </Container>
    )
}
