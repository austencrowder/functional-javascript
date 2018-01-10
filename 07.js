//in case the functional-javascript folks see this...
//...I didn't get what made this different from the last assignment.

function reduce(arr, fn, initial) {
 return arr.reduce(function (stat, currentWord) {
 	  if (stat[currentWord]) {
 	  	stat[currentWord]++;
 	  } else {
 	  	stat[currentWord] = 1;
 	  }
 		return stat;
 	}, {});
}

module.exports = reduce