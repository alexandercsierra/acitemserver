module.exports = {
    add,
    getAll,
    update,
    remove
}

const db = require('../data/db-config');

function add(item){
    return db('items').insert(item).returning('*');
}

function getAll(){
    return db('items');
}

function update (id, item){
    return db('items').where({id}).update(item).returning('*');
}

function remove (id){
    return db('items').where({id}).del().returning('*');
}