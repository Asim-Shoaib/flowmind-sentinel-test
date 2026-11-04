const todos = [];
let nextId = 1;

exports.list = () => todos;
exports.add = (title) => {
  const todo = { id: nextId++, title, done: false };
  todos.push(todo);
  return todo;
};
