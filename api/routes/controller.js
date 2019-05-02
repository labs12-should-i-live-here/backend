const db = require('../data/dbConfig');

module.exports = {
add,
find,
findBy,
findById,
updatePin,
getPinById
};

function find() {
return db('pins').select('id', 
                    "userId",
                    "LONGITUDE",
                    "LATITUDE", 
                    "notes", 
                    "home",
                    "created_at"  );
}

async function findBy(pin) {
    const pin = await db('pins').where('id', '=', id);
    return pin
}

async function add(pin) {
    const id = await db('pins').returning('id').insert(pin);

    return findById(id);
}

function findById(id) {
return db('pin')
    .where('id', '=', id)
    .first();
}

async function updatePin(id, changes) {
    const update = await db("pins")
        .where({ id })
        .update(changes);

    const putPin = await getPinById(update);

    return putPin;
}

async function getPinById(id) {
    const c = await db("pins")
    .where('id', '=', id)
    .first();

    return c;
}
