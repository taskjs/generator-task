'use strict';

var assert = require('assert');
var <%= shortSafeSlugnameClass %> = require('../lib/<%= shortSlugname %>');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new <%= shortSafeSlugnameClass %>).run(
    [], // inputs
    {}, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler)
