const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send({msg: 'Greetings'});
});


app.listen(5000, ()=> {
    console.log('App listening on PORT 5000');
});