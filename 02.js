 function repeat(operation, num) {
 	if (num <= 0) return //if num is 0, stop recurring.
 	operation(); //do the thing.
 	return (repeat(operation, --num)) //... and run the function again, n-1.

/*the oo solution --
      for(i=0; i<num; i++) {
      	operation;
      }
    }
*/
    
    // Do not remove the line below
    module.exports = repeat

/*in other words...

repeat(operation, 5) =>
do operation
return (repeat(operation, 4)
do operation
return (repeat(operation, 3))
do op
return(repeat(operation, 2))
do op
return(repeat(operation, 1))
do op
return(repeat(operation, 0))
return blank.
