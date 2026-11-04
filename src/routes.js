const express = require("express");
const store = require("./store");

const router = express.Router();
router.get("/", (req, res) => res.json(store.list()));
router.post("/", (req, res) => res.status(201).json(store.add(req.body.title)));
module.exports = { router };
