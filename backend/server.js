// made with node express server - npm install express
import express from "express";
// its very important to append our extension - ".js" to our server side
import data from "./data.js";

const app = express();

// when frontend get to this route we are returning an array of products
app.get("/api/products", (req, res) => {
	res.send(data.products);
});

// define the first route
app.get("/", (req, res) => {
	res.send("Server is ready");
});

const port = process.env.PORT || 5000;

// make server running we need to call "listen" on app and define a port
app.listen(port, () => {
	console.log(`Server at http://localhost:${port}`);
});
