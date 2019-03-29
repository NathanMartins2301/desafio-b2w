const planetaRepository = require('../repositories/planetaRepository');

exports.get = (req, res, next) =>{
    planetaRepository.getAll()
        .then((planeta)=>{
            res.status(200).send(planeta);
        }).catch( err => res.status(500).send(err))
};

exports.getById = (req, res, next) =>{
    planetaRepository.getById(req.params.id)
        .then((planeta)=>{
            res.status(200).send(planeta);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) =>{
    const p = req.body;

    planetaRepository.create(p)
        .then((planeta)=>{
            res.status(200).send(planeta);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) =>{
    planetaRepository.delete(req.params.id)
        .then((planeta)=>{
            res.status(200).send('delete succeeded!');
        }).catch(err=>console.error.bind(console, `Error ${err}`))
};