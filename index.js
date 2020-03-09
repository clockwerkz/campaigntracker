const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use('/auth', authRoutes);

app.listen(PORT, ()=> {
    console.log(`App listening on PORT ${PORT}`);
});