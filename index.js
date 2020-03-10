const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

require('./models/User');
require('./services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.log("Error connecting to MongoDB:", err));



app.use('/auth', authRoutes);

app.listen(PORT, ()=> {
    console.log(`App listening on PORT ${PORT}`);
});