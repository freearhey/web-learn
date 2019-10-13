(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~config */ "./src/weblearn.config.js");
/* harmony import */ var _pages_videos_recommended_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~pages/videos/recommended.vue */ "./src/pages/videos/recommended.vue");
/* harmony import */ var _pages_videos_popular_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~pages/videos/popular.vue */ "./src/pages/videos/popular.vue");
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'recommended-videos': _pages_videos_recommended_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'popular-videos': _pages_videos_popular_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  head: {
    title: function title() {
      return {
        inner: _config__WEBPACK_IMPORTED_MODULE_0__["default"].app.name,
        separator: ' '
      };
    },
    meta: function meta() {
      return [{
        id: 'description',
        name: 'description',
        content: _config__WEBPACK_IMPORTED_MODULE_0__["default"].app.description
      }];
    }
  },
  created: function created() {
    this.$Progress.start();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/popular.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/videos/popular.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~util */ "./src/util/index.js");
/* harmony import */ var _api_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~api/filters */ "./src/api/filters/index.js");
/* harmony import */ var _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/VideoList.vue */ "./src/components/VideoList.vue");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VideoList: _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      videos: [],
      limit: 16,
      loaded: false
    };
  },
  created: function created() {
    this.loadVideos();
  },
  methods: {
    loadVideos: function loadVideos() {
      var _this = this;

      this.loaded = false;
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchTopics().then(function (topics) {
        var params = {
          q: _util__WEBPACK_IMPORTED_MODULE_1__["default"].prepareQuery(topics),
          videoCategoryId: 27,
          order: _api_filters__WEBPACK_IMPORTED_MODULE_2__["default"].order[0].value,
          maxResults: _this.limit,
          publishedAfter: _api_filters__WEBPACK_IMPORTED_MODULE_2__["default"].timeframe[2].value
        };
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchVideos(params).then(function (result) {
          _this.videos = result.videos;

          _this.$Progress.finish();

          _this.loaded = true;
        })["catch"](function () {
          _this.$Progress.fail();
        });
      })["catch"](function () {
        _this.$Progress.fail();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/recommended.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/videos/recommended.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~util */ "./src/util/index.js");
/* harmony import */ var _api_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~api/filters */ "./src/api/filters/index.js");
/* harmony import */ var _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/VideoList.vue */ "./src/components/VideoList.vue");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VideoList: _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      videos: [],
      limit: 12,
      loaded: false
    };
  },
  created: function created() {
    this.loadVideos();
  },
  methods: {
    loadVideos: function loadVideos() {
      var _this = this;

      this.loaded = false;
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchTopics().then(function (topics) {
        var params = {
          q: _util__WEBPACK_IMPORTED_MODULE_1__["default"].prepareQuery(topics),
          videoCategoryId: 27,
          order: _api_filters__WEBPACK_IMPORTED_MODULE_2__["default"].order[3].value,
          maxResults: _this.limit,
          publishedAfter: _api_filters__WEBPACK_IMPORTED_MODULE_2__["default"].timeframe[3].value
        };
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchVideos(params).then(function (result) {
          _this.videos = result.videos;

          _this.$Progress.finish();

          _this.loaded = true;
        })["catch"](function () {
          _this.$Progress.fail();
        });
      })["catch"](function () {
        _this.$Progress.fail();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "main[data-v-35e1361f] {\n  min-height: 100vh;\n  margin-top: 110px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){"use strict";return function(e,r,t){var n=r.prototype;t.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var o=function(e,r,n,o){for(var d,i,a=n.$locale().relativeTime,u=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=u.length,s=0;s<f;s+=1){var l=u[s];l.d&&(d=o?t(e).diff(n,l.d,!0):n.diff(e,l.d,!0));var m=Math.round(Math.abs(d));if(m<=l.r||!l.r){1===m&&s>0&&(l=u[s-1]),i=a[l.l].replace("%d",m);break}}return r?i:(d>0?a.future:a.past).replace("%s",i)};n.to=function(e,r){return o(e,r,this,!0)},n.from=function(e,r){return o(e,r,this)},n.toNow=function(e){return this.to(t(),e)},n.fromNow=function(e){return this.from(t(),e)}}});


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_c("recommended-videos",{tag:"component"}),_c('hr'),_c("popular-videos",{tag:"component"})],1)}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/popular.vue?vue&type=template&id=f992fa6a&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/videos/popular.vue?vue&type=template&id=f992fa6a&lang=pug& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_vm._m(0),_c('video-list',{attrs:{"videos":_vm.videos}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"title is-5"},[_c('strong',[_vm._v("Trending")])])}]



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/recommended.vue?vue&type=template&id=1d2db8fd&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/videos/recommended.vue?vue&type=template&id=1d2db8fd&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_vm._m(0),_c('video-list',{attrs:{"videos":_vm.videos}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"title is-5"},[_c('strong',[_vm._v("Recommended")])])}]



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

/***/ "./src/api/filters/index.js":
/*!**********************************!*\
  !*** ./src/api/filters/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/api/filters/order.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ "./src/api/filters/language.js");
/* harmony import */ var _timeframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeframe */ "./src/api/filters/timeframe.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  order: _order__WEBPACK_IMPORTED_MODULE_0__["default"],
  language: _language__WEBPACK_IMPORTED_MODULE_1__["default"],
  timeframe: _timeframe__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/api/filters/language.js":
/*!*************************************!*\
  !*** ./src/api/filters/language.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Czech',
  value: 'cs'
}, {
  title: 'English',
  value: 'en'
}, {
  title: 'French',
  value: 'fr'
}, {
  title: 'Hebrew',
  value: 'he'
}, {
  title: 'Polish',
  value: 'pl'
}, {
  title: 'Portuguese',
  value: 'pt'
}, {
  title: 'Russian',
  value: 'ru'
}]);

/***/ }),

/***/ "./src/api/filters/order.js":
/*!**********************************!*\
  !*** ./src/api/filters/order.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'By views',
  value: 'viewCount',
  field: 'viewCount'
}, {
  title: 'By rating',
  value: 'rating',
  field: 'rating'
}, {
  title: 'By date',
  value: 'date',
  field: 'publishedAt'
}, {
  title: 'By relevance',
  value: 'relevance',
  field: 'viewCount'
}]);

/***/ }),

/***/ "./src/api/filters/timeframe.js":
/*!**************************************!*\
  !*** ./src/api/filters/timeframe.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'All Time',
  value: ''
}, {
  title: 'Today',
  value: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'days').toISOString()
}, {
  title: 'This Week',
  value: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, 'days').toISOString()
}, {
  title: 'This Month',
  value: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(30, 'days').toISOString()
}, {
  title: 'This Year',
  value: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(365, 'days').toISOString()
}]);

/***/ }),

/***/ "./src/pages/index.vue":
/*!*****************************!*\
  !*** ./src/pages/index.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_35e1361f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug& */ "./src/pages/index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true& */ "./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_35e1361f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_35e1361f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35e1361f",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/index.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/pages/index.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=style&index=0&id=35e1361f&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35e1361f_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug&":
/*!*********************************************************************************!*\
  !*** ./src/pages/index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_35e1361f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index.vue?vue&type=template&id=35e1361f&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_35e1361f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_35e1361f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/videos/popular.vue":
/*!**************************************!*\
  !*** ./src/pages/videos/popular.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popular_vue_vue_type_template_id_f992fa6a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popular.vue?vue&type=template&id=f992fa6a&lang=pug& */ "./src/pages/videos/popular.vue?vue&type=template&id=f992fa6a&lang=pug&");
/* harmony import */ var _popular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popular.vue?vue&type=script&lang=js& */ "./src/pages/videos/popular.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _popular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popular_vue_vue_type_template_id_f992fa6a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popular_vue_vue_type_template_id_f992fa6a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/videos/popular.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/videos/popular.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./popular.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/popular.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/videos/popular.vue?vue&type=template&id=f992fa6a&lang=pug&":
/*!******************************************************************************!*\
  !*** ./src/pages/videos/popular.vue?vue&type=template&id=f992fa6a&lang=pug& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popular_vue_vue_type_template_id_f992fa6a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./popular.vue?vue&type=template&id=f992fa6a&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/popular.vue?vue&type=template&id=f992fa6a&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popular_vue_vue_type_template_id_f992fa6a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popular_vue_vue_type_template_id_f992fa6a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/videos/recommended.vue":
/*!******************************************!*\
  !*** ./src/pages/videos/recommended.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recommended_vue_vue_type_template_id_1d2db8fd_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommended.vue?vue&type=template&id=1d2db8fd&lang=pug& */ "./src/pages/videos/recommended.vue?vue&type=template&id=1d2db8fd&lang=pug&");
/* harmony import */ var _recommended_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommended.vue?vue&type=script&lang=js& */ "./src/pages/videos/recommended.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recommended_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recommended_vue_vue_type_template_id_1d2db8fd_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recommended_vue_vue_type_template_id_1d2db8fd_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/videos/recommended.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/pages/videos/recommended.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommended_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./recommended.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/recommended.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommended_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/videos/recommended.vue?vue&type=template&id=1d2db8fd&lang=pug&":
/*!**********************************************************************************!*\
  !*** ./src/pages/videos/recommended.vue?vue&type=template&id=1d2db8fd&lang=pug& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommended_vue_vue_type_template_id_1d2db8fd_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./recommended.vue?vue&type=template&id=1d2db8fd&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/recommended.vue?vue&type=template&id=1d2db8fd&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommended_vue_vue_type_template_id_1d2db8fd_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommended_vue_vue_type_template_id_1d2db8fd_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL3ZpZGVvcy9wb3B1bGFyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL3ZpZGVvcy9yZWNvbW1lbmRlZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnZ1ZT9kNDdjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC52dWU/ZjYwYSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudnVlP2E5MWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ZpZGVvcy9wb3B1bGFyLnZ1ZT8zZDBmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy92aWRlb3MvcmVjb21tZW5kZWQudnVlP2UxOTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtZHVyYXRpb24tZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZmlsdGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2ZpbHRlcnMvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9maWx0ZXJzL29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZmlsdGVycy90aW1lZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudnVlPzEyODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnZ1ZT8xNjRlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC52dWU/OTkxZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdmlkZW9zL3BvcHVsYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy92aWRlb3MvcG9wdWxhci52dWU/MjMzNyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdmlkZW9zL3BvcHVsYXIudnVlPzVkNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ZpZGVvcy9yZWNvbW1lbmRlZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ZpZGVvcy9yZWNvbW1lbmRlZC52dWU/M2VhOSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdmlkZW9zL3JlY29tbWVuZGVkLnZ1ZT84ZTgyIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibGFuZ3VhZ2UiLCJ0aW1lZnJhbWUiLCJ0aXRsZSIsInZhbHVlIiwiZmllbGQiLCJkYXlqcyIsInN1YnRyYWN0IiwidG9JU09TdHJpbmciLCJwcmVwYXJlUXVlcnkiLCJ0b3BpY3MiLCJxdWVyeSIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJ0b3BpY1RpdGxlcyIsIm1hcCIsImpvaW4iLCJyZXBsYWNlIiwiT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsK0ZBREE7QUFFQTtBQUZBLEdBREE7QUFLQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLHVFQURBO0FBRUE7QUFGQTtBQUlBLEtBTkE7QUFPQSxRQVBBLGtCQU9BO0FBQ0EsY0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREE7QUFHQTtBQVhBLEdBTEE7QUFrQkEsU0FsQkEscUJBa0JBO0FBQ0E7QUFDQTtBQXBCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGVBRkE7QUFHQTtBQUhBO0FBS0EsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFDQTtBQUNBLEdBYkE7QUFjQTtBQUNBLGNBREEsd0JBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFEQTtBQUVBLDZC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QixFQUFrQztBQUN2Q1AsV0FBSyxHQUFHRCxNQUFNLENBQUNQLEtBQWY7QUFDRDs7QUFFRCxXQUFPLEtBQUtjLE9BQUwsQ0FBYSxLQUFiLEVBQW9CTixLQUFwQixDQUFQO0FBQ0Q7QUFsQlksQ0FBZixFIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG5tYWluXG4gIGNvbXBvbmVudChpcz1cInJlY29tbWVuZGVkLXZpZGVvc1wiKVxuICBoclxuICBjb21wb25lbnQoaXM9XCJwb3B1bGFyLXZpZGVvc1wiKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBjb25maWcgZnJvbSAnfmNvbmZpZydcbmltcG9ydCByZWNvbW1lbmRlZFZpZGVvcyBmcm9tICd+cGFnZXMvdmlkZW9zL3JlY29tbWVuZGVkLnZ1ZSdcbmltcG9ydCBwb3B1bGFyVmlkZW9zIGZyb20gJ35wYWdlcy92aWRlb3MvcG9wdWxhci52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgICdyZWNvbW1lbmRlZC12aWRlb3MnOiByZWNvbW1lbmRlZFZpZGVvcyxcbiAgICAncG9wdWxhci12aWRlb3MnOiBwb3B1bGFyVmlkZW9zXG4gIH0sXG4gIGhlYWQ6IHtcbiAgICB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlubmVyOiBjb25maWcuYXBwLm5hbWUsXG4gICAgICAgIHNlcGFyYXRvcjogJyAnXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgeyBpZDogJ2Rlc2NyaXB0aW9uJywgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogY29uZmlnLmFwcC5kZXNjcmlwdGlvbiB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJFByb2dyZXNzLnN0YXJ0KClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiIHNjb3BlZD5cbm1haW5cbiAgbWluLWhlaWdodDogMTAwdmhcbiAgbWFyZ2luLXRvcDogMTEwcHhcbjwvc3R5bGU+IiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbnNlY3Rpb24uc2VjdGlvblxuICAuY29udGFpbmVyXG4gICAgaDIudGl0bGUuaXMtNSAjW3N0cm9uZyBUcmVuZGluZ11cbiAgICB2aWRlby1saXN0KDp2aWRlb3M9XCJ2aWRlb3NcIilcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3RvcmUgZnJvbSAnfnN0b3JlJ1xuaW1wb3J0IHV0aWwgZnJvbSAnfnV0aWwnXG5pbXBvcnQgZmlsdGVycyBmcm9tICd+YXBpL2ZpbHRlcnMnXG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJ35jb21wb25lbnRzL1ZpZGVvTGlzdC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFZpZGVvTGlzdFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWRlb3M6IFtdLFxuICAgICAgbGltaXQ6IDE2LFxuICAgICAgbG9hZGVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxvYWRWaWRlb3MoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbG9hZFZpZGVvcygpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gZmFsc2VcbiAgICAgIHN0b3JlLmZldGNoVG9waWNzKCkudGhlbih0b3BpY3MgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgcTogdXRpbC5wcmVwYXJlUXVlcnkodG9waWNzKSxcbiAgICAgICAgICB2aWRlb0NhdGVnb3J5SWQ6IDI3LFxuICAgICAgICAgIG9yZGVyOiBmaWx0ZXJzLm9yZGVyWzBdLnZhbHVlLFxuICAgICAgICAgIG1heFJlc3VsdHM6IHRoaXMubGltaXQsXG4gICAgICAgICAgcHVibGlzaGVkQWZ0ZXI6IGZpbHRlcnMudGltZWZyYW1lWzJdLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZS5mZXRjaFZpZGVvcyhwYXJhbXMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGlzLnZpZGVvcyA9IHJlc3VsdC52aWRlb3NcbiAgICAgICAgICB0aGlzLiRQcm9ncmVzcy5maW5pc2goKVxuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmFpbCgpXG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJFByb2dyZXNzLmZhaWwoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG5zZWN0aW9uLnNlY3Rpb25cbiAgLmNvbnRhaW5lclxuICAgIGgyLnRpdGxlLmlzLTUgI1tzdHJvbmcgUmVjb21tZW5kZWRdXG4gICAgdmlkZW8tbGlzdCg6dmlkZW9zPVwidmlkZW9zXCIpXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHN0b3JlIGZyb20gJ35zdG9yZSdcbmltcG9ydCB1dGlsIGZyb20gJ351dGlsJ1xuaW1wb3J0IGZpbHRlcnMgZnJvbSAnfmFwaS9maWx0ZXJzJ1xuaW1wb3J0IFZpZGVvTGlzdCBmcm9tICd+Y29tcG9uZW50cy9WaWRlb0xpc3QudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBWaWRlb0xpc3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlkZW9zOiBbXSxcbiAgICAgIGxpbWl0OiAxMixcbiAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5sb2FkVmlkZW9zKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRWaWRlb3MoKSB7XG4gICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlXG4gICAgICBzdG9yZS5mZXRjaFRvcGljcygpLnRoZW4odG9waWNzID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgIHE6IHV0aWwucHJlcGFyZVF1ZXJ5KHRvcGljcyksXG4gICAgICAgICAgdmlkZW9DYXRlZ29yeUlkOiAyNyxcbiAgICAgICAgICBvcmRlcjogZmlsdGVycy5vcmRlclszXS52YWx1ZSxcbiAgICAgICAgICBtYXhSZXN1bHRzOiB0aGlzLmxpbWl0LFxuICAgICAgICAgIHB1Ymxpc2hlZEFmdGVyOiBmaWx0ZXJzLnRpbWVmcmFtZVszXS52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmUuZmV0Y2hWaWRlb3MocGFyYW1zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy52aWRlb3MgPSByZXN1bHQudmlkZW9zXG4gICAgICAgICAgdGhpcy4kUHJvZ3Jlc3MuZmluaXNoKClcbiAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJFByb2dyZXNzLmZhaWwoKVxuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLiRQcm9ncmVzcy5mYWlsKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm1haW5bZGF0YS12LTM1ZTEzNjFmXSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbi10b3A6IDExMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiIWZ1bmN0aW9uKGUscil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9cigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUocik6ZS5kYXlqc19wbHVnaW5fcmVsYXRpdmVUaW1lPXIoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihlLHIsdCl7dmFyIG49ci5wcm90b3R5cGU7dC5lbi5yZWxhdGl2ZVRpbWU9e2Z1dHVyZTpcImluICVzXCIscGFzdDpcIiVzIGFnb1wiLHM6XCJhIGZldyBzZWNvbmRzXCIsbTpcImEgbWludXRlXCIsbW06XCIlZCBtaW51dGVzXCIsaDpcImFuIGhvdXJcIixoaDpcIiVkIGhvdXJzXCIsZDpcImEgZGF5XCIsZGQ6XCIlZCBkYXlzXCIsTTpcImEgbW9udGhcIixNTTpcIiVkIG1vbnRoc1wiLHk6XCJhIHllYXJcIix5eTpcIiVkIHllYXJzXCJ9O3ZhciBvPWZ1bmN0aW9uKGUscixuLG8pe2Zvcih2YXIgZCxpLGE9bi4kbG9jYWxlKCkucmVsYXRpdmVUaW1lLHU9W3tsOlwic1wiLHI6NDQsZDpcInNlY29uZFwifSx7bDpcIm1cIixyOjg5fSx7bDpcIm1tXCIscjo0NCxkOlwibWludXRlXCJ9LHtsOlwiaFwiLHI6ODl9LHtsOlwiaGhcIixyOjIxLGQ6XCJob3VyXCJ9LHtsOlwiZFwiLHI6MzV9LHtsOlwiZGRcIixyOjI1LGQ6XCJkYXlcIn0se2w6XCJNXCIscjo0NX0se2w6XCJNTVwiLHI6MTAsZDpcIm1vbnRoXCJ9LHtsOlwieVwiLHI6MTd9LHtsOlwieXlcIixkOlwieWVhclwifV0sZj11Lmxlbmd0aCxzPTA7czxmO3MrPTEpe3ZhciBsPXVbc107bC5kJiYoZD1vP3QoZSkuZGlmZihuLGwuZCwhMCk6bi5kaWZmKGUsbC5kLCEwKSk7dmFyIG09TWF0aC5yb3VuZChNYXRoLmFicyhkKSk7aWYobTw9bC5yfHwhbC5yKXsxPT09bSYmcz4wJiYobD11W3MtMV0pLGk9YVtsLmxdLnJlcGxhY2UoXCIlZFwiLG0pO2JyZWFrfX1yZXR1cm4gcj9pOihkPjA/YS5mdXR1cmU6YS5wYXN0KS5yZXBsYWNlKFwiJXNcIixpKX07bi50bz1mdW5jdGlvbihlLHIpe3JldHVybiBvKGUscix0aGlzLCEwKX0sbi5mcm9tPWZ1bmN0aW9uKGUscil7cmV0dXJuIG8oZSxyLHRoaXMpfSxuLnRvTm93PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRvKHQoKSxlKX0sbi5mcm9tTm93PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmZyb20odCgpLGUpfX19KTtcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzVlMTM2MWYmbGFuZz1zYXNzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzVlMTM2MWYmbGFuZz1zYXNzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1ZTEzNjFmJmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdtYWluJyxbX2MoXCJyZWNvbW1lbmRlZC12aWRlb3NcIix7dGFnOlwiY29tcG9uZW50XCJ9KSxfYygnaHInKSxfYyhcInBvcHVsYXItdmlkZW9zXCIse3RhZzpcImNvbXBvbmVudFwifSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwic2VjdGlvblwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyXCJ9LFtfdm0uX20oMCksX2MoJ3ZpZGVvLWxpc3QnLHthdHRyczp7XCJ2aWRlb3NcIjpfdm0udmlkZW9zfX0pXSwxKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdoMicse3N0YXRpY0NsYXNzOlwidGl0bGUgaXMtNVwifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlRyZW5kaW5nXCIpXSldKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwic2VjdGlvblwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyXCJ9LFtfdm0uX20oMCksX2MoJ3ZpZGVvLWxpc3QnLHthdHRyczp7XCJ2aWRlb3NcIjpfdm0udmlkZW9zfX0pXSwxKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdoMicse3N0YXRpY0NsYXNzOlwidGl0bGUgaXMtNVwifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlJlY29tbWVuZGVkXCIpXSldKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oUFQsIGZvcm1hdCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBkdXJhdGlvbkluU2VjID0gMDtcbiAgdmFyIG1hdGNoZXMgPSBQVC5tYXRjaCgvUCg/OihcXGQqKVkpPyg/OihcXGQqKU0pPyg/OihcXGQqKVcpPyg/OihcXGQqKUQpP1Q/KD86KFxcZCopSCk/KD86KFxcZCopTSk/KD86KFxcZCopUyk/L2kpO1xuICB2YXIgcGFydHMgPSBbXG4gICAgeyAvLyB5ZWFyc1xuICAgICAgcG9zOiAxLFxuICAgICAgbXVsdGlwbGllcjogODY0MDAgKiAzNjVcbiAgICB9LFxuICAgIHsgLy8gbW9udGhzXG4gICAgICBwb3M6IDIsXG4gICAgICBtdWx0aXBsaWVyOiA4NjQwMCAqIDMwXG4gICAgfSxcbiAgICB7IC8vIHdlZWtzXG4gICAgICBwb3M6IDMsXG4gICAgICBtdWx0aXBsaWVyOiA2MDQ4MDBcbiAgICB9LFxuICAgIHsgLy8gZGF5c1xuICAgICAgcG9zOiA0LFxuICAgICAgbXVsdGlwbGllcjogODY0MDBcbiAgICB9LFxuICAgIHsgLy8gaG91cnNcbiAgICAgIHBvczogNSxcbiAgICAgIG11bHRpcGxpZXI6IDM2MDBcbiAgICB9LFxuICAgIHsgLy8gbWludXRlc1xuICAgICAgcG9zOiA2LFxuICAgICAgbXVsdGlwbGllcjogNjBcbiAgICB9LFxuICAgIHsgLy8gc2Vjb25kc1xuICAgICAgcG9zOiA3LFxuICAgICAgbXVsdGlwbGllcjogMVxuICAgIH1cbiAgXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBtYXRjaGVzW3BhcnRzW2ldLnBvc10gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGR1cmF0aW9uSW5TZWMgKz0gcGFyc2VJbnQobWF0Y2hlc1twYXJ0c1tpXS5wb3NdKSAqIHBhcnRzW2ldLm11bHRpcGxpZXI7XG4gICAgfVxuICB9XG4gIHZhciB0b3RhbFNlYyA9IGR1cmF0aW9uSW5TZWM7XG4gIC8vIEhvdXJzIGV4dHJhY3Rpb25cbiAgaWYgKGR1cmF0aW9uSW5TZWMgPiAzNTk5KSB7XG4gICAgb3V0cHV0LnB1c2gocGFyc2VJbnQoZHVyYXRpb25JblNlYyAvIDM2MDApKTtcbiAgICBkdXJhdGlvbkluU2VjICU9IDM2MDA7XG4gIH1cbiAgLy8gTWludXRlcyBleHRyYWN0aW9uIHdpdGggbGVhZGluZyB6ZXJvXG4gIG91dHB1dC5wdXNoKCgnMCcgKyBwYXJzZUludChkdXJhdGlvbkluU2VjIC8gNjApKS5zbGljZSgtMikpO1xuICAvLyBTZWNvbmRzIGV4dHJhY3Rpb24gd2l0aCBsZWFkaW5nIHplcm9cbiAgb3V0cHV0LnB1c2goKCcwJyArIGR1cmF0aW9uSW5TZWMgJSA2MCkuc2xpY2UoLTIpKTtcbiAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBvdXRwdXQuam9pbignOicpO1xuICBlbHNlIGlmIChmb3JtYXQgPT09ICdzZWMnKVxuICAgIHJldHVybiB0b3RhbFNlYztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VEdXJhdGlvbjtcbiIsImltcG9ydCBvcmRlciBmcm9tICcuL29yZGVyJ1xuaW1wb3J0IGxhbmd1YWdlIGZyb20gJy4vbGFuZ3VhZ2UnXG5pbXBvcnQgdGltZWZyYW1lIGZyb20gJy4vdGltZWZyYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9yZGVyLFxuICBsYW5ndWFnZSxcbiAgdGltZWZyYW1lXG59XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB0aXRsZTogJ0N6ZWNoJyxcbiAgICB2YWx1ZTogJ2NzJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFbmdsaXNoJyxcbiAgICB2YWx1ZTogJ2VuJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGcmVuY2gnLFxuICAgIHZhbHVlOiAnZnInXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hlYnJldycsXG4gICAgdmFsdWU6ICdoZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUG9saXNoJyxcbiAgICB2YWx1ZTogJ3BsJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQb3J0dWd1ZXNlJyxcbiAgICB2YWx1ZTogJ3B0J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSdXNzaWFuJyxcbiAgICB2YWx1ZTogJ3J1J1xuICB9XG5dXG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gIHsgdGl0bGU6ICdCeSB2aWV3cycsIHZhbHVlOiAndmlld0NvdW50JywgZmllbGQ6ICd2aWV3Q291bnQnIH0sXG4gIHsgdGl0bGU6ICdCeSByYXRpbmcnLCB2YWx1ZTogJ3JhdGluZycsIGZpZWxkOiAncmF0aW5nJyB9LFxuICB7IHRpdGxlOiAnQnkgZGF0ZScsIHZhbHVlOiAnZGF0ZScsIGZpZWxkOiAncHVibGlzaGVkQXQnIH0sXG4gIHsgdGl0bGU6ICdCeSByZWxldmFuY2UnLCB2YWx1ZTogJ3JlbGV2YW5jZScsIGZpZWxkOiAndmlld0NvdW50JyB9XG5dXG4iLCJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHRpdGxlOiAnQWxsIFRpbWUnLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUb2RheScsXG4gICAgdmFsdWU6IGRheWpzKCkuc3VidHJhY3QoMSwgJ2RheXMnKS50b0lTT1N0cmluZygpXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RoaXMgV2VlaycsXG4gICAgdmFsdWU6IGRheWpzKCkuc3VidHJhY3QoNywgJ2RheXMnKS50b0lTT1N0cmluZygpXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RoaXMgTW9udGgnLFxuICAgIHZhbHVlOiBkYXlqcygpLnN1YnRyYWN0KDMwLCAnZGF5cycpLnRvSVNPU3RyaW5nKClcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGhpcyBZZWFyJyxcbiAgICB2YWx1ZTogZGF5anMoKS5zdWJ0cmFjdCgzNjUsICdkYXlzJykudG9JU09TdHJpbmcoKVxuICB9XG5dXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNWUxMzYxZiZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNWUxMzYxZiZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM1ZTEzNjFmXCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzVlMTM2MWYmbGFuZz1zYXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1ZTEzNjFmJmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzVlMTM2MWYmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BvcHVsYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5OTJmYTZhJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvcHVsYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1bGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHVsYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wdWxhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wdWxhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjk5MmZhNmEmbGFuZz1wdWcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlY29tbWVuZGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZDJkYjhmZCZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZWNvbW1lbmRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlY29tbWVuZGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlY29tbWVuZGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlY29tbWVuZGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWNvbW1lbmRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQyZGI4ZmQmbGFuZz1wdWcmXCIiLCJpbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC5tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlcGFyZVF1ZXJ5KHRvcGljcykge1xuICAgIGxldCBxdWVyeSA9ICcnXG5cbiAgICBpZih0b3BpY3MuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAvLyBnZXQgYWxsIHRvcGljIHRpdGxlc1xuICAgICAgY29uc3QgdG9waWNUaXRsZXMgPSBtYXAodG9waWNzLCAndGl0bGUnKVxuICAgICAgLy8gdHJhbnNmb3JtIGFycmF5IG9mIHRvcGljcyB0byBwaXBlIHN0cmluZ1xuICAgICAgcXVlcnkgPSB0b3BpY1RpdGxlcy5qb2luKCd8JylcbiAgICAgIC8vIHJlbW92ZSBhbGwgZG90c1xuICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9cXC4vZywgJycpXG4gICAgICAvLyByZW1vdmUgYWxsIHNwYWNlc1xuICAgICAgLy8gcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgfSBlbHNlIGlmKHRvcGljcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBxdWVyeSA9IHRvcGljcy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiAnJDEnLnJlcGxhY2UoL1xcJDEvLCBxdWVyeSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==