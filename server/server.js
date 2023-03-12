const express = require("express");
const app = express();
const memberRoutes = require("./routes");

// Cors
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/v1/routes", memberRoutes);

// app.use(express.static(path.join(__dirname, "/build")));

// app.get("/", (res, req) => {
//     req.sendFile(path.join(__dirname, "/build/index.html"));
// });

// app.get("*", (res, req) => {
//     req.sendFile(path.join(__dirname, "/build/index.html"));
// });

app.listen(8080, () => {
    console.log("Server Started on 8080 Port");
});
