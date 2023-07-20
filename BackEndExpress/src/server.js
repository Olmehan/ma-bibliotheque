import express from 'express';
import sql from 'mssql';

const app = express();
const mssqlConfig = {
    user: 'DESKTOP-QV0D28Q\Oleksii',
    password: '',
    server: 'localhost',
    database: 'Bibliotheque_films'
};

app.get('/hello', (requete, reponce) => reponce.send('Salut !'));

app.get('/base', (requete, reponce) => {
    sql.connect(mssqlConfig, (erreur) => {
        if(erreur) console.log(erreur);

        //creation Request object
        var request = new sql.Request();

        //query à bd et obtenir des données
        request.query('select * from Films', (err, donnees) => {
            if(err) console.log(err);
        })

        //reponce
        reponce.send(donnees);
    });
});

app.listen(8000, () => console.log('Écoute le port 8000'));
