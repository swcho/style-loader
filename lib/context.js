
// @ts-check
/// <reference path="../node_modules/@types/webpack-env/index.d.ts"/>

/** 
 * @type {import('./context').StylesInDom}
 */
var stylesInDom = {};

// /** 
//  * @type {import('../types/index').Part[]}
//  */
// var styles = [];

const STYLE_PROP_NAME = '__styles__'
global[STYLE_PROP_NAME] = []

module.exports = {
  STYLE_PROP_NAME: STYLE_PROP_NAME,
  getStylesInDom: function() {
    return stylesInDom;
  },
  getStyles: function() {
    return global[STYLE_PROP_NAME];
  },
  resetStyles: function() {
    console.log(global['__webpack_modules__']);
    console.log(module['__webpack_modules__']);
    const m = module;
    const cache = require.cache;
    /**
     * @type {import('../types/index').Style[]}
     */
    const styles = global[STYLE_PROP_NAME];
    for (var i = 0; i < styles.length ; i++) {
      const style = styles[i];
      if (cache[style.id]) {
        console.log('reset', style.id);
        delete cache[style.id];
      }
    }
    debugger;
    global[STYLE_PROP_NAME] = [];
  },
}