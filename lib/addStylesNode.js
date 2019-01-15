/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

// @ts-check
/// <reference path="../types/global.d.ts" />

global['__styles__'] = [];
/**
 *
 *
 * @param {*} list
 * @param {import('../types/index').Options} options
 * @returns {import('../types/index').Style[]}
 */
function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}


/**
 * @param {import('../types/index').Options} [options]
 */
module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	debugger;

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// // tags it will allow on a page
	// if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToGlobal(styles, options);

	return function update (newList) {
		console.log('update', newList);
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToGlobal(newStyles, options);
		}
	};
};

/**
 *
 *
 * @param {import('../types/index').Style[]} styles
 * @param {import('../types/index').Options} options
 */
function addStylesToGlobal (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		global['__styles__'].push(item);
	}
	console.log('addStylesToGlobal', global['__styles__'].length)
}

