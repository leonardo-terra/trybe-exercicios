const express = require('express');
const app = express();
const bookController = require('./controller/book.controller')
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);
app.post('/books', bookController.create);
app.put('/books/:id', bookController.update);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));