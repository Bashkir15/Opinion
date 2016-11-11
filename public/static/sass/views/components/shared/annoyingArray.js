var testArray = [
	[
		'a',
		'b',
		'c'
	],

	[
		'd',
		'e',
		'f'
	],

	[
		'g',
		'h',
		'i',
		'j'
	]
];

var sortedArray;    // The arrays sorted by samllest length to greatest
var sentString;     // Concated string of the multi-array
var newArray = [];  // The new Array created from the concated string


/*
 *
 	Sorts the Array by sub-array length and then passes
 	that array to be stringified
 *
*/

function comparator(a, b) {
	return b.length < a.length;
}

function sort(args) {
	sortedArray = args.sort(comparator);
	return stringify(sortedArray);
}


/*
 *
 	Stringifies the sorted Array, separating the sub-arrays
 	by a vertical pipe, |
 *
*/

function stringify(sortedArray) {
	// joins each of the subarrays values, separating by comma

	for (var x in sortedArray) {
		sortedArray[x] = sortedArray[x].join(",");

		// returns ["a,b,c", "d,e,f", "g,h,i,j"]
	}

	// joins each of the strings, separating them by a |

	sentString = sortedArray.join('|');

	// returns 'a,b,c,d,e,f,g,h,i,j'

	//	makes new array from string

	makeNewArray(sentString);
}

function makeNewArray(string) {
	// makes an array

	var temp = string.split('|');

	// returns ['a,b,c', 'd,e,f', 'g,h,i,j']

	for (var i = 0; i < temp.length; i++) {
		newArray[i] = temp[i].split(',');

		// returns [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i', 'j']]
		// do indexing here if necessary
	}

	return newArray;	
}


/*
 *
 	Cartesian Product if needed
 *
*/

function cartProduct(arguments) {
	var args = Array.prototype.slice.call(arguments),
	end = args.length - 1,
	result = [];

	function addTo(curr, start) {
		var first = args[start],
		last = (start === end);

		for (var i = 0; i < first.length; i++) {
			var copy = curr.slice();
			copy.push(first[i]);

			if (last) {
				result.push(copy);
			} else {
				addTo(copy, start + 1);
			}
		}
	}

	if (args.length) {
		addTo([], 0);
	} else {
		result.push([]);
	}
}



/*
 *
 	Basic escape ideas if needed, using html as placeholder
 *
*/

var htmlEscapes = {
	'&': '&amp;',
	'<': '&lt'
};

var reUnescapedHtml = /[&<>"'`]/g,
	reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

var escapeHtmlChar = basePropertyOf(htmlEscapes);

function basePropertyOf(object) {
	return function (key) {
		return obj === null ? undefined : object[key];
	};
}

function escape(string) {
	return (string && reHasUnescapedHtml.test(string))
		? string.replace(reUnescapedHtml, escapeHtmlChar)
		: string;
}