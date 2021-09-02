const cors = require('cors');
const express = require('express');

const PORT = 8090;
const HOST = '0.0.0.0';

const app = express();
app.use(cors())
app.use(express.json())
app.post('/', (req, res) => {
    res.send('Hello, it works!')
});

app.listen(PORT, HOST);
console.log(`Th server is unning on http://${HOST}:${PORT}`);