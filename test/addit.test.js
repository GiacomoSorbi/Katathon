var add = require('../addit.js');

describe('should add', function() {
	it('should add numbers', function() {
		
		expect(add(3, 2)).toBe(5);
	});
});