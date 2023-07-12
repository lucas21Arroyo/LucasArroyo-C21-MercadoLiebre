const express = require('express');
const app = express();
const path = require('path');
const PORT = 3010

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')));

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));