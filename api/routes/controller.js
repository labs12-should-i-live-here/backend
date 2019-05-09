const db = require('../data/dbConfig');

module.exports = {
add,
find,
findBy,
findById,
updatePin,
getPinById,
addPin,
deletePin,
getPins,
findUserById
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
    const id = await db('pins')
    .returning('id')
    .insert(pin);

    return findById(id);
}

function findById(id) {
return db('pin')
    .where('id', '=', id)
    .first();
}

function findUserById(id) {
    return db('users')
    .select('id',
            'userid',
            'premium_member',
            'numberofsavedlocations')
    .where({ id })
    .first();
}

//add pin
async function addPin(data) {
    const newData = {
        ...data, 
        price: Number(data.price)
    };

    const id = await db("pins")
        .insert(newData)
        .returning('id');

    const newPin = await getPinById(id);
    return newPin;
}

//edit
async function updatePin(id, changes) {
    const update = await db("pins")
        .where({ id })
        .update(changes);

    const putPin = await getPinById(update);

    return putPin;
}
//git pin by id
async function getPinById(id) {
    const c = await db("pins")
    .where('id', '=', id)
    .first();

    return c;
}

//delete 
async function deletePin(id) {
    const deleted = await db("pins")
    .where({ id })
    .del();

    return deleted;
}

//get all
async function getPins(data) {
    const pins = await db("pins")
    return pins;
}