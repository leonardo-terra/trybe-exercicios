const express = require('express');
const app = express();
const bookController = require('./controller/book.controller')
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', bookController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));