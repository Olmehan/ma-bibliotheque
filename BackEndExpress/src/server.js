import express from 'express';
const sql = require("mssql");

const app = express();
app.use(express.json());
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

app.get('/', async(requete, reponce) => {
    console.log('connexion...');

    sql.connect(mssqlConfig, (erreur) => {
        if(erreur){
            console.log('...erreur de connexion...');
            console.log(erreur);
        } else {
            console.log("sql query ... demande de donnees ...");
            const result = sql.query(`select NomFilm as Films, Duree, DatePremiere from [Bibliotheque_films].[dbo].[Films]`, (err, donnees) => {
                if(err) console.log(err);

                //reponce
                var tabl = new Array();
                for(let i = 0; i < donnees.recordset.length; i++){
                    var film = donnees.recordset[i].Films;
                    var duree = donnees.recordset[i].Duree;
                    var datePremiere = donnees.recordset[i].DatePremiere;
                    tabl.push({'Film':film, 'Duree':duree, 'Date premiere':datePremiere});
                }
                console.log('--Donnees--');
                console.log(tabl);
                reponce.send(tabl);
            });
        }
    })
})

app.get('/films', async(requete, reponce) => {
    console.log("eesaye de connect...");

    sql.connect(mssqlConfig, (erreur) => {
        if(erreur){
            console.log("... erreur de connexion ...");
            console.log(erreur);
        } else {
            console.log("sql query ... demande de donnees ...");
            const result = sql.query(`select NomFilm as Films from [Bibliotheque_films].[dbo].[Films]`, (err, donnees) => {
                if(err) console.log(err);

                //reponce
                var tabl = new Array();
                for(let i = 0; i < donnees.recordset.length; i++){
                    var film = donnees.recordset[i].Films;
                    tabl.push({'Film':film});
                }
                console.log('--Donnees--');
                console.log(tabl);
                reponce.send(tabl);
            });
        }
    })
});

app.listen(8000, () => console.log('Écoute le port 8000'));
