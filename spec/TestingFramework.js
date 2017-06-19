var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('THIS TEST HAS PASSED YOU AWESOME PERSON')
    }

  }
};

var describe = function(testname) {
  console.log(testname)
}
