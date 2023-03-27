const http = require("http");
const getCharById = require("./crontollers/getCharById");
const getCharDetail = require("./crontollers/getCharDetail");

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("onsearch")){
        const id = req.url.split("/").at(-1);
        getCharById(res, id);
    }
    if(req.url.includes("detail")){
        const id = req.url.split("/").at(-1);
        getCharDetail(res, id);
    }
}).listen(3001, "localhost")