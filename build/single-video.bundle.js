(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-video"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Player.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      baseUrl: 'https://www.youtube.com/embed/$id?$params'
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    autoplay: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    src: function src() {
      return this.baseUrl.replace('$id', this.id).replace('$params', this.getParams());
    },
    style: function style() {
      var width = this.width ? 'width:' + this.width + 'px;' : '';
      var height = this.height ? 'height:' + this.height + 'px;' : '';
      return width + height;
    },
    settings: function settings() {
      return {
        autoplay: this.autoplay
      };
    }
  },
  methods: {
    getParams: function getParams() {
      var str = '';

      for (var key in this.settings) {
        if (str !== '') {
          str += '&';
        }

        str += key + '=' + encodeURIComponent(this.settings[key]);
      }

      return str;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/single.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/videos/single.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nl2br__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nl2br */ "./node_modules/nl2br/index.js");
/* harmony import */ var nl2br__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nl2br__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs/html */ "./node_modules/linkifyjs/html.js");
/* harmony import */ var linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.truncate */ "./node_modules/lodash.truncate/index.js");
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~config */ "./src/weblearn.config.js");
/* harmony import */ var _components_Player_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~components/Player.vue */ "./src/components/Player.vue");
/* harmony import */ var _widgets_ChannelRecentVideos_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~widgets/ChannelRecentVideos.vue */ "./src/widgets/ChannelRecentVideos.vue");
/* harmony import */ var _widgets_TopicRelatedVideos_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~widgets/TopicRelatedVideos.vue */ "./src/widgets/TopicRelatedVideos.vue");
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
  components: {
    Player: _components_Player_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChannelRecentVideos: _widgets_ChannelRecentVideos_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    TopicRelatedVideos: _widgets_TopicRelatedVideos_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      video: null,
      loaded: false,
      params: {
        title: '',
        description: ''
      },
      error: null
    };
  },
  computed: {
    publishedAt: function publishedAt() {
      return 'Published on ' + dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.video.publishedAt).format('MMM D, YYYY');
    },
    viewCount: function viewCount() {
      return numeral__WEBPACK_IMPORTED_MODULE_1___default()(this.video.viewCount).format('0,0') + ' views';
    },
    description: function description() {
      return nl2br__WEBPACK_IMPORTED_MODULE_2___default()(linkifyjs_html__WEBPACK_IMPORTED_MODULE_3___default()(this.video.description, {
        attributes: {
          rel: 'noopener'
        }
      }));
    }
  },
  created: function created() {
    this.video = null;
    this.loaded = false;
    this.loadVideo();
  },
  watch: {
    $route: function $route() {
      this.video = null;
      this.loaded = false;
      this.loadVideo();
    }
  },
  methods: {
    loadVideo: function loadVideo() {
      var _this = this;

      _store__WEBPACK_IMPORTED_MODULE_5__["default"].fetchVideo(this.$route.params.id).then(function (video) {
        _store__WEBPACK_IMPORTED_MODULE_5__["default"].fetchChannel(video.channelId).then(function (channel) {
          video.channel = channel;
          video.topics = [];
          _this.video = video;
          _this.loaded = true;
          _this.params.title = video.title;
          _this.params.description = lodash_truncate__WEBPACK_IMPORTED_MODULE_4___default()(video.description.replace(/\r?\n|\r/g, ''), {
            'length': 155,
            'separator': ' '
          });

          _this.$emit('updateHead');

          var id = video.tags.join(',');

          if (id) {
            _store__WEBPACK_IMPORTED_MODULE_5__["default"].fetchTopics({
              id: id
            }).then(function (topics) {
              _this.video.topics = topics;
            });
          }
        });
      })["catch"](function (err) {
        _this.loaded = true;
        _this.error = err.message;
      });
    }
  },
  head: {
    title: function title() {
      return {
        inner: this.params.title,
        separator: '-',
        complement: _config__WEBPACK_IMPORTED_MODULE_6__["default"].app.name
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/ChannelRecentVideos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/ChannelRecentVideos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~store */ "./src/store/index.js");
/* harmony import */ var _api_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~api/filters */ "./src/api/filters/index.js");
/* harmony import */ var _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/VideoList.vue */ "./src/components/VideoList.vue");
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
  components: {
    VideoList: _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    channel: Object
  },
  data: function data() {
    return {
      videos: [],
      limit: 6
    };
  },
  created: function created() {
    this.loadVideos();
  },
  watch: {
    '$route': 'loadVideos'
  },
  methods: {
    loadVideos: function loadVideos() {
      var _this = this;

      var params = {
        channelId: this.channel.id,
        order: _api_filters__WEBPACK_IMPORTED_MODULE_1__["default"].order[2].value,
        maxResults: this.limit
      };
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchVideos(params).then(function (result) {
        _this.videos = result.videos;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/TopicRelatedVideos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/TopicRelatedVideos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VideoList: _components_VideoList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    topic: Object
  },
  data: function data() {
    return {
      videos: [],
      limit: 6
    };
  },
  created: function created() {
    this.loadVideos();
  },
  watch: {
    '$route': 'loadVideos'
  },
  methods: {
    loadVideos: function loadVideos() {
      var _this = this;

      var params = {
        q: _util__WEBPACK_IMPORTED_MODULE_1__["default"].prepareQuery(this.topic),
        order: _api_filters__WEBPACK_IMPORTED_MODULE_2__["default"].order[3].value,
        maxResults: this.limit
      };
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].fetchVideos(params).then(function (result) {
        _this.videos = result.videos;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".player[data-v-4422bdc8] {\n  margin: 0 auto;\n  max-width: 100vw;\n}\n@media screen and (min-width: 769px) {\n.player[data-v-4422bdc8] {\n      max-width: 64vw;\n}\n}\n.player__wrapper[data-v-4422bdc8] {\n    position: relative;\n    padding-bottom: 56.25%;\n    padding-top: 35px;\n    height: 0;\n    overflow: hidden;\n}\n.player iframe[data-v-4422bdc8] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"player",style:(_vm.style)},[_c('div',{staticClass:"player__wrapper"},[_c('iframe',{attrs:{"src":_vm.src,"frameborder":"0","allowfullscreen":"","title":"YouTube Player"}})])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/single.vue?vue&type=template&id=15eb1c1f&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/videos/single.vue?vue&type=template&id=15eb1c1f&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[(_vm.loaded && _vm.video && !_vm.error)?_c('div',{staticClass:"hero is-black is-large"},[_c('div',{staticClass:"hero-body is-paddingless"},[_c('div',{staticClass:"container"},[_c('player',{attrs:{"id":_vm.video.id,"autoplay":""}})],1)])]):_vm._e(),(_vm.loaded && _vm.video && !_vm.error)?_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[(_vm.video.channel)?_c('figure',{staticClass:"image is-48x48"},[_c('img',{staticClass:"is-circle",attrs:{"src":_vm.video.channel.thumbnails.default.url,"alt":_vm.video.channelTitle + ' channel logo'}})]):_vm._e()]),_c('div',{staticClass:"media-content"},[_c('div',{staticClass:"content"},[_c('h2',{staticClass:"title is-5"},[_c('strong',[_vm._v(_vm._s(_vm.video.title))])]),_c('p',{staticClass:"subtitle is-6"},[_c('router-link',{attrs:{"to":{ name: 'channel', params: { id: _vm.video.channelId } }}},[_vm._v(_vm._s(_vm.video.channelTitle))]),_vm._v(" * "+_vm._s(_vm.publishedAt))],1)])]),_c('div',{staticClass:"media-right"},[_c('span',[_vm._v(_vm._s(_vm.viewCount))])])]),_c('div',{staticClass:"content has-margintop"},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.description)}}),_c('div',{staticClass:"control is-grouped"},_vm._l((_vm.video.topics),function(topic){return _c('div',{staticClass:"control"},[_c('router-link',{staticClass:"button",attrs:{"to":{ name: 'topic', params: { id: topic.id } },"exact":""}},[_vm._v(_vm._s(topic.title))])],1)}),0)])]),_vm._l((_vm.video.topics),function(topic){return _c('div',[_c('topic-related-videos',{attrs:{"topic":topic}})],1)}),_c('channel-recent-videos',{attrs:{"channel":_vm.video.channel}})],2):_vm._e(),(_vm.loaded && _vm.error)?_c('div',{staticClass:"hero is-large"},[_vm._m(0)]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container has-text-centered"},[_c('h2',{staticClass:"title is-3"},[_vm._v("Sorry, but this video is somehow not loaded 😞")])])])}]



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.channel && _vm.videos.length)?_c('section',{staticClass:"section is-paddingless"},[_c('hr'),_c('div',{staticClass:"container"},[_c('strong',[_vm._v("More from "),_c('router-link',{attrs:{"to":{ name: 'channel', params: { id: _vm.channel.id } }}},[_vm._v(_vm._s(_vm.channel.title))])],1),_c('div',{staticClass:"has-margintop"},[_c('video-list',{attrs:{"videos":_vm.videos,"columns":_vm.limit}})],1)])]):_vm._e()}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/widgets/TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.topic && _vm.videos.length)?_c('section',{staticClass:"section is-paddingless"},[_c('hr'),_c('div',{staticClass:"container"},[_c('strong',[_vm._v("More from "),_c('router-link',{attrs:{"to":{ name: 'topic', params: { id: _vm.topic.id } }}},[_vm._v(_vm._s(_vm.topic.title))])],1),_c('div',{staticClass:"has-margintop"},[_c('video-list',{attrs:{"videos":_vm.videos,"columns":_vm.limit}})],1)])]):_vm._e()}
var staticRenderFns = []



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

/***/ "./src/components/Player.vue":
/*!***********************************!*\
  !*** ./src/components/Player.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_vue_vue_type_template_id_4422bdc8_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug& */ "./src/components/Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug&");
/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js& */ "./src/components/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true& */ "./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Player_vue_vue_type_template_id_4422bdc8_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Player_vue_vue_type_template_id_4422bdc8_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4422bdc8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Player.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Player.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?indentedSyntax!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=style&index=0&id=4422bdc8&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_indentedSyntax_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_style_index_0_id_4422bdc8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug&":
/*!***************************************************************************************!*\
  !*** ./src/components/Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_4422bdc8_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Player.vue?vue&type=template&id=4422bdc8&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_4422bdc8_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_4422bdc8_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/videos/single.vue":
/*!*************************************!*\
  !*** ./src/pages/videos/single.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single_vue_vue_type_template_id_15eb1c1f_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.vue?vue&type=template&id=15eb1c1f&lang=pug& */ "./src/pages/videos/single.vue?vue&type=template&id=15eb1c1f&lang=pug&");
/* harmony import */ var _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.vue?vue&type=script&lang=js& */ "./src/pages/videos/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _single_vue_vue_type_template_id_15eb1c1f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _single_vue_vue_type_template_id_15eb1c1f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/videos/single.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/videos/single.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/videos/single.vue?vue&type=template&id=15eb1c1f&lang=pug&":
/*!*****************************************************************************!*\
  !*** ./src/pages/videos/single.vue?vue&type=template&id=15eb1c1f&lang=pug& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_15eb1c1f_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=template&id=15eb1c1f&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/videos/single.vue?vue&type=template&id=15eb1c1f&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_15eb1c1f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_15eb1c1f_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ }),

/***/ "./src/widgets/ChannelRecentVideos.vue":
/*!*********************************************!*\
  !*** ./src/widgets/ChannelRecentVideos.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelRecentVideos_vue_vue_type_template_id_c7688596_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug& */ "./src/widgets/ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug&");
/* harmony import */ var _ChannelRecentVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelRecentVideos.vue?vue&type=script&lang=js& */ "./src/widgets/ChannelRecentVideos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelRecentVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelRecentVideos_vue_vue_type_template_id_c7688596_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelRecentVideos_vue_vue_type_template_id_c7688596_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/widgets/ChannelRecentVideos.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/widgets/ChannelRecentVideos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelRecentVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ChannelRecentVideos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/ChannelRecentVideos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelRecentVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/widgets/ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug&":
/*!*************************************************************************************!*\
  !*** ./src/widgets/ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelRecentVideos_vue_vue_type_template_id_c7688596_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/ChannelRecentVideos.vue?vue&type=template&id=c7688596&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelRecentVideos_vue_vue_type_template_id_c7688596_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelRecentVideos_vue_vue_type_template_id_c7688596_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/widgets/TopicRelatedVideos.vue":
/*!********************************************!*\
  !*** ./src/widgets/TopicRelatedVideos.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicRelatedVideos_vue_vue_type_template_id_5b754ae3_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug& */ "./src/widgets/TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug&");
/* harmony import */ var _TopicRelatedVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicRelatedVideos.vue?vue&type=script&lang=js& */ "./src/widgets/TopicRelatedVideos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopicRelatedVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopicRelatedVideos_vue_vue_type_template_id_5b754ae3_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopicRelatedVideos_vue_vue_type_template_id_5b754ae3_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/widgets/TopicRelatedVideos.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/widgets/TopicRelatedVideos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicRelatedVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./TopicRelatedVideos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/TopicRelatedVideos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicRelatedVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/widgets/TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug&":
/*!************************************************************************************!*\
  !*** ./src/widgets/TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicRelatedVideos_vue_vue_type_template_id_5b754ae3_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/widgets/TopicRelatedVideos.vue?vue&type=template&id=5b754ae3&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicRelatedVideos_vue_vue_type_template_id_5b754ae3_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicRelatedVideos_vue_vue_type_template_id_5b754ae3_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL3ZpZGVvcy9zaW5nbGUudnVlIiwid2VicGFjazovLy9zcmMvd2lkZ2V0cy9DaGFubmVsUmVjZW50VmlkZW9zLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3dpZGdldHMvVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIudnVlPzI5NjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyLnZ1ZT81NDVjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXllci52dWU/ZWExMSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdmlkZW9zL3NpbmdsZS52dWU/YWVjMiIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9DaGFubmVsUmVjZW50VmlkZW9zLnZ1ZT83Yzk3Iiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL1RvcGljUmVsYXRlZFZpZGVvcy52dWU/YWMyMSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2ZpbHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9maWx0ZXJzL2xhbmd1YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZmlsdGVycy9vcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2ZpbHRlcnMvdGltZWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXllci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyLnZ1ZT84OGRjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXllci52dWU/ZmNhNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIudnVlPzA0YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ZpZGVvcy9zaW5nbGUudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy92aWRlb3Mvc2luZ2xlLnZ1ZT9mOTRjIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy92aWRlb3Mvc2luZ2xlLnZ1ZT9hYmVkIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL0NoYW5uZWxSZWNlbnRWaWRlb3MudnVlIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL0NoYW5uZWxSZWNlbnRWaWRlb3MudnVlPzUxMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvQ2hhbm5lbFJlY2VudFZpZGVvcy52dWU/N2JjMyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL1RvcGljUmVsYXRlZFZpZGVvcy52dWU/MjExZSIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlPzkwYzUiXSwibmFtZXMiOlsib3JkZXIiLCJsYW5ndWFnZSIsInRpbWVmcmFtZSIsInRpdGxlIiwidmFsdWUiLCJmaWVsZCIsImRheWpzIiwic3VidHJhY3QiLCJ0b0lTT1N0cmluZyIsInByZXBhcmVRdWVyeSIsInRvcGljcyIsInF1ZXJ5IiwiY29uc3RydWN0b3IiLCJBcnJheSIsInRvcGljVGl0bGVzIiwibWFwIiwiam9pbiIsInJlcGxhY2UiLCJPYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTtBQU1BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0E7QUFEQSxLQUxBO0FBUUE7QUFDQTtBQURBLEtBUkE7QUFXQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQVhBLEdBTkE7QUFzQkE7QUFDQSxPQURBLGlCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxtQkFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLEtB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QUNwQztBQUNMOzs7QUFHbEU7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUZBQU07QUFDUixFQUFFLHVHQUFNO0FBQ1IsRUFBRSxnSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxnRjs7Ozs7Ozs7Ozs7O0FDbEJmO0FBQUE7QUFBQSx3Q0FBbUwsQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEc7QUFDcEM7QUFDTDs7O0FBR2pFO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsZ0Y7Ozs7Ozs7Ozs7OztBQ2xCZjtBQUFBO0FBQUEsd0NBQWtMLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzaW5nbGUtdmlkZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbi5wbGF5ZXIoOnN0eWxlPVwic3R5bGVcIilcbiAgLnBsYXllcl9fd3JhcHBlclxuICAgIGlmcmFtZSg6c3JjPVwic3JjXCIsZnJhbWVib3JkZXI9XCIwXCIsYWxsb3dmdWxsc2NyZWVuLHRpdGxlPVwiWW91VHViZSBQbGF5ZXJcIilcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhc2VVcmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8kaWQ/JHBhcmFtcydcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlclxuICAgIH0sXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzcmMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5iYXNlVXJsLnJlcGxhY2UoJyRpZCcsIHRoaXMuaWQpLnJlcGxhY2UoJyRwYXJhbXMnLCB0aGlzLmdldFBhcmFtcygpKVxuICAgIH0sXG4gICAgc3R5bGUoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9ICh0aGlzLndpZHRoKSA/ICd3aWR0aDonICsgdGhpcy53aWR0aCArICdweDsnIDogJydcbiAgICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmhlaWdodCkgPyAnaGVpZ2h0OicgKyB0aGlzLmhlaWdodCArICdweDsnIDogJydcblxuICAgICAgcmV0dXJuIHdpZHRoICsgaGVpZ2h0XG4gICAgfSxcbiAgICBzZXR0aW5ncygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0UGFyYW1zOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzdHIgPSAnJ1xuICAgICAgZm9yKGNvbnN0IGtleSBpbiB0aGlzLnNldHRpbmdzKSB7XG4gICAgICAgIGlmKHN0ciAhPT0gJycpIHtcbiAgICAgICAgICBzdHIgKz0gJyYnXG4gICAgICAgIH1cbiAgICAgICAgc3RyICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnNldHRpbmdzW2tleV0pXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuLnBsYXllclxuICBtYXJnaW46IDAgYXV0b1xuICBtYXgtd2lkdGg6IDEwMHZ3XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KVxuICAgIG1heC13aWR0aDogNjR2d1xuICAmX193cmFwcGVyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgaWZyYW1lXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDBcbjwvc3R5bGU+IiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbm1haW5cbiAgLmhlcm8uaXMtYmxhY2suaXMtbGFyZ2Uodi1pZj1cImxvYWRlZCAmJiB2aWRlbyAmJiAhZXJyb3JcIilcbiAgICAuaGVyby1ib2R5LmlzLXBhZGRpbmdsZXNzXG4gICAgICAuY29udGFpbmVyXG4gICAgICAgIHBsYXllcig6aWQ9XCJ2aWRlby5pZFwiLCBhdXRvcGxheSlcbiAgc2VjdGlvbi5zZWN0aW9uKHYtaWY9XCJsb2FkZWQgJiYgdmlkZW8gJiYgIWVycm9yXCIpXG4gICAgLmNvbnRhaW5lclxuICAgICAgLm1lZGlhXG4gICAgICAgIC5tZWRpYS1sZWZ0XG4gICAgICAgICAgZmlndXJlLmltYWdlLmlzLTQ4eDQ4KHYtaWY9XCJ2aWRlby5jaGFubmVsXCIpXG4gICAgICAgICAgICBpbWcuaXMtY2lyY2xlKDpzcmM9XCJ2aWRlby5jaGFubmVsLnRodW1ibmFpbHMuZGVmYXVsdC51cmxcIiw6YWx0PVwidmlkZW8uY2hhbm5lbFRpdGxlICsgJyBjaGFubmVsIGxvZ28nXCIpXG4gICAgICAgIC5tZWRpYS1jb250ZW50XG4gICAgICAgICAgLmNvbnRlbnRcbiAgICAgICAgICAgIGgyLnRpdGxlLmlzLTU6IHN0cm9uZyB7eyB2aWRlby50aXRsZSB9fVxuICAgICAgICAgICAgcC5zdWJ0aXRsZS5pcy02IFxuICAgICAgICAgICAgICByb3V0ZXItbGluayg6dG89XCJ7IG5hbWU6ICdjaGFubmVsJywgcGFyYW1zOiB7IGlkOiB2aWRlby5jaGFubmVsSWQgfSB9XCIpIHt7IHZpZGVvLmNoYW5uZWxUaXRsZSB9fVxuICAgICAgICAgICAgICA9ICcgJ1xuICAgICAgICAgICAgICB8ICoge3sgcHVibGlzaGVkQXQgfX1cbiAgICAgICAgLm1lZGlhLXJpZ2h0XG4gICAgICAgICAgc3BhbiB7eyB2aWV3Q291bnQgfX1cbiAgICAgIC5jb250ZW50Lmhhcy1tYXJnaW50b3BcbiAgICAgICAgcCh2LWh0bWw9XCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAuY29udHJvbC5pcy1ncm91cGVkXG4gICAgICAgICAgLmNvbnRyb2wodi1mb3I9XCJ0b3BpYyBpbiB2aWRlby50b3BpY3NcIilcbiAgICAgICAgICAgIHJvdXRlci1saW5rLmJ1dHRvbihcbiAgICAgICAgICAgICAgOnRvPVwieyBuYW1lOiAndG9waWMnLCBwYXJhbXM6IHsgaWQ6IHRvcGljLmlkIH0gfVwiLFxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgKSB7eyB0b3BpYy50aXRsZSB9fVxuICAgIGRpdih2LWZvcj1cInRvcGljIGluIHZpZGVvLnRvcGljc1wiKVxuICAgICAgdG9waWMtcmVsYXRlZC12aWRlb3MoOnRvcGljPVwidG9waWNcIilcbiAgICBjaGFubmVsLXJlY2VudC12aWRlb3MoOmNoYW5uZWw9XCJ2aWRlby5jaGFubmVsXCIpXG4gIC5oZXJvLmlzLWxhcmdlKHYtaWY9XCJsb2FkZWQgJiYgZXJyb3JcIilcbiAgICAuaGVyby1ib2R5XG4gICAgICAuY29udGFpbmVyLmhhcy10ZXh0LWNlbnRlcmVkXG4gICAgICAgIGgyLnRpdGxlLmlzLTMgU29ycnksIGJ1dCB0aGlzIHZpZGVvIGlzIHNvbWVob3cgbm90IGxvYWRlZCDwn5ieXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBubDJiciBmcm9tICdubDJicidcbmltcG9ydCBsaW5raWZ5anMgZnJvbSAnbGlua2lmeWpzL2h0bWwnXG5pbXBvcnQgdHJ1bmNhdGUgZnJvbSAnbG9kYXNoLnRydW5jYXRlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJ35zdG9yZSdcbmltcG9ydCBjb25maWcgZnJvbSAnfmNvbmZpZydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnfmNvbXBvbmVudHMvUGxheWVyLnZ1ZSdcbmltcG9ydCBDaGFubmVsUmVjZW50VmlkZW9zIGZyb20gJ353aWRnZXRzL0NoYW5uZWxSZWNlbnRWaWRlb3MudnVlJ1xuaW1wb3J0IFRvcGljUmVsYXRlZFZpZGVvcyBmcm9tICd+d2lkZ2V0cy9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgUGxheWVyLCBDaGFubmVsUmVjZW50VmlkZW9zLCBUb3BpY1JlbGF0ZWRWaWRlb3MgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlkZW86IG51bGwsXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICB9LFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcHVibGlzaGVkQXQoKSB7XG4gICAgICByZXR1cm4gJ1B1Ymxpc2hlZCBvbiAnICsgZGF5anModGhpcy52aWRlby5wdWJsaXNoZWRBdCkuZm9ybWF0KCdNTU0gRCwgWVlZWScpXG4gICAgfSxcbiAgICB2aWV3Q291bnQoKSB7XG4gICAgICByZXR1cm4gbnVtZXJhbCh0aGlzLnZpZGVvLnZpZXdDb3VudCkuZm9ybWF0KCcwLDAnKSArICcgdmlld3MnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBubDJicihsaW5raWZ5anModGhpcy52aWRlby5kZXNjcmlwdGlvbiwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgcmVsOiAnbm9vcGVuZXInXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnZpZGVvID0gbnVsbFxuICAgIHRoaXMubG9hZGVkID0gZmFsc2VcbiAgICB0aGlzLmxvYWRWaWRlbygpXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJHJvdXRlKCkge1xuICAgICAgdGhpcy52aWRlbyA9IG51bGxcbiAgICAgIHRoaXMubG9hZGVkID0gZmFsc2VcbiAgICAgIHRoaXMubG9hZFZpZGVvKClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkVmlkZW8oKSB7XG4gICAgICBzdG9yZS5mZXRjaFZpZGVvKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCkudGhlbih2aWRlbyA9PiB7XG4gICAgICAgIHN0b3JlLmZldGNoQ2hhbm5lbCh2aWRlby5jaGFubmVsSWQpLnRoZW4oY2hhbm5lbCA9PiB7XG4gICAgICAgICAgdmlkZW8uY2hhbm5lbCA9IGNoYW5uZWxcbiAgICAgICAgICB2aWRlby50b3BpY3MgPSBbXVxuICAgICAgICAgIHRoaXMudmlkZW8gPSB2aWRlb1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgICAgICAgIHRoaXMucGFyYW1zLnRpdGxlID0gdmlkZW8udGl0bGVcbiAgICAgICAgICB0aGlzLnBhcmFtcy5kZXNjcmlwdGlvbiA9IHRydW5jYXRlKHZpZGVvLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcnKSwgeyAnbGVuZ3RoJzogMTU1LCAnc2VwYXJhdG9yJzogJyAnIH0pXG4gICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgY29uc3QgaWQgPSB2aWRlby50YWdzLmpvaW4oJywnKVxuICAgICAgICAgIGlmKGlkKSB7XG4gICAgICAgICAgICBzdG9yZS5mZXRjaFRvcGljcyh7IGlkIH0pLnRoZW4odG9waWNzID0+IHtcbiAgICAgICAgICAgICAgdGhpcy52aWRlby50b3BpY3MgPSB0b3BpY3NcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgaGVhZDoge1xuICAgIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5uZXI6IHRoaXMucGFyYW1zLnRpdGxlLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgY29tcGxlbWVudDogY29uZmlnLmFwcC5uYW1lXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgeyBpZDogJ2Rlc2NyaXB0aW9uJywgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogdGhpcy5wYXJhbXMuZGVzY3JpcHRpb24gfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbnNlY3Rpb24uc2VjdGlvbi5pcy1wYWRkaW5nbGVzcyh2LWlmPVwiY2hhbm5lbCAmJiB2aWRlb3MubGVuZ3RoXCIpXG4gIGhyXG4gIC5jb250YWluZXJcbiAgICBzdHJvbmcgTW9yZSBmcm9tICNbcm91dGVyLWxpbmsoOnRvPVwieyBuYW1lOiAnY2hhbm5lbCcsIHBhcmFtczogeyBpZDogY2hhbm5lbC5pZCB9IH1cIikge3sgY2hhbm5lbC50aXRsZSB9fV1cbiAgICAuaGFzLW1hcmdpbnRvcFxuICAgICAgdmlkZW8tbGlzdCg6dmlkZW9zPVwidmlkZW9zXCIsOmNvbHVtbnM9XCJsaW1pdFwiKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdG9yZSBmcm9tICd+c3RvcmUnXG5pbXBvcnQgZmlsdGVycyBmcm9tICd+YXBpL2ZpbHRlcnMnXG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJ35jb21wb25lbnRzL1ZpZGVvTGlzdC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFZpZGVvTGlzdFxuICB9LFxuICBwcm9wczoge1xuICAgIGNoYW5uZWw6IE9iamVjdFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWRlb3M6IFtdLFxuICAgICAgbGltaXQ6IDZcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5sb2FkVmlkZW9zKClcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlJzogJ2xvYWRWaWRlb3MnXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkVmlkZW9zKCkge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBjaGFubmVsSWQ6IHRoaXMuY2hhbm5lbC5pZCxcbiAgICAgICAgb3JkZXI6IGZpbHRlcnMub3JkZXJbMl0udmFsdWUsXG4gICAgICAgIG1heFJlc3VsdHM6IHRoaXMubGltaXRcbiAgICAgIH1cblxuICAgICAgc3RvcmUuZmV0Y2hWaWRlb3MocGFyYW1zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMudmlkZW9zID0gcmVzdWx0LnZpZGVvc1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG5zZWN0aW9uLnNlY3Rpb24uaXMtcGFkZGluZ2xlc3Modi1pZj1cInRvcGljICYmIHZpZGVvcy5sZW5ndGhcIilcbiAgaHJcbiAgLmNvbnRhaW5lclxuICAgIHN0cm9uZyBNb3JlIGZyb20gI1tyb3V0ZXItbGluayg6dG89XCJ7IG5hbWU6ICd0b3BpYycsIHBhcmFtczogeyBpZDogdG9waWMuaWQgfSB9XCIpIHt7IHRvcGljLnRpdGxlIH19XVxuICAgIC5oYXMtbWFyZ2ludG9wXG4gICAgICB2aWRlby1saXN0KDp2aWRlb3M9XCJ2aWRlb3NcIiw6Y29sdW1ucz1cImxpbWl0XCIpXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHN0b3JlIGZyb20gJ35zdG9yZSdcbmltcG9ydCB1dGlsIGZyb20gJ351dGlsJ1xuaW1wb3J0IGZpbHRlcnMgZnJvbSAnfmFwaS9maWx0ZXJzJ1xuaW1wb3J0IFZpZGVvTGlzdCBmcm9tICd+Y29tcG9uZW50cy9WaWRlb0xpc3QudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBWaWRlb0xpc3RcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB0b3BpYzogT2JqZWN0XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZGVvczogW10sXG4gICAgICBsaW1pdDogNlxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxvYWRWaWRlb3MoKVxuICB9LFxuICB3YXRjaDoge1xuICAgICckcm91dGUnOiAnbG9hZFZpZGVvcydcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRWaWRlb3MoKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHE6IHV0aWwucHJlcGFyZVF1ZXJ5KHRoaXMudG9waWMpLFxuICAgICAgICBvcmRlcjogZmlsdGVycy5vcmRlclszXS52YWx1ZSxcbiAgICAgICAgbWF4UmVzdWx0czogdGhpcy5saW1pdFxuICAgICAgfVxuXG4gICAgICBzdG9yZS5mZXRjaFZpZGVvcyhwYXJhbXMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy52aWRlb3MgPSByZXN1bHQudmlkZW9zXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGxheWVyW2RhdGEtdi00NDIyYmRjOF0ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbi5wbGF5ZXJbZGF0YS12LTQ0MjJiZGM4XSB7XFxuICAgICAgbWF4LXdpZHRoOiA2NHZ3O1xcbn1cXG59XFxuLnBsYXllcl9fd3JhcHBlcltkYXRhLXYtNDQyMmJkYzhdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucGxheWVyIGlmcmFtZVtkYXRhLXYtNDQyMmJkYzhdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0MjJiZGM4Jmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BsYXllci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDIyYmRjOCZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0MjJiZGM4Jmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInBsYXllclwiLHN0eWxlOihfdm0uc3R5bGUpfSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicGxheWVyX193cmFwcGVyXCJ9LFtfYygnaWZyYW1lJyx7YXR0cnM6e1wic3JjXCI6X3ZtLnNyYyxcImZyYW1lYm9yZGVyXCI6XCIwXCIsXCJhbGxvd2Z1bGxzY3JlZW5cIjpcIlwiLFwidGl0bGVcIjpcIllvdVR1YmUgUGxheWVyXCJ9fSldKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbWFpbicsWyhfdm0ubG9hZGVkICYmIF92bS52aWRlbyAmJiAhX3ZtLmVycm9yKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZXJvIGlzLWJsYWNrIGlzLWxhcmdlXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZXJvLWJvZHkgaXMtcGFkZGluZ2xlc3NcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRhaW5lclwifSxbX2MoJ3BsYXllcicse2F0dHJzOntcImlkXCI6X3ZtLnZpZGVvLmlkLFwiYXV0b3BsYXlcIjpcIlwifX0pXSwxKV0pXSk6X3ZtLl9lKCksKF92bS5sb2FkZWQgJiYgX3ZtLnZpZGVvICYmICFfdm0uZXJyb3IpP19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJzZWN0aW9uXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1lZGlhXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtZWRpYS1sZWZ0XCJ9LFsoX3ZtLnZpZGVvLmNoYW5uZWwpP19jKCdmaWd1cmUnLHtzdGF0aWNDbGFzczpcImltYWdlIGlzLTQ4eDQ4XCJ9LFtfYygnaW1nJyx7c3RhdGljQ2xhc3M6XCJpcy1jaXJjbGVcIixhdHRyczp7XCJzcmNcIjpfdm0udmlkZW8uY2hhbm5lbC50aHVtYm5haWxzLmRlZmF1bHQudXJsLFwiYWx0XCI6X3ZtLnZpZGVvLmNoYW5uZWxUaXRsZSArICcgY2hhbm5lbCBsb2dvJ319KV0pOl92bS5fZSgpXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWVkaWEtY29udGVudFwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGVudFwifSxbX2MoJ2gyJyx7c3RhdGljQ2xhc3M6XCJ0aXRsZSBpcy01XCJ9LFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0udmlkZW8udGl0bGUpKV0pXSksX2MoJ3AnLHtzdGF0aWNDbGFzczpcInN1YnRpdGxlIGlzLTZcIn0sW19jKCdyb3V0ZXItbGluaycse2F0dHJzOntcInRvXCI6eyBuYW1lOiAnY2hhbm5lbCcsIHBhcmFtczogeyBpZDogX3ZtLnZpZGVvLmNoYW5uZWxJZCB9IH19fSxbX3ZtLl92KF92bS5fcyhfdm0udmlkZW8uY2hhbm5lbFRpdGxlKSldKSxfdm0uX3YoXCIgKiBcIitfdm0uX3MoX3ZtLnB1Ymxpc2hlZEF0KSldLDEpXSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtZWRpYS1yaWdodFwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS52aWV3Q291bnQpKV0pXSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250ZW50IGhhcy1tYXJnaW50b3BcIn0sW19jKCdwJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5kZXNjcmlwdGlvbil9fSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udHJvbCBpcy1ncm91cGVkXCJ9LF92bS5fbCgoX3ZtLnZpZGVvLnRvcGljcyksZnVuY3Rpb24odG9waWMpe3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250cm9sXCJ9LFtfYygncm91dGVyLWxpbmsnLHtzdGF0aWNDbGFzczpcImJ1dHRvblwiLGF0dHJzOntcInRvXCI6eyBuYW1lOiAndG9waWMnLCBwYXJhbXM6IHsgaWQ6IHRvcGljLmlkIH0gfSxcImV4YWN0XCI6XCJcIn19LFtfdm0uX3YoX3ZtLl9zKHRvcGljLnRpdGxlKSldKV0sMSl9KSwwKV0pXSksX3ZtLl9sKChfdm0udmlkZW8udG9waWNzKSxmdW5jdGlvbih0b3BpYyl7cmV0dXJuIF9jKCdkaXYnLFtfYygndG9waWMtcmVsYXRlZC12aWRlb3MnLHthdHRyczp7XCJ0b3BpY1wiOnRvcGljfX0pXSwxKX0pLF9jKCdjaGFubmVsLXJlY2VudC12aWRlb3MnLHthdHRyczp7XCJjaGFubmVsXCI6X3ZtLnZpZGVvLmNoYW5uZWx9fSldLDIpOl92bS5fZSgpLChfdm0ubG9hZGVkICYmIF92bS5lcnJvcik/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVybyBpcy1sYXJnZVwifSxbX3ZtLl9tKDApXSk6X3ZtLl9lKCldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZXJvLWJvZHlcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwifSxbX2MoJ2gyJyx7c3RhdGljQ2xhc3M6XCJ0aXRsZSBpcy0zXCJ9LFtfdm0uX3YoXCJTb3JyeSwgYnV0IHRoaXMgdmlkZW8gaXMgc29tZWhvdyBub3QgbG9hZGVkIPCfmJ5cIildKV0pXSl9XVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5jaGFubmVsICYmIF92bS52aWRlb3MubGVuZ3RoKT9fYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwic2VjdGlvbiBpcy1wYWRkaW5nbGVzc1wifSxbX2MoJ2hyJyksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyXCJ9LFtfYygnc3Ryb25nJyxbX3ZtLl92KFwiTW9yZSBmcm9tIFwiKSxfYygncm91dGVyLWxpbmsnLHthdHRyczp7XCJ0b1wiOnsgbmFtZTogJ2NoYW5uZWwnLCBwYXJhbXM6IHsgaWQ6IF92bS5jaGFubmVsLmlkIH0gfX19LFtfdm0uX3YoX3ZtLl9zKF92bS5jaGFubmVsLnRpdGxlKSldKV0sMSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGFzLW1hcmdpbnRvcFwifSxbX2MoJ3ZpZGVvLWxpc3QnLHthdHRyczp7XCJ2aWRlb3NcIjpfdm0udmlkZW9zLFwiY29sdW1uc1wiOl92bS5saW1pdH19KV0sMSldKV0pOl92bS5fZSgpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLnRvcGljICYmIF92bS52aWRlb3MubGVuZ3RoKT9fYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwic2VjdGlvbiBpcy1wYWRkaW5nbGVzc1wifSxbX2MoJ2hyJyksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyXCJ9LFtfYygnc3Ryb25nJyxbX3ZtLl92KFwiTW9yZSBmcm9tIFwiKSxfYygncm91dGVyLWxpbmsnLHthdHRyczp7XCJ0b1wiOnsgbmFtZTogJ3RvcGljJywgcGFyYW1zOiB7IGlkOiBfdm0udG9waWMuaWQgfSB9fX0sW192bS5fdihfdm0uX3MoX3ZtLnRvcGljLnRpdGxlKSldKV0sMSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGFzLW1hcmdpbnRvcFwifSxbX2MoJ3ZpZGVvLWxpc3QnLHthdHRyczp7XCJ2aWRlb3NcIjpfdm0udmlkZW9zLFwiY29sdW1uc1wiOl92bS5saW1pdH19KV0sMSldKV0pOl92bS5fZSgpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgb3JkZXIgZnJvbSAnLi9vcmRlcidcbmltcG9ydCBsYW5ndWFnZSBmcm9tICcuL2xhbmd1YWdlJ1xuaW1wb3J0IHRpbWVmcmFtZSBmcm9tICcuL3RpbWVmcmFtZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBvcmRlcixcbiAgbGFuZ3VhZ2UsXG4gIHRpbWVmcmFtZVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdGl0bGU6ICdDemVjaCcsXG4gICAgdmFsdWU6ICdjcydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRW5nbGlzaCcsXG4gICAgdmFsdWU6ICdlbidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRnJlbmNoJyxcbiAgICB2YWx1ZTogJ2ZyJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIZWJyZXcnLFxuICAgIHZhbHVlOiAnaGUnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BvbGlzaCcsXG4gICAgdmFsdWU6ICdwbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUG9ydHVndWVzZScsXG4gICAgdmFsdWU6ICdwdCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUnVzc2lhbicsXG4gICAgdmFsdWU6ICdydSdcbiAgfVxuXVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7IHRpdGxlOiAnQnkgdmlld3MnLCB2YWx1ZTogJ3ZpZXdDb3VudCcsIGZpZWxkOiAndmlld0NvdW50JyB9LFxuICB7IHRpdGxlOiAnQnkgcmF0aW5nJywgdmFsdWU6ICdyYXRpbmcnLCBmaWVsZDogJ3JhdGluZycgfSxcbiAgeyB0aXRsZTogJ0J5IGRhdGUnLCB2YWx1ZTogJ2RhdGUnLCBmaWVsZDogJ3B1Ymxpc2hlZEF0JyB9LFxuICB7IHRpdGxlOiAnQnkgcmVsZXZhbmNlJywgdmFsdWU6ICdyZWxldmFuY2UnLCBmaWVsZDogJ3ZpZXdDb3VudCcgfVxuXVxuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB0aXRsZTogJ0FsbCBUaW1lJyxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVG9kYXknLFxuICAgIHZhbHVlOiBkYXlqcygpLnN1YnRyYWN0KDEsICdkYXlzJykudG9JU09TdHJpbmcoKVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaGlzIFdlZWsnLFxuICAgIHZhbHVlOiBkYXlqcygpLnN1YnRyYWN0KDcsICdkYXlzJykudG9JU09TdHJpbmcoKVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaGlzIE1vbnRoJyxcbiAgICB2YWx1ZTogZGF5anMoKS5zdWJ0cmFjdCgzMCwgJ2RheXMnKS50b0lTT1N0cmluZygpXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RoaXMgWWVhcicsXG4gICAgdmFsdWU6IGRheWpzKCkuc3VidHJhY3QoMzY1LCAnZGF5cycpLnRvSVNPU3RyaW5nKClcbiAgfVxuXVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0MjJiZGM4JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0MjJiZGM4Jmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDQyMmJkYzhcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9pbmRlbnRlZFN5bnRheCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BsYXllci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDIyYmRjOCZsYW5nPXNhc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP2luZGVudGVkU3ludGF4IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0MjJiZGM4Jmxhbmc9c2FzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0MjJiZGM4JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZWIxYzFmJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NpbmdsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2luZ2xlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaW5nbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZWIxYzFmJmxhbmc9cHVnJlwiIiwiaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gubWFwJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZXBhcmVRdWVyeSh0b3BpY3MpIHtcbiAgICBsZXQgcXVlcnkgPSAnJ1xuXG4gICAgaWYodG9waWNzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgLy8gZ2V0IGFsbCB0b3BpYyB0aXRsZXNcbiAgICAgIGNvbnN0IHRvcGljVGl0bGVzID0gbWFwKHRvcGljcywgJ3RpdGxlJylcbiAgICAgIC8vIHRyYW5zZm9ybSBhcnJheSBvZiB0b3BpY3MgdG8gcGlwZSBzdHJpbmdcbiAgICAgIHF1ZXJ5ID0gdG9waWNUaXRsZXMuam9pbignfCcpXG4gICAgICAvLyByZW1vdmUgYWxsIGRvdHNcbiAgICAgIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFwuL2csICcnKVxuICAgICAgLy8gcmVtb3ZlIGFsbCBzcGFjZXNcbiAgICAgIC8vIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIH0gZWxzZSBpZih0b3BpY3MuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgcXVlcnkgPSB0b3BpY3MudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gJyQxJy5yZXBsYWNlKC9cXCQxLywgcXVlcnkpXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2hhbm5lbFJlY2VudFZpZGVvcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yzc2ODg1OTYmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhbm5lbFJlY2VudFZpZGVvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NoYW5uZWxSZWNlbnRWaWRlb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhbm5lbFJlY2VudFZpZGVvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFubmVsUmVjZW50VmlkZW9zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1wbGFpbi1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFubmVsUmVjZW50VmlkZW9zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNzY4ODU5NiZsYW5nPXB1ZyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Yjc1NGFlMyZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcGljUmVsYXRlZFZpZGVvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Yjc1NGFlMyZsYW5nPXB1ZyZcIiJdLCJzb3VyY2VSb290IjoiIn0=