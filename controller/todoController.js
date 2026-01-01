let todos = [];


exports.getAllTodos = (req, res) => {
  res.json(todos);
};


exports.createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};


exports.getTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};


exports.updateTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo) {
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};


exports.deleteTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};