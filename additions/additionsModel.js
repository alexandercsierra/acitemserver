module.exports = {
    add,
    getAll,
    update,
    remove
}

const db = require('../data/db-config');

function add(add){
    return db('additions').insert(add).returning('*');
}

function getAll(){
    return db('additions');
}

function update (id, add){
    return db('additions').where({id}).update(add).returning('*');
}

function remove (id){
    return db('additions').where({id}).del().returning('*');
}