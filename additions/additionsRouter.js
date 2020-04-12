const router = require('express').Router();
const Adds = require('./additionsModel');


router.get('/', (req, res)=>{
    Adds.getAll()
        .then(adds=>res.status(200).json(adds))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

router.post('/', (req, res)=>{
    Adds.add(req.body)
        .then(add=>res.status(200).json(add))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

router.put('/:id', (req, res)=>{
    Adds.update(req.params.id, req.body)
        .then(add=>res.status(200).json(add))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

router.delete('/:id', (req, res)=>{
    Adds.remove(req.params.id)
        .then(add=>res.status(200).json(add))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

module.exports=router;