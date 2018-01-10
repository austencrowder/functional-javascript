//map and filter
var test = [
	{message: "lorem ipsum dolset"},
	{message: "lorem ipsum dolsetlorem ipsum dolsetlorem ipsum dolsetlorem ipsum dolset ipsum dolsetlorem ipsum dolsetlorem ipsum dols"},
	{message: "cat"}
]

var answer = ["lorem ipsum dolset", "cat"]

//my solution.
function getShortMessages(messages) {
   // SOLUTION GOES HERE
   var map = messages.map(x => x.message);
   var result = map.filter(m => m.length < 50);
   return result;
}

    module.exports = getShortMessages

//official solution
  function OfficialSolutiongetShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50 //starting with the filter instead of the map - I'm applying mapping this function to the mapped array, not the other way around
      }).map(function(item) {
        return item.message
      })
    }