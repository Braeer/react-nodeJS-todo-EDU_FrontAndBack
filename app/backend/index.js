const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3010;
const app = express();

app.use(cors());

const todoItems = require('./todo-items.json');
app.get('/api/todo-items', (req, res) => {
  res.json({ data: todoItems });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
