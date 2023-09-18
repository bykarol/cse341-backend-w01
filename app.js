require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const cors = require('cors');
const professionalRoutes = require("./routes/index");

app.use(express.json());

app.use(cors({
  origin: '*',
}));
/* instead of using cors we could use the following middleware:
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
*/

app.use("/professional", professionalRoutes); // localhost:PORT/professional

app.listen(PORT, () => console.log(`Web Server is listening at port: ${PORT}`));