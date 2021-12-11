const express=require('express');
const app=express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());


const cors = require('cors');
const { get } = require('./routes/articulosController');
app.use(cors());


app.set("port",3001);


app.use(require('./routes/articulosController'));
app.use(require('./routes/categoriasController'));
app.use(require('./routes/subcategoriasController'));
app.use(require('./routes/ivaController'));
app.use(require('./routes/marcasController'));
app.use(require('./routes/marcasController'));
app.use(require('./routes/OfertasController'));


app.get("/",function(req, res) {
    res.send('hello world');
    console.log("Entro")
  });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});



app.listen(app.get("port"),()=>{
    console.log("Server express on port "+app.get("port"));
});

