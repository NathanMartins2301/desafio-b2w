'use strict';
const mongoose = require('mongoose');
const Planeta = require('../config/db');

module.exports = new class PlanetaRepository {
    getAll(){
        return Planeta.find();
    }

    getById(id){
        return Planeta.findById(id);
    }

    getByNome(nomeReq){
        return Planeta.findOne({nome : nomeReq});
    }
    create(planeta){        
        
        return Planeta.create(planeta);        
    }

    delete(id){
        return Planeta.findByIdAndRemove(id);
    }
}
