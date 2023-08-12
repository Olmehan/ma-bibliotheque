import express from 'express';
const sql = require("mssql");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const mssqlConfig = {
    // user: 'Oleksii',
    user: 'TestUser',
    // user: 'DESKTOP-QV0D28Q\\Oleksii',
    password: 'test978A',
    server: 'localhost',
    options: {
    //     Trusted_Connection: true,
    //     encrypt: false,
        trustServerCertificate: true,
    //     // Integrated Security=SSPI
    }
};

app.get('/hello', (requete, reponce) => reponce.send('Salut !'));

app.get('/films', async(requete, reponce) => {
    console.log('connexion...');

    sql.connect(mssqlConfig, (erreur) => {
        if(erreur){
            console.log('...erreur de connexion...');
            console.log(erreur);
        } else {
            console.log("sql query ... demande de donnees ...");
            const result = sql.query(`select * from [Bibliotheque_films].[dbo].[Films]`, (err, donnees) => {
                if(err) console.log(err);

                //reponce
                var tabl = new Array();
                for(let i = 0; i < donnees.recordset.length; i++){
                    var film = donnees.recordset[i].NomFilm;
                    var duree = donnees.recordset[i].Duree;
                    var datePremiere = donnees.recordset[i].DatePremiere;
                    let dateCreation = donnees.recordset[i].DateCreation;
                    let realisateur = donnees.recordset[i].Realisateur;
                    let pays = donnees.recordset[i].Pays;
                    let index = donnees.recordset[i].IdFilm;
                    tabl.push({'Film':film, 
                                'Duree':duree, 
                                'DatePremiere':datePremiere,
                                'dateCreation':dateCreation,
                                'realisateur':realisateur,
                                'pays':pays,
                                'idFilm':index});
                }
                console.log('--Donnees--');
                console.log(tabl);
                reponce.send(tabl);
            });
        }
    })
})

app.get('/acteurs', async(requete, reponce) => {
    console.log("eesaye de connect...");

    sql.connect(mssqlConfig, (erreur) => {
        if(erreur){
            console.log("... erreur de connexion ...");
            console.log(erreur);
        } else {
            console.log("sql query ... demande de donnees ...");
            const result = sql.query(`select * from [Bibliotheque_films].[dbo].[Acteurs]`, (err, donnees) => {
                if(err) console.log(err);

                //reponce
                var tabl = new Array();
                for(let i = 0; i < donnees.recordset.length; i++){
                    var nom = donnees.recordset[i].NomActeur;
                    var prenom = donnees.recordset[i].PrenomActeur;
                    var index = donnees.recordset[i].IdActeur;
                    var dateNaissance = donnees.recordset[i].DateNaissance;
                    var dateCreation = donnees.recordset[i].DateCreation;
                    tabl.push({'nomActeur':nom,
                                'prenomActeur':prenom,
                                'idActeur':index,
                                'dateNaissance':dateNaissance,
                                'dateCreation':dateCreation});
                }
                console.log('--Donnees--');
                console.log(tabl);
                reponce.send(tabl);
            });
        }
    })
});

app.listen(8000, () => console.log('Écoute le port 8000'));
