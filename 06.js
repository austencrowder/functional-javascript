function countWords(inputWords) {
  return inputWords.reduce(function (stat, currentWord) {
  	//^^oh man, i'm dumb. spent ten minutes debugging only to discover
  	//my function didn't return a _single thing._
 	  if (stat[currentWord]) {
 	  	stat[currentWord]++;
 	  } else {
 	  	stat[currentWord] = 1;
 	  }
 		return stat;
 	}, {}); //the empty object here defines 'stat', above.
}

    module.exports = countWords