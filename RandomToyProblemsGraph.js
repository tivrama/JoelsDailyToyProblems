/*
Graph Tour, Starting with a graph you must write a function that returns true if it is possible to make a tour of the graph in which every edge is visited exactly once.
The graph is represented by an array of tuples, where each tuple represents a single edge.
The rules are:
- You can start at any node.
- You must visit each edge exactly once.
- All edges are undirected.

for example:
[["a", "b"]] --> true
[["a", "a"],
 ["b", "b"]] --> false
[["a", "b"],
 ["a", "b"],
 ["a", "c"],
 ["c", "a"],
 ["a", "d"],
 ["b", "d"],
 ["c", "d"]] --> false
[[1, 2],
 [2, 3],
 [3, 4],
 [4, 1]] --> true
[["a", "b"],
 ["a", "c"],
 ["c", "b"],
 ["a", "e"],
 ["b", "e"],
 ["a", "d"],
 ["b", "d"],
 ["c", "e"],
 ["d", "e"],
 ["c", "f"],
 ["d", "f"]] --> true
*/

var graphTour = function(collection) {
	var result = true;
	var edgesLength = 0;
	//check if the length every edges array

		//for every edge array with a length less than 2, increment edgesLength

	//if edgesLength is greater than 2, return false


	//make tour subroutine

		//checker set to true

		//loop through all tuples

			//check for match - if so continue

		//


	//loop through collection

		//call tour function






	return result;
};

