require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

const apiRoutes = require("./routes/api.routes");

const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");
app.use(express.json()); // Habilito recepción de JSON en servidor

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// http://localhost:3000/
app.get("/", (req, res) => {
    res.status(200).send("Home. Welcome to backend!");
  });

app.use('/api/', apiRoutes);

app.use("*", error404); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});