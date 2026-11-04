const express = require("express");
const store = require("./store");

const router = express.Router();
router.get("/", (req, res) => res.json(store.list()));
router.post("/", (req, res) => res.status(201).json(store.add(req.body.title)));
router.patch("/:id/toggle", (req, res) => {
  const todo = store.toggle(Number(req.params.id));
  return todo ? res.json(todo) : res.sendStatus(404);
});
router.delete("/:id", (req, res) => {
  store.remove(req.params.id);
  res.sendStatus(204);
});
module.exports = { router };
