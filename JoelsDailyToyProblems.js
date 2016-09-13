// - memoise
// - fibonacci with memoise
// - pascals triangle
// - permutations
// - setTimeout inside a loop
/* for (var i = 1; i <= 10; i++) {
  setTimeout(() => console.log('i', i), i*500);
} 
*/

/////////////////////////////////////////////////////////////////////////////
/*
setTimeout inside a loop:

for (var i = 1; i <= 10; i++) {
  setTimeout(() => console.log('i', i), i*500);
} 
*/
// var testSetTimeout = function() {
//   var counter = 1;
//   do while (counter > 6) {
//     setTimeout(function() { 
//       console.log('i', counter); 
//       counter++;
//     }, 500); 
//   }
// };

// testSetTimeout();
/////////////////////////////////////////////////////////////////////////////
/*
Talk a word from a dictionary collection and find all the possible permutations that are actual words which also are in the dictionary.  Reject the same word, and if no other words can be found, then return 'no anigrams for this word'.

Time complexity should be linear.  
*/

var dictionary = ['act', 'cat', 'tac', 'cud', 'puc'];

var anagramMachine = function(word) {
	var results = [];

	//first, look up word in dictionary and make sure it is real
	if (dictionary.indexOf(word) === -1) {
		return 'That word is not in the dictionary';
	}

	//split the word into an array
	word = word.split('');

	//run word through an permutations function
	var rawResult = permutator(word);

	//look up raw results and push into results if exists in dictionaray
	for (var i = 0; i < rawResult.length; i++) {
		if (dictionary.indexOf(rawResult[i].join('')) !== -1) {
			results.push(rawResult[i].join(''));
		}
	}

	//return the results
	return results;
};


function permutator(inputArr) {
  var results = [];

  //subroutine that can be run recursivly
  function permute(arr, memo) {
    var cur;
    var memo = memo || [];

    //loop through the array of letters
    for (var i = 0; i < arr.length; i++) {
      //assign current letter to cur
      cur = arr.splice(i, 1);
      //base case
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  };
  return permute(inputArr);
};


// var test = anagramMachine('act');
// console.log(test);

/////////////////////////////////////////////////////////////////////////////

// Pascal's triangle: Print an array an nth row of Pascal's triangle

/*  
example triangle:

[ 
       [1],
     [1, 1],
    [1, 2, 1],
  [1, 3, 3, 1],
 [1, 4, 6, 4, 1]
];

pascalsTriangle(4) // [1, 4, 6, 4, 1]
*/

var pascalsTriangle = function(n) {
  var results = [1, 1];
  var counter = 2;
  var tempArr;
  var template = [1, 1];
  var temp;
  if (n === 1) {
    return [1];
  }

  if (n === 2) {
    return results;
  }

  var sub = function() {
    if (counter === n) {
      return;
    }
    tempArr = results.slice();
    console.log('current: ', tempArr);
    //loop through temp
    for (var i = 0; i < tempArr.length - 1; i++) {
      temp = tempArr[i] + tempArr[i + 1];
      template.splice(i + 1, 0, temp);
    }
    results = template;
    template = [1, 1];
    counter++;
    sub();
  };
  sub();

  return results;
};

// console.log(pascalsTriangle(8));

/////////////////////////////////////////////////////////////////////////////

// Fibonacci with memoise
var cashe = {};

var memoiseFibonacci = function(n) {
  if (cashe[n]) return cashe[n];

  var fibo = function(n) {
    if (n <= 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
  };

  cashe[n] = fibo(n);

  return cashe[n];

};

// console.time("concatenation");
// console.log(memoiseFibonacci(30));
// console.timeEnd("concatenation");
// console.time("concatenation");
// console.log(memoiseFibonacci(8));
// console.timeEnd("concatenation");
// console.time("concatenation");
// console.log(memoiseFibonacci(30));
// console.timeEnd("concatenation");



/////////////////////////////////////////////////////////////////////////////

/*
Game of Life  QuestionEditorial Solution  My Submissions
Total Accepted: 27394
Total Submissions: 76612
Difficulty: Medium
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

1) Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2) Any live cell with two or three live neighbors lives on to the next generation.
3) Any live cell with more than three live neighbors dies, as if by over-population..
4) Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

Follow up: 
Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

var board1 = [
  [1, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0]
];

var gameOfLife = function(board) {
  var nextGenBoard = board.slice();

  var sub = function(v, h) {
    var current;
    var alive = 0;
    if (board[v][h] === 1) {
      current = 1;
    } else {
      current = 0;
    }
    // loop through surrounding nodes and increment as needed
    for (var i = v - 1; i <= v + 1; i++) {
      for (var j = h - 1; j <= h + 1; j++) {
        if (i === v && j === h) {
          continue;
        }
        if (board[i] === undefined) {
          continue;
        }
        if (board[i][j] === undefined) {
          continue;
        }
        if (board[i][j] === 1) {
          alive++;
        }
      }
    }

    if (alive < 2) {
      current = 0;
    }
    else if (alive > 3 && current === 1) {
      current = 0;
    }
    else if (alive > 3 && current === 0) {
      current = 1;
    }

    return current;
  };

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      nextGenBoard[i][j] = sub(i, j);
    }
  }

  return nextGenBoard;
};
var a = gameOfLife(board1)
console.log('a: ', a);
var b = gameOfLife(a)
console.log('b: ', b);