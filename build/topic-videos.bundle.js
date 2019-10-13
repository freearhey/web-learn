(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topic-videos"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    show: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/videos.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/topics/videos.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~util */ "./src/util/index.js");
/* harmony import */ var _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/VideoList.vue */ "./src/components/VideoList.vue");
/* harmony import */ var _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/Spinner.vue */ "./src/components/Spinner.vue");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VideoList: _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Spinner: _components_Spinner_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      videos: [],
      loading: false,
      nextPage: null,
      limit: 20
    };
  },
  created: function created() {
    this.videos = [];
    this.nextPage = null;
    this.loadVideos();
  },
  watch: {
    $route: function $route() {
      this.videos = [];
      this.nextPage = null;
      this.loadVideos();
    }
  },
  methods: {
    loadVideos: function loadVideos() {
      var _this = this;

      this.loading = true;
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchTopic(this.$route.params.id).then(function (topic) {
        var params = {
          q: _util__WEBPACK_IMPORTED_MODULE_1__["default"].prepareQuery(topic),
          order: _this.$route.meta.order,
          maxResults: _this.limit,
          pageToken: _this.nextPage,
          videoCategoryId: 27 // Education

        };
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchVideos(params).then(function (result) {
          _this.loading = false;

          _this.$Progress.finish();

          if (!result.videos.length) {
            _this.nextPage = null;
            return;
          }

          _this.nextPage = result.nextPageToken;
          result.videos.forEach(function (video) {
            _this.videos.push(video);
          });
        })["catch"](function () {
          _this.loading = false;

          _this.$Progress.fail();
        });
      })["catch"](function () {
        _this.loading = false;

        _this.$Progress.fail();
      });
    },
    loadMore: function loadMore() {
      if (!this.nextPage) {
        return;
      }

      this.loadVideos();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".spinner__wrapper[data-v-54c7522e] {\n  margin-top: 40px;\n  height: 30px;\n}\n.spinner[data-v-54c7522e] {\n  animation: rotator-data-v-54c7522e 1.4s linear infinite;\n}\n@keyframes rotator-data-v-54c7522e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(270deg);\n}\n}\n.path[data-v-54c7522e] {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  stroke: #4a8bfa;\n  animation: dash-data-v-54c7522e 1.4s ease-in-out infinite;\n}\n@keyframes dash-data-v-54c7522e {\n0% {\n    stroke-dashoffset: 187;\n}\n50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){"use strict";return function(e,r,t){var n=r.prototype;t.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var o=function(e,r,n,o){for(var d,i,a=n.$locale().relativeTime,u=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=u.length,s=0;s<f;s+=1){var l=u[s];l.d&&(d=o?t(e).diff(n,l.d,!0):n.diff(e,l.d,!0));var m=Math.round(Math.abs(d));if(m<=l.r||!l.r){1===m&&s>0&&(l=u[s-1]),i=a[l.l].replace("%d",m);break}}return r?i:(d>0?a.future:a.past).replace("%s",i)};n.to=function(e,r){return o(e,r,this,!0)},n.from=function(e,r){return o(e,r,this)},n.toNow=function(e){return this.to(t(),e)},n.fromNow=function(e){return this.from(t(),e)}}});


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/videos.vue?vue&type=template&id=4cc32631&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/topics/videos.vue?vue&type=template&id=4cc32631&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.loadMore),expression:"loadMore"}],staticClass:"section",attrs:{"infinite-scroll-disabled":"loading"}},[_c('div',{staticClass:"container"},[_c('video-list',{attrs:{"videos":_vm.videos}}),_c('spinner',{attrs:{"show":_vm.loading}})],1)])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=template&id=54c7522e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=template&id=54c7522e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level spinner__wrapper"},[_c('div',{staticClass:"level-item has-text-centered"},[(_vm.show)?_c('svg',{staticClass:"spinner",attrs:{"width":"30px","height":"30px","viewBox":"0 0 66 66","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{staticClass:"path",attrs:{"fill":"none","stroke-width":"6","stroke-linecap":"round","cx":"33","cy":"33","r":"30"}})]):_vm._e()])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/youtube-duration-format/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/youtube-duration-format/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function parseDuration(PT, format) {
  var output = [];
  var durationInSec = 0;
  var matches = PT.match(/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)W)?(?:(\d*)D)?T?(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/i);
  var parts = [
    { // years
      pos: 1,
      multiplier: 86400 * 365
    },
    { // months
      pos: 2,
      multiplier: 86400 * 30
    },
    { // weeks
      pos: 3,
      multiplier: 604800
    },
    { // days
      pos: 4,
      multiplier: 86400
    },
    { // hours
      pos: 5,
      multiplier: 3600
    },
    { // minutes
      pos: 6,
      multiplier: 60
    },
    { // seconds
      pos: 7,
      multiplier: 1
    }
  ];

  for (var i = 0; i < parts.length; i++) {
    if (typeof matches[parts[i].pos] != 'undefined') {
      durationInSec += parseInt(matches[parts[i].pos]) * parts[i].multiplier;
    }
  }
  var totalSec = durationInSec;
  // Hours extraction
  if (durationInSec > 3599) {
    output.push(parseInt(durationInSec / 3600));
    durationInSec %= 3600;
  }
  // Minutes extraction with leading zero
  output.push(('0' + parseInt(durationInSec / 60)).slice(-2));
  // Seconds extraction with leading zero
  output.push(('0' + durationInSec % 60).slice(-2));
  if (format === undefined)
    return output.join(':');
  else if (format === 'sec')
    return totalSec;
};

module.exports = parseDuration;


/***/ }),

/***/ "./src/components/Spinner.vue":
/*!************************************!*\
  !*** ./src/components/Spinner.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner_vue_vue_type_template_id_54c7522e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner.vue?vue&type=template&id=54c7522e&scoped=true& */ "./src/components/Spinner.vue?vue&type=template&id=54c7522e&scoped=true&");
/* harmony import */ var _Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.vue?vue&type=script&lang=js& */ "./src/components/Spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true& */ "./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spinner_vue_vue_type_template_id_54c7522e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spinner_vue_vue_type_template_id_54c7522e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54c7522e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Spinner.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/Spinner.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=style&index=0&id=54c7522e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_id_54c7522e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Spinner.vue?vue&type=template&id=54c7522e&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/Spinner.vue?vue&type=template&id=54c7522e&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_54c7522e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=template&id=54c7522e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Spinner.vue?vue&type=template&id=54c7522e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_54c7522e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_54c7522e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/topics/videos.vue":
/*!*************************************!*\
  !*** ./src/pages/topics/videos.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videos_vue_vue_type_template_id_4cc32631_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos.vue?vue&type=template&id=4cc32631&lang=pug& */ "./src/pages/topics/videos.vue?vue&type=template&id=4cc32631&lang=pug&");
/* harmony import */ var _videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.vue?vue&type=script&lang=js& */ "./src/pages/topics/videos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videos_vue_vue_type_template_id_4cc32631_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videos_vue_vue_type_template_id_4cc32631_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/topics/videos.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/topics/videos.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./videos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/videos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/topics/videos.vue?vue&type=template&id=4cc32631&lang=pug&":
/*!*****************************************************************************!*\
  !*** ./src/pages/topics/videos.vue?vue&type=template&id=4cc32631&lang=pug& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_template_id_4cc32631_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./videos.vue?vue&type=template&id=4cc32631&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/topics/videos.vue?vue&type=template&id=4cc32631&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_template_id_4cc32631_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_template_id_4cc32631_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.map */ "./node_modules/lodash.map/index.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  prepareQuery: function prepareQuery(topics) {
    var query = '';

    if (topics.constructor === Array) {
      // get all topic titles
      var topicTitles = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(topics, 'title'); // transform array of topics to pipe string

      query = topicTitles.join('|'); // remove all dots

      query = query.replace(/\./g, ''); // remove all spaces
      // query = query.replace(/\s/g, '')
    } else if (topics.constructor === Object) {
      query = topics.title;
    }

    return '$1'.replace(/\$1/, query);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9wYWdlcy90b3BpY3MvdmlkZW9zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyLnZ1ZT80ZjE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIudnVlP2E0MmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RvcGljcy92aWRlb3MudnVlP2I5ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci52dWU/YzIxYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveW91dHViZS1kdXJhdGlvbi1mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci52dWU/MDNlMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyLnZ1ZT84NmYzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIudnVlPzgxOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RvcGljcy92aWRlb3MudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90b3BpY3MvdmlkZW9zLnZ1ZT8yMGYyIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90b3BpY3MvdmlkZW9zLnZ1ZT9mMGRhIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbInByZXBhcmVRdWVyeSIsInRvcGljcyIsInF1ZXJ5IiwiY29uc3RydWN0b3IiLCJBcnJheSIsInRvcGljVGl0bGVzIiwibWFwIiwiam9pbiIsInJlcGxhY2UiLCJPYmplY3QiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7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QUNuQixRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxRQUFHRCxNQUFNLENBQUNFLFdBQVAsS0FBdUJDLEtBQTFCLEVBQWlDO0FBQy9CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHQyxpREFBRyxDQUFDTCxNQUFELEVBQVMsT0FBVCxDQUF2QixDQUYrQixDQUcvQjs7QUFDQUMsV0FBSyxHQUFHRyxXQUFXLENBQUNFLElBQVosQ0FBaUIsR0FBakIsQ0FBUixDQUorQixDQUsvQjs7QUFDQUwsV0FBSyxHQUFHQSxLQUFLLENBQUNNLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEVBQXJCLENBQVIsQ0FOK0IsQ0FPL0I7QUFDQTtBQUNELEtBVEQsTUFTTyxJQUFHUCxNQUFNLENBQUNFLFdBQVAsS0FBdUJNLE1BQTFCLEVBQWtDO0FBQ3ZDUCxXQUFLLEdBQUdELE1BQU0sQ0FBQ1MsS0FBZjtBQUNEOztBQUVELFdBQU8sS0FBS0YsT0FBTCxDQUFhLEtBQWIsRUFBb0JOLEtBQXBCLENBQVA7QUFDRDtBQWxCWSxDQUFmLEUiLCJmaWxlIjoidG9waWMtdmlkZW9zLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJsZXZlbCBzcGlubmVyX193cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgPHN2ZyBjbGFzcz1cInNwaW5uZXJcIiB2LWlmPVwic2hvd1wiIHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjMwcHhcIiB2aWV3Qm94PVwiMCAwIDY2IDY2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgIDxjaXJjbGUgY2xhc3M9XCJwYXRoXCIgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGN4PVwiMzNcIiBjeT1cIjMzXCIgcj1cIjMwXCI+PC9jaXJjbGU+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiRvZmZzZXQ6IDE4NztcbiRkdXJhdGlvbjogMS40cztcblxuLnNwaW5uZXJfX3dyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zcGlubmVyIHtcbiAgYW5pbWF0aW9uOiByb3RhdG9yICRkdXJhdGlvbiBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRvciB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbn1cblxuLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAkb2Zmc2V0O1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBzdHJva2U6ICM0YThiZmE7XG4gIGFuaW1hdGlvbjpcbiAgICBkYXNoICRkdXJhdGlvbiBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAwJSB7IHN0cm9rZS1kYXNob2Zmc2V0OiAkb2Zmc2V0OyB9XG4gNTAlIHtcbiAgIHN0cm9rZS1kYXNob2Zmc2V0OiAkb2Zmc2V0LzQ7XG4gICB0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7XG4gfVxuIDEwMCUge1xuICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRvZmZzZXQ7XG4gICB0cmFuc2Zvcm06cm90YXRlKDQ1MGRlZyk7XG4gfVxufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuc2VjdGlvbi5zZWN0aW9uKHYtaW5maW5pdGUtc2Nyb2xsPVwibG9hZE1vcmVcIixpbmZpbml0ZS1zY3JvbGwtZGlzYWJsZWQ9XCJsb2FkaW5nXCIpXG4gIC5jb250YWluZXJcbiAgICB2aWRlby1saXN0KDp2aWRlb3M9XCJ2aWRlb3NcIilcbiAgICBzcGlubmVyKDpzaG93PVwibG9hZGluZ1wiKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdG9yZSBmcm9tICd+c3RvcmUnXG5pbXBvcnQgdXRpbCBmcm9tICd+dXRpbCdcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnfmNvbXBvbmVudHMvVmlkZW9MaXN0LnZ1ZSdcbmltcG9ydCBTcGlubmVyIGZyb20gJ35jb21wb25lbnRzL1NwaW5uZXIudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBWaWRlb0xpc3QsXG4gICAgU3Bpbm5lclxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWRlb3M6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBuZXh0UGFnZTogbnVsbCxcbiAgICAgIGxpbWl0OiAyMFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnZpZGVvcyA9IFtdXG4gICAgdGhpcy5uZXh0UGFnZSA9IG51bGxcbiAgICB0aGlzLmxvYWRWaWRlb3MoKVxuICB9LFxuICB3YXRjaDoge1xuICAgICRyb3V0ZSgpIHtcbiAgICAgIHRoaXMudmlkZW9zID0gW11cbiAgICAgIHRoaXMubmV4dFBhZ2UgPSBudWxsXG4gICAgICB0aGlzLmxvYWRWaWRlb3MoKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRWaWRlb3MoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG5cbiAgICAgIHN0b3JlLmZldGNoVG9waWModGhpcy4kcm91dGUucGFyYW1zLmlkKS50aGVuKHRvcGljID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgIHE6IHV0aWwucHJlcGFyZVF1ZXJ5KHRvcGljKSxcbiAgICAgICAgICBvcmRlcjogdGhpcy4kcm91dGUubWV0YS5vcmRlcixcbiAgICAgICAgICBtYXhSZXN1bHRzOiB0aGlzLmxpbWl0LFxuICAgICAgICAgIHBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZSxcbiAgICAgICAgICB2aWRlb0NhdGVnb3J5SWQ6IDI3IC8vIEVkdWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmUuZmV0Y2hWaWRlb3MocGFyYW1zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKVxuICAgICAgICAgIGlmKCFyZXN1bHQudmlkZW9zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSA9IG51bGxcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm5leHRQYWdlID0gcmVzdWx0Lm5leHRQYWdlVG9rZW5cbiAgICAgICAgICByZXN1bHQudmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xuICAgICAgICAgICAgdGhpcy52aWRlb3MucHVzaCh2aWRlbylcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKClcbiAgICAgICAgfSlcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmFpbCgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgbG9hZE1vcmUoKSB7XG4gICAgICBpZighdGhpcy5uZXh0UGFnZSkgeyByZXR1cm4gfVxuICAgICAgdGhpcy5sb2FkVmlkZW9zKClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwaW5uZXJfX3dyYXBwZXJbZGF0YS12LTU0Yzc1MjJlXSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uc3Bpbm5lcltkYXRhLXYtNTRjNzUyMmVdIHtcXG4gIGFuaW1hdGlvbjogcm90YXRvci1kYXRhLXYtNTRjNzUyMmUgMS40cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRvci1kYXRhLXYtNTRjNzUyMmUge1xcbjAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG59XFxuLnBhdGhbZGF0YS12LTU0Yzc1MjJlXSB7XFxuICBzdHJva2UtZGFzaGFycmF5OiAxODc7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gIHN0cm9rZTogIzRhOGJmYTtcXG4gIGFuaW1hdGlvbjogZGFzaC1kYXRhLXYtNTRjNzUyMmUgMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuQGtleWZyYW1lcyBkYXNoLWRhdGEtdi01NGM3NTIyZSB7XFxuMCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTg3O1xcbn1cXG41MCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDYuNzU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufVxcbjEwMCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTg3O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xcbn1cXG59XFxuXCIsIFwiXCJdKTtcbiIsIiFmdW5jdGlvbihlLHIpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHIpOmUuZGF5anNfcGx1Z2luX3JlbGF0aXZlVGltZT1yKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24oZSxyLHQpe3ZhciBuPXIucHJvdG90eXBlO3QuZW4ucmVsYXRpdmVUaW1lPXtmdXR1cmU6XCJpbiAlc1wiLHBhc3Q6XCIlcyBhZ29cIixzOlwiYSBmZXcgc2Vjb25kc1wiLG06XCJhIG1pbnV0ZVwiLG1tOlwiJWQgbWludXRlc1wiLGg6XCJhbiBob3VyXCIsaGg6XCIlZCBob3Vyc1wiLGQ6XCJhIGRheVwiLGRkOlwiJWQgZGF5c1wiLE06XCJhIG1vbnRoXCIsTU06XCIlZCBtb250aHNcIix5OlwiYSB5ZWFyXCIseXk6XCIlZCB5ZWFyc1wifTt2YXIgbz1mdW5jdGlvbihlLHIsbixvKXtmb3IodmFyIGQsaSxhPW4uJGxvY2FsZSgpLnJlbGF0aXZlVGltZSx1PVt7bDpcInNcIixyOjQ0LGQ6XCJzZWNvbmRcIn0se2w6XCJtXCIscjo4OX0se2w6XCJtbVwiLHI6NDQsZDpcIm1pbnV0ZVwifSx7bDpcImhcIixyOjg5fSx7bDpcImhoXCIscjoyMSxkOlwiaG91clwifSx7bDpcImRcIixyOjM1fSx7bDpcImRkXCIscjoyNSxkOlwiZGF5XCJ9LHtsOlwiTVwiLHI6NDV9LHtsOlwiTU1cIixyOjEwLGQ6XCJtb250aFwifSx7bDpcInlcIixyOjE3fSx7bDpcInl5XCIsZDpcInllYXJcIn1dLGY9dS5sZW5ndGgscz0wO3M8ZjtzKz0xKXt2YXIgbD11W3NdO2wuZCYmKGQ9bz90KGUpLmRpZmYobixsLmQsITApOm4uZGlmZihlLGwuZCwhMCkpO3ZhciBtPU1hdGgucm91bmQoTWF0aC5hYnMoZCkpO2lmKG08PWwucnx8IWwucil7MT09PW0mJnM+MCYmKGw9dVtzLTFdKSxpPWFbbC5sXS5yZXBsYWNlKFwiJWRcIixtKTticmVha319cmV0dXJuIHI/aTooZD4wP2EuZnV0dXJlOmEucGFzdCkucmVwbGFjZShcIiVzXCIsaSl9O24udG89ZnVuY3Rpb24oZSxyKXtyZXR1cm4gbyhlLHIsdGhpcywhMCl9LG4uZnJvbT1mdW5jdGlvbihlLHIpe3JldHVybiBvKGUscix0aGlzKX0sbi50b05vdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50byh0KCksZSl9LG4uZnJvbU5vdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5mcm9tKHQoKSxlKX19fSk7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTRjNzUyMmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Bpbm5lci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NGM3NTIyZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Bpbm5lci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NGM3NTIyZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicse2RpcmVjdGl2ZXM6W3tuYW1lOlwiaW5maW5pdGUtc2Nyb2xsXCIscmF3TmFtZTpcInYtaW5maW5pdGUtc2Nyb2xsXCIsdmFsdWU6KF92bS5sb2FkTW9yZSksZXhwcmVzc2lvbjpcImxvYWRNb3JlXCJ9XSxzdGF0aWNDbGFzczpcInNlY3Rpb25cIixhdHRyczp7XCJpbmZpbml0ZS1zY3JvbGwtZGlzYWJsZWRcIjpcImxvYWRpbmdcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCd2aWRlby1saXN0Jyx7YXR0cnM6e1widmlkZW9zXCI6X3ZtLnZpZGVvc319KSxfYygnc3Bpbm5lcicse2F0dHJzOntcInNob3dcIjpfdm0ubG9hZGluZ319KV0sMSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibGV2ZWwgc3Bpbm5lcl9fd3JhcHBlclwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZFwifSxbKF92bS5zaG93KT9fYygnc3ZnJyx7c3RhdGljQ2xhc3M6XCJzcGlubmVyXCIsYXR0cnM6e1wid2lkdGhcIjpcIjMwcHhcIixcImhlaWdodFwiOlwiMzBweFwiLFwidmlld0JveFwiOlwiMCAwIDY2IDY2XCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygnY2lyY2xlJyx7c3RhdGljQ2xhc3M6XCJwYXRoXCIsYXR0cnM6e1wiZmlsbFwiOlwibm9uZVwiLFwic3Ryb2tlLXdpZHRoXCI6XCI2XCIsXCJzdHJva2UtbGluZWNhcFwiOlwicm91bmRcIixcImN4XCI6XCIzM1wiLFwiY3lcIjpcIjMzXCIsXCJyXCI6XCIzMFwifX0pXSk6X3ZtLl9lKCldKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oUFQsIGZvcm1hdCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBkdXJhdGlvbkluU2VjID0gMDtcbiAgdmFyIG1hdGNoZXMgPSBQVC5tYXRjaCgvUCg/OihcXGQqKVkpPyg/OihcXGQqKU0pPyg/OihcXGQqKVcpPyg/OihcXGQqKUQpP1Q/KD86KFxcZCopSCk/KD86KFxcZCopTSk/KD86KFxcZCopUyk/L2kpO1xuICB2YXIgcGFydHMgPSBbXG4gICAgeyAvLyB5ZWFyc1xuICAgICAgcG9zOiAxLFxuICAgICAgbXVsdGlwbGllcjogODY0MDAgKiAzNjVcbiAgICB9LFxuICAgIHsgLy8gbW9udGhzXG4gICAgICBwb3M6IDIsXG4gICAgICBtdWx0aXBsaWVyOiA4NjQwMCAqIDMwXG4gICAgfSxcbiAgICB7IC8vIHdlZWtzXG4gICAgICBwb3M6IDMsXG4gICAgICBtdWx0aXBsaWVyOiA2MDQ4MDBcbiAgICB9LFxuICAgIHsgLy8gZGF5c1xuICAgICAgcG9zOiA0LFxuICAgICAgbXVsdGlwbGllcjogODY0MDBcbiAgICB9LFxuICAgIHsgLy8gaG91cnNcbiAgICAgIHBvczogNSxcbiAgICAgIG11bHRpcGxpZXI6IDM2MDBcbiAgICB9LFxuICAgIHsgLy8gbWludXRlc1xuICAgICAgcG9zOiA2LFxuICAgICAgbXVsdGlwbGllcjogNjBcbiAgICB9LFxuICAgIHsgLy8gc2Vjb25kc1xuICAgICAgcG9zOiA3LFxuICAgICAgbXVsdGlwbGllcjogMVxuICAgIH1cbiAgXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBtYXRjaGVzW3BhcnRzW2ldLnBvc10gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGR1cmF0aW9uSW5TZWMgKz0gcGFyc2VJbnQobWF0Y2hlc1twYXJ0c1tpXS5wb3NdKSAqIHBhcnRzW2ldLm11bHRpcGxpZXI7XG4gICAgfVxuICB9XG4gIHZhciB0b3RhbFNlYyA9IGR1cmF0aW9uSW5TZWM7XG4gIC8vIEhvdXJzIGV4dHJhY3Rpb25cbiAgaWYgKGR1cmF0aW9uSW5TZWMgPiAzNTk5KSB7XG4gICAgb3V0cHV0LnB1c2gocGFyc2VJbnQoZHVyYXRpb25JblNlYyAvIDM2MDApKTtcbiAgICBkdXJhdGlvbkluU2VjICU9IDM2MDA7XG4gIH1cbiAgLy8gTWludXRlcyBleHRyYWN0aW9uIHdpdGggbGVhZGluZyB6ZXJvXG4gIG91dHB1dC5wdXNoKCgnMCcgKyBwYXJzZUludChkdXJhdGlvbkluU2VjIC8gNjApKS5zbGljZSgtMikpO1xuICAvLyBTZWNvbmRzIGV4dHJhY3Rpb24gd2l0aCBsZWFkaW5nIHplcm9cbiAgb3V0cHV0LnB1c2goKCcwJyArIGR1cmF0aW9uSW5TZWMgJSA2MCkuc2xpY2UoLTIpKTtcbiAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBvdXRwdXQuam9pbignOicpO1xuICBlbHNlIGlmIChmb3JtYXQgPT09ICdzZWMnKVxuICAgIHJldHVybiB0b3RhbFNlYztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VEdXJhdGlvbjtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3Bpbm5lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTRjNzUyMmUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3Bpbm5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTRjNzUyMmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NGM3NTIyZVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcGlubmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcGlubmVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0Yzc1MjJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcGlubmVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0Yzc1MjJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcGlubmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NGM3NTIyZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdmlkZW9zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Y2MzMjYzMSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Y2MzMjYzMSZsYW5nPXB1ZyZcIiIsImltcG9ydCBtYXAgZnJvbSAnbG9kYXNoLm1hcCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVwYXJlUXVlcnkodG9waWNzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJydcblxuICAgIGlmKHRvcGljcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgIC8vIGdldCBhbGwgdG9waWMgdGl0bGVzXG4gICAgICBjb25zdCB0b3BpY1RpdGxlcyA9IG1hcCh0b3BpY3MsICd0aXRsZScpXG4gICAgICAvLyB0cmFuc2Zvcm0gYXJyYXkgb2YgdG9waWNzIHRvIHBpcGUgc3RyaW5nXG4gICAgICBxdWVyeSA9IHRvcGljVGl0bGVzLmpvaW4oJ3wnKVxuICAgICAgLy8gcmVtb3ZlIGFsbCBkb3RzXG4gICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcLi9nLCAnJylcbiAgICAgIC8vIHJlbW92ZSBhbGwgc3BhY2VzXG4gICAgICAvLyBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICB9IGVsc2UgaWYodG9waWNzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIHF1ZXJ5ID0gdG9waWNzLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuICckMScucmVwbGFjZSgvXFwkMS8sIHF1ZXJ5KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9