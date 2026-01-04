const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routers/todos');
const healthRouter = require('./routers/healthCheck')

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/todos', todosRouter);
app.use('/health', healthRouter);




app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
