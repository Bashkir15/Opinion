var testArray = [
	[
		"sdfkgjhsdfgjkdhfg",
		'sdfkgjhsdkjghskdjfg',
		'sdkfjhsdkjfhgsdfg'
	],

	[
		'sdkjghsdkjhgsdgf',
		'sdfgsdfkjhgksdhfg',
		'sdfkghsdkfghksdfhg'
	],

	[
		'sdkgjhsdkjghsdfgf',
		'sdgjhsdkfjhgkjhsdfg',
		'sdgsdhfgjhsdlfhg'
	]
];

var sortedArray = [];
var sentString;
var newArray = [];


/*
 *
 	Character Escapes
 *
*/


function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

function escape(string) {
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

var escapeHtmlChar = basePropertyOf(htmlEscapes);


/*
 *
 	Cartesian and sort
 *
*/
	
function product(testArray) {
	var args = Array.prototype.slice.call(testArray),
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

	sortedArray = results.sort(comparator);
	return stringify(sortedArray);
}

function comparator(a, b) {
	if (a[i].length < b[i].length return -1;
	if (a[i].length > b[i].length return 1;
	return 0;
}


/*
 *
	Stringify
 *
*/

function stringify(argument) {

	for (var i = 0; i < arguments.length; i++) {
		sentString += arguments[i].join("");
		sentString += "|";
	}

	return sentString = escape(sentString);
}

function makeNewArray(string) {
	var temp = string.split('|'),
	midpoint = Math.floor(temp.length/2),

	for (var i = 0, len=midpoint; i < len; i++) {
		newArray.push([temp[i]]);
		midpoint++;
	}

	return newArray;
}



