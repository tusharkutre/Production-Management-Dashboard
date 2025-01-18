const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
// const db = require("./db");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
// const exampleRoutes = require("./routes/exampleRoutes");
// app.use("/api/examples", exampleRoutes);

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
