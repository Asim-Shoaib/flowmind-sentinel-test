const todos = [];
let nextId = 1;

exports.list = () => todos;
exports.add = (title) => {
  const todo = { id: nextId++, title, done: false };
  todos.push(todo);
  return todo;
};
exports.toggle = (id) => {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.done = !todo.done;
  return todo;
};
