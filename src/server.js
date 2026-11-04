const express = require("express");
const { router } = require("./routes");

const app = express();
app.use(express.json());
app.use("/todos", router);
app.listen(3000, () => console.log("listening on 3000"));
