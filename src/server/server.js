const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const port = 7832;

const response = {
  "registrationNumber": "AA11111",
  "vin": "LOLOLOLOLOLOLOLOL",
  "car": {
    "brand": "BLAH",
    "model": "BLEH",
    "modelText": "LOL",
    "modelYear": 2000,
    "vehicleGroup": "Kanin",
    "usedImport": false,
  },
  "customer": {
    "firstname": "FIRSTNAME",
    "lastname": "LASTNAME",
    "address": "LOL STREET 21",
    "postalCode": "IDK",
    "city": "",
    "hasInternationalAddress": false,
    "internationalAddress": null,
    "internationalPostAddress": null,
    "country": null,
    "phoneNumberPrivate": "55555555",
    "phoneNumberMobile": "55555555",
    "email": null
  }
};

app.get('/the-resource', (req, res) => res.send(response));

app.put('/the-resource', (req, res) => res.send({message: 'okay!'}));

app.listen(port, () => console.log('Listening on port', port));
