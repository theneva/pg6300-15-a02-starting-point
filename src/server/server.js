const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const port = 7832;

const albums = [
  {artist: 'Anberlin', title: 'Dark Is The Way, Light Is A Place', year: '2010'},
  {artist: 'Anberlin', title: 'Vital', year: '2012'},
  {artist: 'Bad Religion', title: 'Christmas Songs', year: '2013'},
  {artist: 'Band of Horses', title: 'Everything All The Time', year: '2006'},
  {artist: 'Bring Me The Horizon', title: 'Sempiternal', year: '2013'},
  {artist: 'Coldplay', title: 'A Rush Of Blood To The Head', year: '2002'},
  {artist: 'Coldplay', title: 'Mylo Xyloto', year: '2011'},
  {artist: 'Coldplay', title: 'Viva la Vida or Death and All His Friends', year: '2008'},
  {artist: 'Coldplay', title: 'X&Y', year: '2005'}
];

app.get('/albums', (req, res) => res.send(albums));

app.listen(port, () => console.log('Listening on port', port));
