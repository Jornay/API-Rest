const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.send('Testado com sucesso');
})

app.listen(3000);