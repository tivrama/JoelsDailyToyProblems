// Print the values ina a binary tree in order

var testTree = {
	val: 11,
	l: {val: 7, l: {val: 5, l: {val: 1, l: null, r: {val: 2, l: null, r: null}}, r: {val: 6, l: null, r: null}}, r: null},
	r: {val: 20, l: {val: 15, l: {val: 12, l: null, r: null}}, r: {val: 25, l: {val: 22, l: null, r: null}, r: {val: 28, l: null, r: null}}}
}


var printTree = function(branch) {
	if (branch.l) { printTree(branch.l) }
	console.log(branch.val);
	if (branch.r) { printTree(branch.r) }
}


console.log(printTree(testTree));