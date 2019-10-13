(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-channel"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/single.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      channel: null,
      params: {
        title: '',
        description: ''
      }
    };
  },
  computed: {
    channelStyle: function channelStyle() {
      if (this.channel.image) {
        return {
          backgroundImage: 'url(' + this.channel.image.bannerTabletImageUrl + ')'
        };
      }

      return {
        backgroundColor: this.channel.profileColor
      };
    },
    channelLink: function channelLink() {
      return "https://www.youtube.com/channel/".concat(this.channel.id);
    }
  },
  created: function created() {
    this.$Progress.start();
    this.loadChannel();
  },
  watch: {
    $route: function $route() {
      this.loadChannel();
    }
  },
  methods: {
    loadChannel: function loadChannel() {
      var _this = this;

      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchChannel(this.$route.params.id).then(function (channel) {
        _this.params.title = channel.title;
        _this.params.description = "".concat(channel.title, " videos");
        _this.channel = channel;

        _this.$emit('updateHead');
      })["catch"](function () {
        _this.$Progress.fail();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hero[data-v-73547ea2] {\n  background-size: cover;\n}\n@media (min-width: 769px) {\n.hero.is-medium .hero-body[data-v-73547ea2] {\n    padding: 90px;\n}\n}\n.info[data-v-73547ea2] {\n  padding: 20px 20px 0;\n}\n@media (min-width: 769px) {\n.info .container[data-v-73547ea2] {\n      height: 60px;\n}\n}\n.logo[data-v-73547ea2] {\n  background-color: #fff;\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n}\n@media (min-width: 769px) {\n.logo[data-v-73547ea2] {\n      z-index: 2;\n      border: 5px solid #fff;\n      top: -150px;\n      width: 200px;\n      height: 200px;\n}\n}\n.logo__wrapper[data-v-73547ea2] {\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n.logo img[data-v-73547ea2] {\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 50%;\n    max-height: 100%;\n    max-width: 100%;\n}\n.media-left[data-v-73547ea2] {\n  margin-right: 20px;\n}\n@media (min-width: 769px) {\n.media-left[data-v-73547ea2] {\n      margin-right: 30px;\n}\n}\n.channel-title[data-v-73547ea2] {\n  display: inline-flex;\n  align-items: center;\n}\n.ext-link[data-v-73547ea2] {\n  border-bottom: none !important;\n  display: inline-flex;\n}\n.ext-link > .icon[data-v-73547ea2] {\n    color: #bbbbbb;\n    font-weight: 600;\n    font-size: 24px;\n    margin-left: 10px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/channels/single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[(_vm.channel)?_c('section',[_c('div',{staticClass:"hero is-medium",style:(_vm.channelStyle)},[_c('div',{staticClass:"hero-body"})]),_c('div',{staticClass:"info"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('div',{staticClass:"image logo"},[_c('span',{staticClass:"logo__wrapper"}),_c('img',{attrs:{"src":_vm.channel.thumbnails.medium.url,"alt":_vm.channel.title + ' channel logo'}})])]),_c('div',{staticClass:"media-content"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title is-3 channel-title"},[_c('strong',[_vm._v(_vm._s(_vm.channel.title))]),_vm._v(" "),_c('a',{staticClass:"ext-link",attrs:{"href":_vm.channelLink,"target":"_blank","rel":"noopener noreferrer"}},[_c('span',{staticClass:"icon"},[_c('ion-icon',{attrs:{"name":"link"}})],1)])])])])])])]),_c('nav',{staticClass:"nav has-underline"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"nav-center"},[_c('router-link',{staticClass:"nav-item is-tab",attrs:{"to":{ name: 'channel-about' }}},[_vm._v("About")]),_c('router-link',{staticClass:"nav-item is-tab",attrs:{"to":{ name: 'channel-recent-videos' }}},[_vm._v("Uploads")])],1)])]),_c('router-view')],1):_vm._e()])}
var staticRenderFns = []



/***/ }),

/***/ "./src/pages/channels/single.vue":
/*!***************************************!*\
  !*** ./src/pages/channels/single.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single_vue_vue_type_template_id_73547ea2_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug& */ "./src/pages/channels/single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug&");
/* harmony import */ var _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.vue?vue&type=script&lang=js& */ "./src/pages/channels/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true& */ "./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _single_vue_vue_type_template_id_73547ea2_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _single_vue_vue_type_template_id_73547ea2_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73547ea2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/channels/single.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/channels/single.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=style&index=0&id=73547ea2&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_style_index_0_id_73547ea2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/channels/single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug&":
/*!*******************************************************************************************!*\
  !*** ./src/pages/channels/single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_73547ea2_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/channels/single.vue?vue&type=template&id=73547ea2&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_73547ea2_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_73547ea2_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL2NoYW5uZWxzL3NpbmdsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NoYW5uZWxzL3NpbmdsZS52dWU/YTJkOSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhbm5lbHMvc2luZ2xlLnZ1ZT9mNTdjIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jaGFubmVscy9zaW5nbGUudnVlP2VkZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NoYW5uZWxzL3NpbmdsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NoYW5uZWxzL3NpbmdsZS52dWU/YzViNiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhbm5lbHMvc2luZ2xlLnZ1ZT9mYjZiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jaGFubmVscy9zaW5nbGUudnVlPzZjNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBLGlCQURBO0FBRUE7QUFGQTtBQUZBO0FBT0EsR0FUQTtBQVVBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBLEtBUEE7QUFRQSxlQVJBLHlCQVFBO0FBQ0E7QUFDQTtBQVZBLEdBVkE7QUFzQkEsU0F0QkEscUJBc0JBO0FBQ0E7QUFDQTtBQUNBLEdBekJBO0FBMEJBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQTFCQTtBQStCQTtBQUNBLGVBREEseUJBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BTEEsV0FLQTtBQUNBO0FBQ0EsT0FQQTtBQVFBO0FBVkEsR0EvQkE7QUEyQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLHNCQUZBO0FBR0E7QUFIQTtBQUtBLEtBUEE7QUFRQSxRQVJBLGtCQVFBO0FBQ0EsY0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREE7QUFHQTtBQVpBO0FBM0NBLEc7Ozs7Ozs7Ozs7O0FDaENBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUywyQkFBMkIsMkJBQTJCLEdBQUcsNkJBQTZCLCtDQUErQyxvQkFBb0IsR0FBRyxHQUFHLDBCQUEwQix5QkFBeUIsR0FBRyw2QkFBNkIscUNBQXFDLHFCQUFxQixHQUFHLEdBQUcsMEJBQTBCLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLDZCQUE2QiwwQkFBMEIsbUJBQW1CLCtCQUErQixvQkFBb0IscUJBQXFCLHNCQUFzQixHQUFHLEdBQUcsbUNBQW1DLDRCQUE0QixtQkFBbUIsNkJBQTZCLEdBQUcsOEJBQThCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLHVCQUF1QixzQkFBc0IsR0FBRyxnQ0FBZ0MsdUJBQXVCLEdBQUcsNkJBQTZCLGdDQUFnQywyQkFBMkIsR0FBRyxHQUFHLG1DQUFtQyx5QkFBeUIsd0JBQXdCLEdBQUcsOEJBQThCLG1DQUFtQyx5QkFBeUIsR0FBRyxzQ0FBc0MscUJBQXFCLHVCQUF1QixzQkFBc0Isd0JBQXdCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Z4MEM7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsMGtCQUFzVDtBQUM1VSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxpR0FBa0QsYUFBYTtBQUNwRjtBQUNBO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDVGY7QUFBQTtBQUFBO0FBQUEsMEJBQTBCLGFBQWEsMEJBQTBCLHdCQUF3Qix3REFBd0Qsc0RBQXNELFlBQVksd0JBQXdCLGNBQWMsbUJBQW1CLFlBQVksd0JBQXdCLFlBQVksb0JBQW9CLFlBQVkseUJBQXlCLFlBQVkseUJBQXlCLGFBQWEsNEJBQTRCLFlBQVksT0FBTyxtRkFBbUYsZ0JBQWdCLDRCQUE0QixZQUFZLHNCQUFzQixZQUFZLHVDQUF1Qyx1RUFBdUUsOEJBQThCLHNFQUFzRSxhQUFhLG1CQUFtQixpQkFBaUIsT0FBTyxlQUFlLDhCQUE4QixnQ0FBZ0MsWUFBWSx3QkFBd0IsWUFBWSx5QkFBeUIsb0JBQW9CLHFDQUFxQyxNQUFNLDBCQUEwQixzQ0FBc0MscUNBQXFDLE1BQU0sa0NBQWtDO0FBQy91Qzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ2hEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGdGOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBLHdDQUE0SyxDQUFnQiwwT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTTtBQUFBO0FBQUE7QUFBQTtBQUFtWCxDQUFnQixxWkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2WTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic2luZ2xlLWNoYW5uZWwuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbm1haW5cbiAgc2VjdGlvbih2LWlmPVwiY2hhbm5lbFwiKVxuICAgIC5oZXJvLmlzLW1lZGl1bSg6c3R5bGU9XCJjaGFubmVsU3R5bGVcIilcbiAgICAgIC5oZXJvLWJvZHlcbiAgICAuaW5mb1xuICAgICAgLmNvbnRhaW5lclxuICAgICAgICAubWVkaWFcbiAgICAgICAgICAubWVkaWEtbGVmdFxuICAgICAgICAgICAgLmltYWdlLmxvZ29cbiAgICAgICAgICAgICAgc3Bhbi5sb2dvX193cmFwcGVyXG4gICAgICAgICAgICAgIGltZyg6c3JjPVwiY2hhbm5lbC50aHVtYm5haWxzLm1lZGl1bS51cmxcIiw6YWx0PVwiY2hhbm5lbC50aXRsZSArICcgY2hhbm5lbCBsb2dvJ1wiKVxuICAgICAgICAgIC5tZWRpYS1jb250ZW50XG4gICAgICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgICAudGl0bGUuaXMtMy5jaGFubmVsLXRpdGxlXG4gICAgICAgICAgICAgICAgc3Ryb25nIHt7IGNoYW5uZWwudGl0bGUgfX1cbiAgICAgICAgICAgICAgICA9ICcgJ1xuICAgICAgICAgICAgICAgIGEuZXh0LWxpbmsoOmhyZWY9XCJjaGFubmVsTGlua1wiLHRhcmdldD1cIl9ibGFua1wiLHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIilcbiAgICAgICAgICAgICAgICAgIHNwYW4uaWNvblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbihuYW1lPVwibGlua1wiKVxuICAgIG5hdi5uYXYuaGFzLXVuZGVybGluZVxuICAgICAgLmNvbnRhaW5lclxuICAgICAgICAubmF2LWNlbnRlclxuICAgICAgICAgIHJvdXRlci1saW5rLm5hdi1pdGVtLmlzLXRhYig6dG89XCJ7IG5hbWU6ICdjaGFubmVsLWFib3V0JyB9XCIpIEFib3V0XG4gICAgICAgICAgcm91dGVyLWxpbmsubmF2LWl0ZW0uaXMtdGFiKDp0bz1cInsgbmFtZTogJ2NoYW5uZWwtcmVjZW50LXZpZGVvcycgfVwiKSBVcGxvYWRzXG4gICAgcm91dGVyLXZpZXdcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3RvcmUgZnJvbSAnfnN0b3JlJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICd+Y29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5uZWw6IG51bGwsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2hhbm5lbFN0eWxlKCkge1xuICAgICAgaWYodGhpcy5jaGFubmVsLmltYWdlKSB7XG4gICAgICAgIHJldHVybiB7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5jaGFubmVsLmltYWdlLmJhbm5lclRhYmxldEltYWdlVXJsICsgJyknIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZENvbG9yOiB0aGlzLmNoYW5uZWwucHJvZmlsZUNvbG9yIH1cbiAgICB9LFxuICAgIGNoYW5uZWxMaW5rKCkge1xuICAgICAgcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsLyR7dGhpcy5jaGFubmVsLmlkfWBcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kUHJvZ3Jlc3Muc3RhcnQoKVxuICAgIHRoaXMubG9hZENoYW5uZWwoKVxuICB9LFxuICB3YXRjaDoge1xuICAgICRyb3V0ZSgpIHtcbiAgICAgIHRoaXMubG9hZENoYW5uZWwoKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRDaGFubmVsKCkge1xuICAgICAgc3RvcmUuZmV0Y2hDaGFubmVsKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkudGhlbihjaGFubmVsID0+IHtcbiAgICAgICAgdGhpcy5wYXJhbXMudGl0bGUgPSBjaGFubmVsLnRpdGxlXG4gICAgICAgIHRoaXMucGFyYW1zLmRlc2NyaXB0aW9uID0gYCR7Y2hhbm5lbC50aXRsZX0gdmlkZW9zYFxuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsXG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKClcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBoZWFkOiB7XG4gICAgdGl0bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbm5lcjogdGhpcy5wYXJhbXMudGl0bGUsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBjb21wbGVtZW50OiBjb25maWcuYXBwLm5hbWVcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGEoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7IGlkOiAnZGVzY3JpcHRpb24nLCBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiB0aGlzLnBhcmFtcy5kZXNjcmlwdGlvbiB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuJHRhYmxldDogNzY5cHhcblxuLmhlcm9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuXG4uaGVyby5pcy1tZWRpdW0gLmhlcm8tYm9keVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldClcbiAgICBwYWRkaW5nOiA5MHB4XG5cbi5pbmZvXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwXG4gIC5jb250YWluZXJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldClcbiAgICAgIGhlaWdodDogNjBweFxuXG4ubG9nb1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxuICB3aWR0aDogNjRweFxuICBoZWlnaHQ6IDY0cHhcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpXG4gICAgei1pbmRleDogMlxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmZcbiAgICB0b3A6IC0xNTBweFxuICAgIHdpZHRoOiAyMDBweFxuICAgIGhlaWdodDogMjAwcHhcbiAgICAvLyBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMSlcblxuICAmX193cmFwcGVyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuXG4gIGltZ1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcbiAgICBtYXgtaGVpZ2h0OiAxMDAlXG4gICAgbWF4LXdpZHRoOiAxMDAlXG5cbi5tZWRpYS1sZWZ0XG4gIG1hcmdpbi1yaWdodDogMjBweFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldClcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHhcblxuLmNoYW5uZWwtdGl0bGVcbiAgZGlzcGxheTogaW5saW5lLWZsZXhcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4uZXh0LWxpbmtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4XG4gID4gLmljb25cbiAgICBjb2xvcjogI2JiYmJiYlxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcbiAgICBmb250LXNpemU6IDI0cHhcbiAgICBtYXJnaW4tbGVmdDogMTBweFxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlcm9bZGF0YS12LTczNTQ3ZWEyXSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4uaGVyby5pcy1tZWRpdW0gLmhlcm8tYm9keVtkYXRhLXYtNzM1NDdlYTJdIHtcXG4gICAgcGFkZGluZzogOTBweDtcXG59XFxufVxcbi5pbmZvW2RhdGEtdi03MzU0N2VhMl0ge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbi5pbmZvIC5jb250YWluZXJbZGF0YS12LTczNTQ3ZWEyXSB7XFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG59XFxuLmxvZ29bZGF0YS12LTczNTQ3ZWEyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbi5sb2dvW2RhdGEtdi03MzU0N2VhMl0ge1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcXG4gICAgICB0b3A6IC0xNTBweDtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgaGVpZ2h0OiAyMDBweDtcXG59XFxufVxcbi5sb2dvX193cmFwcGVyW2RhdGEtdi03MzU0N2VhMl0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ28gaW1nW2RhdGEtdi03MzU0N2VhMl0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4ubWVkaWEtbGVmdFtkYXRhLXYtNzM1NDdlYTJdIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuLm1lZGlhLWxlZnRbZGF0YS12LTczNTQ3ZWEyXSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG59XFxuLmNoYW5uZWwtdGl0bGVbZGF0YS12LTczNTQ3ZWEyXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5leHQtbGlua1tkYXRhLXYtNzM1NDdlYTJdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG4uZXh0LWxpbmsgPiAuaWNvbltkYXRhLXYtNzM1NDdlYTJdIHtcXG4gICAgY29sb3I6ICNiYmJiYmI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzU0N2VhMiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/aW5kZW50ZWRTeW50YXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzM1NDdlYTImbGFuZz1zYXNzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzU0N2VhMiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbWFpbicsWyhfdm0uY2hhbm5lbCk/X2MoJ3NlY3Rpb24nLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZXJvIGlzLW1lZGl1bVwiLHN0eWxlOihfdm0uY2hhbm5lbFN0eWxlKX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlcm8tYm9keVwifSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJpbmZvXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1lZGlhXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtZWRpYS1sZWZ0XCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJpbWFnZSBsb2dvXCJ9LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwibG9nb19fd3JhcHBlclwifSksX2MoJ2ltZycse2F0dHJzOntcInNyY1wiOl92bS5jaGFubmVsLnRodW1ibmFpbHMubWVkaXVtLnVybCxcImFsdFwiOl92bS5jaGFubmVsLnRpdGxlICsgJyBjaGFubmVsIGxvZ28nfX0pXSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtZWRpYS1jb250ZW50XCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250ZW50XCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0aXRsZSBpcy0zIGNoYW5uZWwtdGl0bGVcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5jaGFubmVsLnRpdGxlKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdhJyx7c3RhdGljQ2xhc3M6XCJleHQtbGlua1wiLGF0dHJzOntcImhyZWZcIjpfdm0uY2hhbm5lbExpbmssXCJ0YXJnZXRcIjpcIl9ibGFua1wiLFwicmVsXCI6XCJub29wZW5lciBub3JlZmVycmVyXCJ9fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImljb25cIn0sW19jKCdpb24taWNvbicse2F0dHJzOntcIm5hbWVcIjpcImxpbmtcIn19KV0sMSldKV0pXSldKV0pXSldKSxfYygnbmF2Jyx7c3RhdGljQ2xhc3M6XCJuYXYgaGFzLXVuZGVybGluZVwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJuYXYtY2VudGVyXCJ9LFtfYygncm91dGVyLWxpbmsnLHtzdGF0aWNDbGFzczpcIm5hdi1pdGVtIGlzLXRhYlwiLGF0dHJzOntcInRvXCI6eyBuYW1lOiAnY2hhbm5lbC1hYm91dCcgfX19LFtfdm0uX3YoXCJBYm91dFwiKV0pLF9jKCdyb3V0ZXItbGluaycse3N0YXRpY0NsYXNzOlwibmF2LWl0ZW0gaXMtdGFiXCIsYXR0cnM6e1widG9cIjp7IG5hbWU6ICdjaGFubmVsLXJlY2VudC12aWRlb3MnIH19fSxbX3ZtLl92KFwiVXBsb2Fkc1wiKV0pXSwxKV0pXSksX2MoJ3JvdXRlci12aWV3JyldLDEpOl92bS5fZSgpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2luZ2xlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MzU0N2VhMiZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzU0N2VhMiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjczNTQ3ZWEyXCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/aW5kZW50ZWRTeW50YXghLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzM1NDdlYTImbGFuZz1zYXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpbmdsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzU0N2VhMiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2luZ2xlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MzU0N2VhMiZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiJdLCJzb3VyY2VSb290IjoiIn0=