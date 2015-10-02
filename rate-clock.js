'use strict';
var _ = require('lodash');

function RateClock() {
	
	var start, now, diff, accumulator, rate;
	rate = 0;
	reset();

	this.tick = tick;
	this.getRate = getRate;
	this.reset = _.throttle(reset, 100);

	function getRate() {
		return rate;
	}

	function tick() {
		accumulator++;
		now = Date.now();
		diff = (now - start) / 1000;
		rate = Math.ceil(accumulator / diff);	
		this.reset();	
	}

	function reset() {
		accumulator = 0;
		start = Date.now();
	}
}

module.exports = RateClock;