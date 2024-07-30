const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use(cors());
const PORT =  5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
