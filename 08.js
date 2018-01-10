//ended up with something similar to the official solution anwyay.
function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(obj) {
		//ok, neat thing #1 here - slicing arguments into an aarray!
		//once i hav ean array, we're back to the good ol' "filter according to function"
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length //and then getting length.
}

module.exports = duckCount


/* sample:

{ '0': { quack: true },
  '1': {},
  '2': { quack: undefined },
  '3': { quack: undefined },
  '4': {},
  '5': {},
  '6': {},
  '7': { quack: true, hasOwnProperty: [Function: hasOwnProperty] },
  '8': { quack: undefined },
  '9': {},
  '10': { quack: undefined } }

 */