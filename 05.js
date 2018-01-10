 var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
  	//...for every submitted user the following must be true:
        return submittedUsers.every(function(submitted) {
       	///check each id against the goodUsers table...
       		return goodUsers.some(function(good) {
       			//and if ANY id shows true, return true
       			return good.id == submitted.id;
       		}); //any false run of the .some function spoils the lot.
       });

	};
}


    module.exports = checkUsersValid

/* their answer

    module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }