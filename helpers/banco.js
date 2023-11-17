const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.ddw247h.mongodb.net/`, 
).then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
.catch(error => console.error('Erro na conexão com o MongoDB:', error));

module.exports = mongoose;