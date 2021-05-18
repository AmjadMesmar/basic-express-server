'use strict';

const validator = require('../src/middlewares/Validator');

describe('Validator middleware', () => {
    const req = { method: 'get', path: 'test', query: {name: 'Amjad'} }
    const req2 = { method: 'get', path: 'test', query: {}};
    const res = {};
    const next = jest.fn();

    it('It should get name', () => {
        //arrange
        //act
        validator(req,res,next);
        //assert
        expect(next).toHaveBeenCalledWith();
    });

    it('It should give an error', () => {
        //arrange
        //act
        validator(req2,res,next);
        //assert
        expect(next).toHaveBeenCalledWith(new Error('Not a string!'));
    });
});