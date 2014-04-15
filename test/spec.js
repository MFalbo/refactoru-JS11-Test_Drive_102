// --------------------------------Part 1----------------------------------

// describe('getDayName', function() {
//  it('should return Sunday for 0', function() {
//   expect(getDayName(0)).toBe('Sunday');
//  });
//  it('should return Monday for 1', function() {
//   expect(getDayName(1)).toBe('Monday');
//  });
//  it('should return Tuesday for 2', function() {
//   expect(getDayName(2)).toBe('Tuesday');
//  });
//  it('should return Wednesday for 3', function() {
//   expect(getDayName(3)).toBe('Wednesday');
//  });
//  it('should return Thursday for 4', function() {
//   expect(getDayName(4)).toBe('Thursday');
//  });
//  it('should return Friday for 5', function() {
//   expect(getDayName(5)).toBe('Friday');
//  });
//  it('should return Saturday for 6', function() {
//   expect(getDayName(6)).toBe('Saturday');
//  });
// })


// ----------------------------------Part 2-----------------------------------

describe('join', function(){

	it('should combine multiple array items with the delimeter between them, but not on the last item.', function(){

		expect(join(["item1", "item2"], ", ")).toBe("item1, item2");
	});

	it('should return an empty string for an empty array', function(){

		expect(join([], ", ")).toBe("");
	});


})