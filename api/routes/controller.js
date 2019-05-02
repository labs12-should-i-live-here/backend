const db = require('../data/dbConfig');

module.exports = {
add,
find,
findBy,
findById
};

function find() {
return db('pins').select('id', 'email', 'username', 'password');
}

async function findBy(pin) {
    const [pin] = await db('pins').where('pin_id', '=', pin_id);
    return pin
}

async function add(pin) {
    const [id] = await db('pins').returning('id').insert(pin);

    return findById(id);
}

function findById(id) {
return db('pin')
    .where('id', '=', id)
    .first();
}