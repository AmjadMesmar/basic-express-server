'use strict';

const server = require('../src/server');
const superTest = require('supertest');
const serverRequest = superTest(server.server);

describe('Server Module', ()=> {
    it('404 on a wronge route', async ()=> {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });
    it('404 on a wronge method', async ()=> {
        let response = await serverRequest.post('/person');
        expect(response.status).toEqual(404);
    });
    it('500 if the name is not in the query string', async ()=> {
        let response = await serverRequest.get('/person?name=');
        expect(response.status).toEqual(500);
    });
    it('200 if the name is in the query string', async ()=> {
        let response = await serverRequest.get('/person?name=personName');
        expect(response.status).toEqual(200);
    });
    it('response is correct', async ()=> {
        let response = await serverRequest.get('/person?name=personName');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
            name: "personName"
        });
    });
});