// functions implemented using stack

const isPalindrom = (str) => {
  const stack = str.split("")
  let rStr = ""

  
  
  for (i = 0; i < str.length; i++) {
    rStr += stack.pop()
  }
  
  if (rStr === str) return true;

  return false
}

console.log(isPalindrom("bo3"))


var buildArray = function(target, n) {
  const newStack = []
  let i = 0
  
  while (i++ <= target.length && n) {
    if (i !== target[0]) {
      newStack.push("push", "pop")
      
    } else {
      newStack.push("push")
      target = target.slice(1)
    }
  }
  
  return newStack
};

var buildArray = function(target, n) {
	let res = []
	let i = 0

	while (i++ <= n && target.length) {
		if (i !== target[0]) res.push("Push", "Pop")
		else {
			res.push("Push")
			target = target.slice(1)
		}
	}
	return res
}


//console.log(buildArray([1,3], 3))

//3
/**
 * 
 * Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
   Output: 0 
 */

const countStudents = function(students, sandwiches) {
  
  while (students.length) {
    const topSand = sandwiches[0];

    if (!students.includes(topSand)) {
      return students.length;
    }

    if (firstStudent === sandwiches[0]){
      students.shift()
      sandwiches.shif()
    } else {
      students.push(students.shift())
    }
  }
};
