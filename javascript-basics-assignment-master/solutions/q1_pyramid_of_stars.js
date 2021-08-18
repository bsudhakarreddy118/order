/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
  // Write your code here
  if (!typeof n) return '';
  let star = 1;
  let space = n;
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= space; j++) {
      str += ' ';
    }
    for (let k = 1; k <= star; k++) {
      str += '* ';
    }
    str += ' \n';
    star++;
    space--;
  }
  return str;
};


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

