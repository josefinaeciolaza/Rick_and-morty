//const http = require("http");
const axios = require("axios");

const KEY = "d58fbb903a0e.f78899d1002d097eb4c9";
const URL = "https://be-a-rym.up.railway.app/api";


const getCharDetail = (res, id) => {
    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
        const {image, name, gender, status, origin, species} = response.data;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({image, name, gender, status, origin, species}));
    })
    .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain'});
        res.end(error.menssage); 
    })
};


module.exports = getCharDetail;