const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
