exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique().index();
        tbl.integer('price').notNullable().index();
        tbl.string('category', 128).notNullable().index();
        tbl.string('startMonth');
        tbl.string('endMonth');
        tbl.integer('startTime')
        tbl.integer('endTime')
        tbl.string('conditions', 256);
        
    })
    
    .createTable('additions', tbl=>{
        tbl.increments();
        tbl.string('name', 128).notNullable().index();
        tbl.integer('price').notNullable().index();
        tbl.string('category', 128).notNullable().index();
        tbl.string('startMonth');
        tbl.string('endMonth');
        tbl.integer('startTime')
        tbl.integer('endTime')
        tbl.string('conditions', 256);
        
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('additions')
        .dropTableIfExists('items')
};