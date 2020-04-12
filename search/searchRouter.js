const router = require('express').Router();
const Items = require('./searchModel');


router.get('/', (req, res)=>{
    Items.getAll()
        .then(users=>res.status(200).json(users))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

router.post('/', (req, res)=>{
    Items.add(req.body)
        .then(item=>res.status(200).json(item))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

router.put('/:id', (req, res)=>{
    Items.update(req.params.id, req.body)
        .then(item=>res.status(200).json(item))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

router.delete('/:id', (req, res)=>{
    Items.remove(req.params.id)
        .then(item=>res.status(200).json(item))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

module.exports=router;