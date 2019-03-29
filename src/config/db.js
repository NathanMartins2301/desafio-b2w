const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/planetas');

const Schema = mongoose.Schema;

const planetaSchema = new Schema ({
    nome: String,
    clima: String,
    terreno: String
},
{
    versionKey: false
});

const Planeta = mongoose.model('Planeta', planetaSchema);
module.exports = Planeta;