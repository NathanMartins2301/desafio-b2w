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

    create(planeta){        
        return Planeta.create(planeta);        
    }

    delete(id){
        return Planeta.findByIdAndRemove(id);
    }
}
