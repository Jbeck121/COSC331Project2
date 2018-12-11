import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/route";
import path from "path";
const app = express();
const PORT = 3000;

//mongoose connection
mongoose.connect("mongodb://localhost/project2"); //database connect

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //allows for use of routes created earlier
app.use("/src/views", express.static(path.join(__dirname, "/src/views"))); //serve static files from folder
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/src/views/index.html"))
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
