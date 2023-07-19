import express from 'express';

const app = express();

app.get('/hello', (requete, reponce) => reponce.send('Salut !'));

app.listen(8000, () => console.log('Écoute le port 8000'));