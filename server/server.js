const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const api = require('./routes/api');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api',api);

app.get('/',function(req,res){
    res.send('hello from the server');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
