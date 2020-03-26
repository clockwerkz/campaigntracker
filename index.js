const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');

require('./models/User');
require('./services/passport');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.log("Error connecting to MongoDB:", err));



app.use('/', authRoutes);

app.listen(PORT, ()=> {
    console.log(`App listening on PORT ${PORT}`);
});