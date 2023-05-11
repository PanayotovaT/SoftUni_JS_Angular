const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Hello from Server');
});

app.post('/enroll', (req, res)=> {
    console.log(req);
    res.send('Data receved').status(200);
})

app.listen(PORT, ()=>{
    console.log('Server is running on localhost: ' + PORT);
})