'use strict';

const errorHandler = require('../error-handlers/500');

module.exports = ( req,res,next ) =>{
if( Number(req.query.name) || req.query.name === ''){
    console.log( 'This is not a string' );
    next(errorHandler);
  }else{
    console.log( 'This is a string' );
    next();
  }
};


// function stringCheck(word) {
//     return (req, res, next) => {
//         if (typeof word !== 'string') {
//             next(errorHandler);
//         } else {
//             req.query = word;
//             next();// this will go to the other middleware
//         }
//     };
// }

// module.exports = stringCheck;



// function square(n) {
//     return (req, res, next) => {
//         if (typeof n !== 'number') {
//             next('not a number >:(');// this will through an error
//         } else {
//             req.number = n * n;
//             next();// this will go to the other middleware
//         }
//     };
// }