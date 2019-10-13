(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-topic"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/topics/single.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~config */ "./src/weblearn.config.js");
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
      topic: null,
      params: {
        title: '',
        description: ''
      }
    };
  },
  created: function created() {
    this.$Progress.start();
    this.loadTopic();
  },
  watch: {
    $route: function $route() {
      this.loadTopic();
    }
  },
  methods: {
    loadTopic: function loadTopic() {
      var _this = this;

      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchTopic(this.$route.params.id).then(function (topic) {
        _this.params.title = topic.title;
        _this.params.description = "Videos is dedicated to ".concat(topic.title);
        _this.topic = topic;

        _this.$emit('updateHead');
      });
    }
  },
  head: {
    title: function title() {
      return {
        inner: this.params.title,
        separator: '-',
        complement: _config__WEBPACK_IMPORTED_MODULE_1__["default"].app.name
      };
    },
    meta: function meta() {
      return [{
        id: 'description',
        name: 'description',
        content: this.params.description
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media (min-width: 769px) {\n.hero.is-medium .hero-body[data-v-f7dbbb34] {\n    padding: 90px;\n}\n}\n.info[data-v-f7dbbb34] {\n  padding: 20px 20px 0;\n}\n@media (min-width: 769px) {\n.info .container[data-v-f7dbbb34] {\n      height: 60px;\n}\n}\n.topic-title[data-v-f7dbbb34] {\n  margin-bottom: 5px !important;\n}\n.topic-site[data-v-f7dbbb34] {\n  color: #595959 !important;\n  border-bottom: none !important;\n}\n.topic-site[data-v-f7dbbb34]:visited {\n    color: #595959 !important;\n}\n.topic-site[data-v-f7dbbb34]:hover {\n    color: #4a8bfa !important;\n    border-bottom: 1px solid #adcbfd !important;\n}\n.nav[data-v-f7dbbb34] {\n  z-index: 1 !important;\n}\n.logo[data-v-f7dbbb34] {\n  background-color: #fff;\n  border-radius: 6px;\n  width: 64px;\n  height: 64px;\n}\n@media (min-width: 769px) {\n.logo[data-v-f7dbbb34] {\n      z-index: 2;\n      border: 5px solid #fff;\n      top: -140px;\n      width: 200px;\n      height: 200px;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n}\n.logo__wrapper[data-v-f7dbbb34] {\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n.logo img[data-v-f7dbbb34] {\n    display: inline-block;\n    vertical-align: middle;\n    max-height: 100%;\n    max-width: 100%;\n}\n.media-left[data-v-f7dbbb34] {\n  margin-right: 20px;\n}\n@media (min-width: 769px) {\n.media-left[data-v-f7dbbb34] {\n      margin-right: 30px;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/topics/single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[(_vm.topic)?_c('section',[_c('div',{staticClass:"hero is-medium",style:({ backgroundColor: _vm.topic.color })},[_c('div',{staticClass:"hero-body"})]),_c('div',{staticClass:"info"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('div',{staticClass:"image logo"},[_c('span',{staticClass:"logo__wrapper"}),_c('img',{attrs:{"src":_vm.topic.logo,"alt":_vm.topic.title + ' logo'}})])]),_c('div',{staticClass:"media-content"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title is-3 topic-title"},[_c('strong',[_vm._v(_vm._s(_vm.topic.title))])]),(_vm.topic.site)?_c('a',{staticClass:"topic-site",attrs:{"href":_vm.topic.site,"target":"_blank","rel":"noopener noreferrer"}},[_vm._v(_vm._s(_vm.topic.site))]):_vm._e()])])])])]),_c('nav',{staticClass:"nav has-underline"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"nav-center"},[_c('router-link',{staticClass:"nav-item is-tab",attrs:{"to":{ name: 'topic-popular-videos' }}},[_vm._v("Popular")]),_c('router-link',{staticClass:"nav-item is-tab",attrs:{"to":{ name: 'topic-recent-videos' }}},[_vm._v("Recent")])],1)])]),_c('router-view')],1):_vm._e()])}
var staticRenderFns = []



/***/ }),

/***/ "./src/pages/topics/single.vue":
/*!*************************************!*\
  !*** ./src/pages/topics/single.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single_vue_vue_type_template_id_f7dbbb34_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug& */ "./src/pages/topics/single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug&");
/* harmony import */ var _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.vue?vue&type=script&lang=js& */ "./src/pages/topics/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true& */ "./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _single_vue_vue_type_template_id_f7dbbb34_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _single_vue_vue_type_template_id_f7dbbb34_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f7dbbb34",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/topics/single.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/topics/single.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=style&index=0&id=f7dbbb34&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_f7dbbb34_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/topics/single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug&":
/*!*****************************************************************************************!*\
  !*** ./src/pages/topics/single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_f7dbbb34_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/single.vue?vue&type=template&id=f7dbbb34&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_f7dbbb34_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_f7dbbb34_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL3RvcGljcy9zaW5nbGUudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90b3BpY3Mvc2luZ2xlLnZ1ZT9mYmYwIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90b3BpY3Mvc2luZ2xlLnZ1ZT9hOWI5Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90b3BpY3Mvc2luZ2xlLnZ1ZT8xYTJiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90b3BpY3Mvc2luZ2xlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9waWNzL3NpbmdsZS52dWU/MDRmMSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9waWNzL3NpbmdsZS52dWU/MWU2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9waWNzL3NpbmdsZS52dWU/NzZhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFGQTtBQU9BLEdBVEE7QUFVQSxTQVZBLHFCQVVBO0FBQ0E7QUFDQTtBQUNBLEdBYkE7QUFjQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBO0FBSEEsR0FkQTtBQW1CQTtBQUNBLGFBREEsdUJBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQVJBLEdBbkJBO0FBNkJBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEE7QUFLQSxLQVBBO0FBUUEsUUFSQSxrQkFRQTtBQUNBLGNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURBO0FBR0E7QUFaQTtBQTdCQSxHOzs7Ozs7Ozs7OztBQzVCQSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsOEJBQThCLCtDQUErQyxvQkFBb0IsR0FBRyxHQUFHLDBCQUEwQix5QkFBeUIsR0FBRyw2QkFBNkIscUNBQXFDLHFCQUFxQixHQUFHLEdBQUcsaUNBQWlDLGtDQUFrQyxHQUFHLGdDQUFnQyw4QkFBOEIsbUNBQW1DLEdBQUcsd0NBQXdDLGdDQUFnQyxHQUFHLHNDQUFzQyxnQ0FBZ0Msa0RBQWtELEdBQUcseUJBQXlCLDBCQUEwQixHQUFHLDBCQUEwQiwyQkFBMkIsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyw2QkFBNkIsMEJBQTBCLG1CQUFtQiwrQkFBK0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsaURBQWlELEdBQUcsR0FBRyxtQ0FBbUMsNEJBQTRCLG1CQUFtQiw2QkFBNkIsR0FBRyw4QkFBOEIsNEJBQTRCLDZCQUE2Qix1QkFBdUIsc0JBQXNCLEdBQUcsZ0NBQWdDLHVCQUF1QixHQUFHLDZCQUE2QixnQ0FBZ0MsMkJBQTJCLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7O0FDRnY1Qzs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx3a0JBQXNUO0FBQzVVLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGlHQUFrRCxhQUFhO0FBQ3BGO0FBQ0E7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNUZjtBQUFBO0FBQUE7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLHNEQUFzRCxxQ0FBcUMsbUNBQW1DLEVBQUUsWUFBWSx3QkFBd0IsY0FBYyxtQkFBbUIsWUFBWSx3QkFBd0IsWUFBWSxvQkFBb0IsWUFBWSx5QkFBeUIsWUFBWSx5QkFBeUIsYUFBYSw0QkFBNEIsWUFBWSxPQUFPLHNEQUFzRCxnQkFBZ0IsNEJBQTRCLFlBQVksc0JBQXNCLFlBQVkscUNBQXFDLDRFQUE0RSxnQ0FBZ0MscUVBQXFFLGdFQUFnRSxnQ0FBZ0MsWUFBWSx3QkFBd0IsWUFBWSx5QkFBeUIsb0JBQW9CLHFDQUFxQyxNQUFNLGlDQUFpQyx3Q0FBd0MscUNBQXFDLE1BQU0sZ0NBQWdDO0FBQzFzQzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ2hEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGdGOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBLHdDQUE0SyxDQUFnQiwwT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTTtBQUFBO0FBQUE7QUFBQTtBQUFtWCxDQUFnQixxWkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2WTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic2luZ2xlLXRvcGljLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG5tYWluXG4gIHNlY3Rpb24odi1pZj1cInRvcGljXCIpXG4gICAgLmhlcm8uaXMtbWVkaXVtKDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiB0b3BpYy5jb2xvciB9XCIpXG4gICAgICAuaGVyby1ib2R5XG4gICAgLmluZm9cbiAgICAgIC5jb250YWluZXJcbiAgICAgICAgLm1lZGlhXG4gICAgICAgICAgLm1lZGlhLWxlZnRcbiAgICAgICAgICAgIC5pbWFnZS5sb2dvXG4gICAgICAgICAgICAgIHNwYW4ubG9nb19fd3JhcHBlclxuICAgICAgICAgICAgICBpbWcoOnNyYz1cInRvcGljLmxvZ29cIiw6YWx0PVwidG9waWMudGl0bGUgKyAnIGxvZ28nXCIpXG4gICAgICAgICAgLm1lZGlhLWNvbnRlbnRcbiAgICAgICAgICAgIC5jb250ZW50XG4gICAgICAgICAgICAgIC50aXRsZS5pcy0zLnRvcGljLXRpdGxlICNbc3Ryb25nIHt7IHRvcGljLnRpdGxlIH19XVxuICAgICAgICAgICAgICBhLnRvcGljLXNpdGUodi1pZj1cInRvcGljLnNpdGVcIiw6aHJlZj1cInRvcGljLnNpdGVcIix0YXJnZXQ9XCJfYmxhbmtcIixyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIpIHt7IHRvcGljLnNpdGUgfX1cbiAgICBuYXYubmF2Lmhhcy11bmRlcmxpbmVcbiAgICAgIC5jb250YWluZXJcbiAgICAgICAgLm5hdi1jZW50ZXJcbiAgICAgICAgICByb3V0ZXItbGluay5uYXYtaXRlbS5pcy10YWIoOnRvPVwieyBuYW1lOiAndG9waWMtcG9wdWxhci12aWRlb3MnIH1cIikgUG9wdWxhclxuICAgICAgICAgIHJvdXRlci1saW5rLm5hdi1pdGVtLmlzLXRhYig6dG89XCJ7IG5hbWU6ICd0b3BpYy1yZWNlbnQtdmlkZW9zJyB9XCIpIFJlY2VudFxuICAgIHJvdXRlci12aWV3XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHN0b3JlIGZyb20gJ35zdG9yZSdcbmltcG9ydCBjb25maWcgZnJvbSAnfmNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3BpYzogbnVsbCxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRQcm9ncmVzcy5zdGFydCgpXG4gICAgdGhpcy5sb2FkVG9waWMoKVxuICB9LFxuICB3YXRjaDoge1xuICAgICRyb3V0ZSgpIHtcbiAgICAgIHRoaXMubG9hZFRvcGljKClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkVG9waWMoKSB7XG4gICAgICBzdG9yZS5mZXRjaFRvcGljKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkudGhlbih0b3BpYyA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1zLnRpdGxlID0gdG9waWMudGl0bGVcbiAgICAgICAgdGhpcy5wYXJhbXMuZGVzY3JpcHRpb24gPSBgVmlkZW9zIGlzIGRlZGljYXRlZCB0byAke3RvcGljLnRpdGxlfWBcbiAgICAgICAgdGhpcy50b3BpYyA9IHRvcGljXG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGhlYWQ6IHtcbiAgICB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlubmVyOiB0aGlzLnBhcmFtcy50aXRsZSxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIGNvbXBsZW1lbnQ6IGNvbmZpZy5hcHAubmFtZVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0YSgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHsgaWQ6ICdkZXNjcmlwdGlvbicsIG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMucGFyYW1zLmRlc2NyaXB0aW9uIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIiBzY29wZWQ+XG4kdGFibGV0OiA3NjlweFxuJGxpbmstY29sb3I6ICM1OTU5NTlcblxuLmhlcm8uaXMtbWVkaXVtIC5oZXJvLWJvZHlcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpXG4gICAgcGFkZGluZzogOTBweFxuXG4uaW5mb1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMFxuICAuY29udGFpbmVyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpXG4gICAgICBoZWlnaHQ6IDYwcHhcblxuLnRvcGljLXRpdGxlXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50XG5cbi50b3BpYy1zaXRlXG4gIGNvbG9yOiAkbGluay1jb2xvciAhaW1wb3J0YW50XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudFxuICAmOnZpc2l0ZWRcbiAgICBjb2xvcjogJGxpbmstY29sb3IgIWltcG9ydGFudFxuICAmOmhvdmVyXG4gICAgY29sb3I6ICM0YThiZmEgIWltcG9ydGFudFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCM0YThiZmEsIDIwJSkgIWltcG9ydGFudFxuXG4ubmF2XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudFxuXG4ubG9nb1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXG4gIGJvcmRlci1yYWRpdXM6IDZweFxuICB3aWR0aDogNjRweFxuICBoZWlnaHQ6IDY0cHhcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpXG4gICAgei1pbmRleDogMlxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmZcbiAgICB0b3A6IC0xNDBweFxuICAgIHdpZHRoOiAyMDBweFxuICAgIGhlaWdodDogMjAwcHhcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMSlcbiAgXG4gICZfX3dyYXBwZXJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG5cbiAgaW1nIFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICBtYXgtaGVpZ2h0OiAxMDAlXG4gICAgbWF4LXdpZHRoOiAxMDAlXG5cbi5tZWRpYS1sZWZ0XG4gIG1hcmdpbi1yaWdodDogMjBweFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldClcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHhcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4uaGVyby5pcy1tZWRpdW0gLmhlcm8tYm9keVtkYXRhLXYtZjdkYmJiMzRdIHtcXG4gICAgcGFkZGluZzogOTBweDtcXG59XFxufVxcbi5pbmZvW2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbi5pbmZvIC5jb250YWluZXJbZGF0YS12LWY3ZGJiYjM0XSB7XFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG59XFxuLnRvcGljLXRpdGxlW2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XFxufVxcbi50b3BpYy1zaXRlW2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgY29sb3I6ICM1OTU5NTkgIWltcG9ydGFudDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnRvcGljLXNpdGVbZGF0YS12LWY3ZGJiYjM0XTp2aXNpdGVkIHtcXG4gICAgY29sb3I6ICM1OTU5NTkgIWltcG9ydGFudDtcXG59XFxuLnRvcGljLXNpdGVbZGF0YS12LWY3ZGJiYjM0XTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNGE4YmZhICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRjYmZkICFpbXBvcnRhbnQ7XFxufVxcbi5uYXZbZGF0YS12LWY3ZGJiYjM0XSB7XFxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XFxufVxcbi5sb2dvW2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4ubG9nb1tkYXRhLXYtZjdkYmJiMzRdIHtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XFxuICAgICAgdG9wOiAtMTQwcHg7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxufVxcbi5sb2dvX193cmFwcGVyW2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ28gaW1nW2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuLm1lZGlhLWxlZnRbZGF0YS12LWY3ZGJiYjM0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbi5tZWRpYS1sZWZ0W2RhdGEtdi1mN2RiYmIzNF0ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxufVxcblwiLCBcIlwiXSk7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mN2RiYmIzNCZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/aW5kZW50ZWRTeW50YXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjdkYmJiMzQmbGFuZz1zYXNzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mN2RiYmIzNCZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbWFpbicsWyhfdm0udG9waWMpP19jKCdzZWN0aW9uJyxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVybyBpcy1tZWRpdW1cIixzdHlsZTooeyBiYWNrZ3JvdW5kQ29sb3I6IF92bS50b3BpYy5jb2xvciB9KX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlcm8tYm9keVwifSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJpbmZvXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1lZGlhXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtZWRpYS1sZWZ0XCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJpbWFnZSBsb2dvXCJ9LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwibG9nb19fd3JhcHBlclwifSksX2MoJ2ltZycse2F0dHJzOntcInNyY1wiOl92bS50b3BpYy5sb2dvLFwiYWx0XCI6X3ZtLnRvcGljLnRpdGxlICsgJyBsb2dvJ319KV0pXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWVkaWEtY29udGVudFwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGVudFwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGl0bGUgaXMtMyB0b3BpYy10aXRsZVwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLnRvcGljLnRpdGxlKSldKV0pLChfdm0udG9waWMuc2l0ZSk/X2MoJ2EnLHtzdGF0aWNDbGFzczpcInRvcGljLXNpdGVcIixhdHRyczp7XCJocmVmXCI6X3ZtLnRvcGljLnNpdGUsXCJ0YXJnZXRcIjpcIl9ibGFua1wiLFwicmVsXCI6XCJub29wZW5lciBub3JlZmVycmVyXCJ9fSxbX3ZtLl92KF92bS5fcyhfdm0udG9waWMuc2l0ZSkpXSk6X3ZtLl9lKCldKV0pXSldKV0pLF9jKCduYXYnLHtzdGF0aWNDbGFzczpcIm5hdiBoYXMtdW5kZXJsaW5lXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm5hdi1jZW50ZXJcIn0sW19jKCdyb3V0ZXItbGluaycse3N0YXRpY0NsYXNzOlwibmF2LWl0ZW0gaXMtdGFiXCIsYXR0cnM6e1widG9cIjp7IG5hbWU6ICd0b3BpYy1wb3B1bGFyLXZpZGVvcycgfX19LFtfdm0uX3YoXCJQb3B1bGFyXCIpXSksX2MoJ3JvdXRlci1saW5rJyx7c3RhdGljQ2xhc3M6XCJuYXYtaXRlbSBpcy10YWJcIixhdHRyczp7XCJ0b1wiOnsgbmFtZTogJ3RvcGljLXJlY2VudC12aWRlb3MnIH19fSxbX3ZtLl92KFwiUmVjZW50XCIpXSldLDEpXSldKSxfYygncm91dGVyLXZpZXcnKV0sMSk6X3ZtLl9lKCldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3ZGJiYjM0JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NpbmdsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2luZ2xlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY3ZGJiYjM0Jmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjdkYmJiMzRcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2luZ2xlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mN2RiYmIzNCZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2luZ2xlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY3ZGJiYjM0Jmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3ZGJiYjM0JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==