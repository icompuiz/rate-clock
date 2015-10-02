'use strict';
var _ = require('lodash');

var RateClock = require('./');

var rateClock = new RateClock();

var printRate = _.throttle(_printRate, 100);


setInterval(function() {

	rateClock.tick();

	printRate();

}, 100);

function _printRate() {

	console.log('%d r/s', rateClock.getRate());

}