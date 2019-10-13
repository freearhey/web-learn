(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["channel-about"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/about.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      channel: _store__WEBPACK_IMPORTED_MODULE_2__["default"].currentChannel
    };
  },
  computed: {
    subscriberCount: function subscriberCount() {
      return numeral__WEBPACK_IMPORTED_MODULE_0___default()(this.channel.subscriberCount).format('0,0');
    },
    viewCount: function viewCount() {
      return numeral__WEBPACK_IMPORTED_MODULE_0___default()(this.channel.viewCount).format('0,0');
    },
    publishedAt: function publishedAt() {
      return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.channel.publishedAt).format('MMM D, YYYY');
    }
  },
  created: function created() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".channel-stats {\n  list-style: none !important;\n  margin-left: 0 !important;\n}\n.channel-stats li {\n    font-weight: 500;\n    color: #4a4a4a;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=template&id=2dc2cb65&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/about.vue?vue&type=template&id=2dc2cb65&lang=pug& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"content"},[(_vm.channel.description)?_c('p',{staticClass:"title is-5"},[_c('strong',[_vm._v("About")])]):_vm._e(),_c('ul',{staticClass:"channel-stats"},[_c('li',[_vm._v(_vm._s(_vm.subscriberCount)+" subscribers")]),_c('li',[_vm._v(_vm._s(_vm.viewCount)+" views")]),_c('li',[_vm._v("Joined "+_vm._s(_vm.publishedAt))])]),_c('p',{domProps:{"innerHTML":_vm._s(_vm.channel.description)}})])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/pages/channels/about.vue":
/*!**************************************!*\
  !*** ./src/pages/channels/about.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_vue_vue_type_template_id_2dc2cb65_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=2dc2cb65&lang=pug& */ "./src/pages/channels/about.vue?vue&type=template&id=2dc2cb65&lang=pug&");
/* harmony import */ var _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js& */ "./src/pages/channels/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.vue?vue&type=style&index=0&lang=sass& */ "./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _about_vue_vue_type_template_id_2dc2cb65_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _about_vue_vue_type_template_id_2dc2cb65_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/channels/about.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/channels/about.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass&":
/*!************************************************************************!*\
  !*** ./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/channels/about.vue?vue&type=template&id=2dc2cb65&lang=pug&":
/*!******************************************************************************!*\
  !*** ./src/pages/channels/about.vue?vue&type=template&id=2dc2cb65&lang=pug& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_2dc2cb65_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=2dc2cb65&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/about.vue?vue&type=template&id=2dc2cb65&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_2dc2cb65_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_2dc2cb65_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL2NoYW5uZWxzL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhbm5lbHMvYWJvdXQudnVlPzBmNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NoYW5uZWxzL2Fib3V0LnZ1ZT84YzY0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jaGFubmVscy9hYm91dC52dWU/MDc1MiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhbm5lbHMvYWJvdXQudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jaGFubmVscy9hYm91dC52dWU/N2MyYSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhbm5lbHMvYWJvdXQudnVlPzEwOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NoYW5uZWxzL2Fib3V0LnZ1ZT8wNWI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBTUE7QUFDQSxtQkFEQSw2QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGFBSkEsdUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxlQVBBLHlCQU9BO0FBQ0E7QUFDQTtBQVRBLEdBTkE7QUFpQkEsU0FqQkEscUJBaUJBO0FBQ0E7QUFDQTtBQW5CQSxHOzs7Ozs7Ozs7OztBQ2pCQSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsbUJBQW1CLGdDQUFnQyw4QkFBOEIsR0FBRyxxQkFBcUIsdUJBQXVCLHFCQUFxQixHQUFHOzs7Ozs7Ozs7Ozs7QUNGL0s7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsd2hCQUE2UjtBQUNuVCw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxpR0FBa0QsYUFBYTtBQUNwRjtBQUNBO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDVGY7QUFBQTtBQUFBO0FBQUEsMEJBQTBCLGFBQWEsMEJBQTBCLHdCQUF3QixxQkFBcUIsc0JBQXNCLFlBQVksd0JBQXdCLFlBQVksc0JBQXNCLG9DQUFvQyx5QkFBeUIscURBQXFELDRCQUE0QixpTEFBaUwsVUFBVSw2Q0FBNkM7QUFDaGtCOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkY7QUFDcEM7QUFDTDtBQUNjOzs7QUFHbEU7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxnRjs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQSx3Q0FBMkssQ0FBZ0IseU9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL0w7QUFBQTtBQUFBO0FBQUE7QUFBMFYsQ0FBZ0IsNFhBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNoYW5uZWwtYWJvdXQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbnNlY3Rpb24uc2VjdGlvblxuICAuY29udGFpbmVyXG4gICAgLmNvbnRlbnRcbiAgICAgIHAudGl0bGUuaXMtNSh2LWlmPVwiY2hhbm5lbC5kZXNjcmlwdGlvblwiKSAjW3N0cm9uZyBBYm91dF1cbiAgICAgIHVsLmNoYW5uZWwtc3RhdHNcbiAgICAgICAgbGkge3sgc3Vic2NyaWJlckNvdW50IH19IHN1YnNjcmliZXJzXG4gICAgICAgIGxpIHt7IHZpZXdDb3VudCB9fSB2aWV3c1xuICAgICAgICBsaSBKb2luZWQge3sgcHVibGlzaGVkQXQgfX1cbiAgICAgIHAodi1odG1sPVwiY2hhbm5lbC5kZXNjcmlwdGlvblwiKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnfnN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWw6IHN0b3JlLmN1cnJlbnRDaGFubmVsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHN1YnNjcmliZXJDb3VudCgpIHtcbiAgICAgIHJldHVybiBudW1lcmFsKHRoaXMuY2hhbm5lbC5zdWJzY3JpYmVyQ291bnQpLmZvcm1hdCgnMCwwJylcbiAgICB9LFxuICAgIHZpZXdDb3VudCgpIHtcbiAgICAgIHJldHVybiBudW1lcmFsKHRoaXMuY2hhbm5lbC52aWV3Q291bnQpLmZvcm1hdCgnMCwwJylcbiAgICB9LFxuICAgIHB1Ymxpc2hlZEF0KCkge1xuICAgICAgcmV0dXJuIGRheWpzKHRoaXMuY2hhbm5lbC5wdWJsaXNoZWRBdCkuZm9ybWF0KCdNTU0gRCwgWVlZWScpXG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJFByb2dyZXNzLmZpbmlzaCgpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cbi5jaGFubmVsLXRpdGxlXG4gIC8vIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudFxuLmNoYW5uZWwtc3RhdHNcbiAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnRcbiAgbGlcbiAgICBmb250LXdlaWdodDogNTAwXG4gICAgY29sb3I6ICM0YTRhNGFcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhbm5lbC1zdGF0cyB7XFxuICBsaXN0LXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4uY2hhbm5lbC1zdGF0cyBsaSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiAjNGE0YTRhO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/aW5kZW50ZWRTeW50YXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hYm91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNhc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/aW5kZW50ZWRTeW50YXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hYm91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNhc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWJvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zYXNzJlwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcInNlY3Rpb25cIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRhaW5lclwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGVudFwifSxbKF92bS5jaGFubmVsLmRlc2NyaXB0aW9uKT9fYygncCcse3N0YXRpY0NsYXNzOlwidGl0bGUgaXMtNVwifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIkFib3V0XCIpXSldKTpfdm0uX2UoKSxfYygndWwnLHtzdGF0aWNDbGFzczpcImNoYW5uZWwtc3RhdHNcIn0sW19jKCdsaScsW192bS5fdihfdm0uX3MoX3ZtLnN1YnNjcmliZXJDb3VudCkrXCIgc3Vic2NyaWJlcnNcIildKSxfYygnbGknLFtfdm0uX3YoX3ZtLl9zKF92bS52aWV3Q291bnQpK1wiIHZpZXdzXCIpXSksX2MoJ2xpJyxbX3ZtLl92KFwiSm9pbmVkIFwiK192bS5fcyhfdm0ucHVibGlzaGVkQXQpKV0pXSksX2MoJ3AnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmNoYW5uZWwuZGVzY3JpcHRpb24pfX0pXSldKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZGMyY2I2NSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9hYm91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNhc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Fib3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2FzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/aW5kZW50ZWRTeW50YXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hYm91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNhc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWJvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkYzJjYjY1Jmxhbmc9cHVnJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==