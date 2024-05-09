require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");
app.use(express.json()); // Habilito recepción de JSON en servidor

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

const apiRoutes = require("./routes/api.routes");

app.use('/api/', apiRoutes);

app.use("*", error404); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});