const request = require('supertest');
const server = require('../server.js');


//beforeAll(() => db.users.clear());

describe('In routes/register.js', () => {
    describe('IN GET/REGISTER', () => {

        it ('should respond with 200 OK', async () => {
            const response = await request(server).get('/register');

            expect(response.status).toBe(200);
        });

        it('should return JSON', async () => {
            const response = await request(server).get('/register');

            expect(response.type).toBe('application/json');
        });
    });

    describe('IN POST/REGISER', () => {

        it ('should respond with 400 if no data passed', async () => {
            const response = await request(server).post('/register');

            expect(response.status).toBe(400);
        });

       

        it ('should respond with 400 if username or password missing', async () => {
           
            const response = await request(server).post('/register').send( {
                username: 'doohniborrr', // required
                login: 'Arcade', // required
                
            });

            expect(response.status).toBe(400);
        });

        it ('should respond with 401 if username not unique', async () => {
           
            const response = await request(server).post('/register').send( {
                username: 'Pacmanfromhell', // required
                password: 'Arcade', // required
            });

            const response2 = await request(server).post('/register').send( {
                username: 'Pacmanfromhell', // required
                password: 'hellboy', // required
            });

            expect(response2.status).toBe(401);
        });

        it ('should respond with 201 if correct data passed', async () => {
           
            const response = await request(server).post('/register').send( {
                username: 'rrrobinhood', // required
                password: 'Arcade', // required
                
            });

            expect(response.status).toBe(201);
        });

        
        // it('should return an array', async () => {
        //     const response = await request(server).post('/games');

        //     expect.arrayContaining([]);
        // });

 

    });


});