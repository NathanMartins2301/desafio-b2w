const planetaRepository = require('../repositories/planetaRepository');
const api = require('../service/service');

exports.get = (req, res, next) =>{        
    planetaRepository.getAll()
        .then((planeta)=>{
            res.status(200).send(planeta);
            api.then((resposta)=>{
                console.log(resposta.data.name);
            })
        }).catch( err => res.status(500).send(err))
};

exports.getById = (req, res, next) =>{
    planetaRepository.getById(req.params.id)
        .then((planeta)=>{
            res.status(200).send(planeta);
        }).catch(err => res.status(500).send(err))
};

exports.getByNome = (req, res, next) =>{
    planetaRepository.getByNome(req.params.nome)
        .then((planeta)=>{
            res.status(200).send(planeta);
        }).catch(err => res.status(500).send(err))
}

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

exports.getApi = (req, res, next) =>{
    axios.get('https://swapi.co/api/planets/2').then((res)=>{
        let resultado = res.data;
        console.log(resultado.films.length)    
    });
};



