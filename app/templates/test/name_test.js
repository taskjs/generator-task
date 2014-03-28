'use strict';

var assert = require('assert');
var <%= shortSafeSlugname %> = require('../lib/<%= shortSlugname %>');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new <%= shortSafeSlugname %>).run(
    [], // inputs
    {}, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler)
