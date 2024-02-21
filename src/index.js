const express = require("express");

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use("/api", router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});