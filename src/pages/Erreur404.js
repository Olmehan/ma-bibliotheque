import React from "react";
import { Alert } from "react-bootstrap";

export function Erreur404() {
    return (
        <>
            <Alert variant="danger">
                <h1>Erreur 404</h1>
            </Alert>
            <p>Il nous semble que nous ne pouvons pas trouver ce que vous cherchez.</p>
        </>
    );
}