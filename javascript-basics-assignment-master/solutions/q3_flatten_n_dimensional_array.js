/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
	if (!Array.isArray(arr)) return null;
	arr = arr.flat(Infinity);
	return arr;
  };
  // flatten([1, [2, 3], [[4], [5]]]);
  /* For example,
  INPUT - flatten([1, [2, 3], [[4], [5]])
  OUTPUT - [ 1, 2, 3, 4, 5 ]
  */
  module.exports = flatten;

