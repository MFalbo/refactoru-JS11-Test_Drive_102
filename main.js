// -------------------------------Part 1---------------------------------

// /** Given a day number from 0 to 6, return the full day of the week for that number. */
// var getDayName = function(dayNumber) {
//  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//  return dayNames[dayNumber];
// };


// --------------------------------Part 2----------------------------------

// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';

 if(arr.length === 0){
	  	output = "No items to join";
	  }

var strConstructor = function(value){

	if(i === arr.length-1){
	  	output += value;
	  }
	  else{
	  	output += value + delimeter;
	  }
};

// arr.map(strConstructor);
 for(var i=0; i<arr.length; i++) {
	  // output += arr.length -1 ? arr[i] : arr[i] + delimeter;
	  // output += arr[i] + delimeter;
	  strConstructor(arr[i]);
 }
 return output;
};

var arrTest = [[1,2],[3,4],[5,6]];
console.log(arrTest[0] + 'array index 0');