const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al Pokedex");
});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
}); 