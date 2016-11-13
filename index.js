'use strict';

const repeating = require('repeating');

module.exports = (str, spaces) => {
	spaces = spaces || 2;

	return str.replace(/^\t+/gm, $1 => repeating($1.match(/\t/g).length * spaces));
};
