
// @ts-check

/** 
 * @type {import('./context').StylesInDom}
 */
var stylesInDom = {};

// /** 
//  * @type {import('../types/index').Part[]}
//  */
// var styles = [];

module.exports = {
  getStylesInDom: function() {
    return stylesInDom;
  },
  getStyles: function() {
    return global['__styles__'];
  },
  resetStyles: function() {
    return global['__styles__'] = [];
  },
}