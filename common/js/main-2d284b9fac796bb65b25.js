// 控制视频播放
var videoBtn11 = document.getElementById('videoImg');
var videoIe = document.getElementById("videoIe");
var video = document.getElementsByClassName('Dvideo-ele')[0];
var videoPlay = document.getElementsByTagName("video")[0];
var videoBtn11 = document.getElementById('videoImg');
var progressBar = document.getElementsByClassName('Dvideo-progress-content')[0];
var menuBox = document.getElementsByClassName('Dvideo-ctrl')[0];
var videoBox = document.getElementById("videoBox");
var a;

// ====================
!function (e) { var t = {}; function i (o) { if (t[o]) return t[o].exports; var n = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(n.exports, n, n.exports, i), n.l = !0, n.exports } i.m = e, i.c = t, i.d = function (e, t, o) { i.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o }) }, i.r = function (e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, i.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return i.d(t, "a", t), t }, i.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "", i(i.s = 1) }({
  0: function (e, t, i) {
    "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, n = function () { function e (e, t) { for (var i = 0; i < t.length; i++) { var o = t[i]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, i, o) { return i && e(t.prototype, i), o && e(t, o), t } }(); i(13), i(8); var a = function () {
      function e (t) {
        !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e); this.opt = Object.assign({
          ele: "#video", src: "http://download3.dfrobot.com.cn/website/video/mind+.mp4", isShowPoster: !0, poster: "http://download3.dfrobot.com.cn/website/image/videoimg.png", title: "", width: "100%", height: "100%", showNext: 0, autoplay: 0, ctrSpeedDuration: 10000, loop: !1, showVolume: !0, volume: .8, showVolumeUnFull: !0, showPlayBackRate: !0, showPlayBackRateUnFull: !0, playbackRate: { activeIndex: 1, rateList: [.8, 1, 1.5, 2] }, showVideoDefinition: 0, showVideoDefinitionUnFull: !0,
          // videoDefinition: { activeIndex: 1, definitionList: [{ type: "0", name: "标清" }, { type: "1", name: "高清" }, { type: "2", name: "超清" }] },
          nextVideoExtend: function () { }, setVideoDefinition: function (e, t, i) { }, onTimeupdate: function (e) { }, onPlaying: function (e) { }, onPause: function () { }, onEnded: function () { }, onLoadedMetaData: function () { }
        }, t), this.isFull = !1, this.isLoadMate = !1, this.isPlaying = !1, this.durationT = 0, this.currentT = 0, this.showCtrlT = "", this.currentP = 0, this.isDrag = !1, this.onPress = !1, this.maxProgressWidth = 0, this.dragProgressTo = 0, this.volume = 1, this.maxVolumeWidth = 0, this.dragVolumeTo = 0, this.browserV = this.browserVersion(), this.reduceTBefore = 0, this.reduceTAfter = 0, this.isPlaying = this.autoplay, "string" == typeof this.opt.ele ? this.opt.ele = document.querySelector(this.opt.ele) : this.opt.ele = this.opt.ele, this.initDom(), this.showTopBottomCtrl(!0)
      } return n(e, [{ key: "initDom", value: function () { this.opt.ele.style.width = this.opt.width, this.opt.ele.style.height = this.opt.height, this.createVideoC(), this.createVideoEle(), this.createHeaderC(), this.createCtrlC(), this.createVideoTips(), this.createvideoPlayState(), this.createPcProgress(), this.createCurrentDurationText(), this.menuRightC = document.createElement("div"), this.menuRightC.className = "Dvideo-menu-right-content", this.videoCtrlDetail.appendChild(this.menuRightC), this.opt.showVolume && this.createVolume(), this.opt.showPlayBackRate && this.createPlaybackRateList(), this.opt.showVideoDefinition && this.createVideoDefinition(), this.createSelectVideoFull(), this.initEvent() } }, { key: "launchFullScreen", value: function (e) { /IE9|IE10/i.test(this.browserV) ? this.launchFullScreenIE11L() : (e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen(), this.launchFullScreenStyle(e)), this.updateFullScreenState(!0) } }, { key: "launchFullScreenStyle", value: function () { this.opt.ele.style.width = "100%", this.opt.ele.style.height = "100%" } }, { key: "launchFullScreenIE11L", value: function () { var e = this.opt.ele.className; this.opt.ele.className = e + " ie-fullscreen" } }, { key: "exitFullscreen", value: function () { /IE9|IE10/i.test(this.browserV) ? this.exitFullscreenIE11L() : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() } }, { key: "exitFullscreenIE11L", value: function () { this.updateFullScreenState(!1); var e = this.opt.ele.className; this.opt.ele.className = e.split(" ").slice(e.split(" ").indexOf("ie-fullscreen"), 1), this.opt.ele.style.width = this.opt.width, this.opt.ele.style.height = this.opt.height } }, { key: "exitFullScreenStyle", value: function () { this.updateFullScreenState(!1), this.opt.ele.style.width = this.opt.width, this.opt.ele.style.height = this.opt.height } }, { key: "updateVideoSize", value: function (e, t) { if (!e || !t) throw Error("noneeleerror", "请填写信息"); this.updateFullScreenState(!1), this.opt.ele.style.width = e + "px", this.opt.ele.style.height = t + "px", this.opt.width = e + "px", this.opt.height = t + "px" } }, { key: "updateFullScreenState", value: function (e) { this.isFull = e || !1; var t = this.isFull ? "Dvideo-menu-fullscreenConfig icon-canclefullscreen" : "Dvideo-menu-fullscreenConfig icon-fullscreen", i = this.isFull ? "取消全屏" : "全屏"; this.fullscreenConfig.className = t, this.fullscreenConfig.title = i; var o = this.isFull ? "Dvideo-content full" : "Dvideo-content"; this.videoC.className = o } }, { key: "screenChangeEvent", value: function (e) { var t = this; if (/IE11/i.test(this.browserV)) document.onkeydown = function (e) { 27 === (window.event ? e.keyCode : e.which) && t.isFull && t.exitFullScreenStyle() }; else if (/IE9|IE10/i.test(this.browserV)) document.onkeydown = function (e) { 27 === (window.event ? e.keyCode : e.which) && t.isFull && t.exitFullscreenIE11L() }; else for (var i = ["webkitfullscreenchange", "mozfullscreenchange", "fullscreenchange", "msfullscreenchange"], o = 0; o < i.length; o++)document.addEventListener(i[o], function () { var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement; document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msIsFullScreen; e ? (console.log("全屏"), t.launchFullScreenStyle(t.opt.ele)) : (console.log("不是全屏"), t.exitFullScreenStyle()) }) } }, { key: "browserVersion", value: function () { var e = navigator.userAgent, t = /(msie\s|trident.*rv:)([\w.]+)/, i = /(firefox)\/([\w.]+)/, o = /(opera).+version\/([\w.]+)/, n = /(chrome)\/([\w.]+)/, a = /version\/([\w.]+).*(safari)/, s = void 0, l = void 0; e.toLowerCase(); var r = function (e) { var s = t.exec(e); return null != s ? { browser: "IE", version: s[2] || "0" } : null != (s = i.exec(e)) ? { browser: s[1] || "", version: s[2] || "0" } : null != (s = o.exec(e)) ? { browser: s[1] || "", version: s[2] || "0" } : null != (s = n.exec(e)) ? { browser: s[1] || "", version: s[2] || "0" } : null != (s = a.exec(e)) ? { browser: s[2] || "", version: s[1] || "0" } : null != s ? { browser: "", version: "0" } : void 0 }(e.toLowerCase()); return r.browser && (s = r.browser, l = r.version), s + l } }, { key: "showTopBottomCtrl", value: function (e) { clearTimeout(this.showCtrlT), this.videoCtrl.className = "Dvideo-ctrl active", this.videoHeader.className = "", e && this.hideTopBottomCtrl() } }, { key: "hideTopBottomCtrl", value: function (e) { clearTimeout(this.showCtrlT); var t = this; e ? (this.videoCtrl.className = "Dvideo-ctrl", this.videoHeader.className = "", this.hideProgressRange()) : this.showCtrlT = setTimeout(function () { t.videoCtrl.className = "Dvideo-ctrl", t.videoHeader.className = "", t.hideProgressRange() }, t.opt.ctrSpeedDuration) } }, { key: "showProgressRange", value: function () { this.videoProressC.className = "Dvideo-progress-content active" } }, { key: "hideProgressRange", value: function () { this.videoProressC.className = "Dvideo-progress-content" } }, {
        key: "videoPlay", value: function () {
          try {
            this.videoEle.play(), this.isPlaying = !0;
            if (this.isPlaying == true) {
              videoBtn11.style.display = "none";
            }
          } catch (e) { console.log(e) }
        }
      }, {
        key: "videoPause", value: function () {
          try {
            this.videoEle.pause(), this.isPlaying = !1, console.log(this.isPlaying + "222222")
            if (this.isPlaying == false) {
              videoBtn11.style.display = "inherit";
            }

          } catch (e) { console.log(e) }
        }
      }, { key: "videoPlayPause", value: function () { this.isPlaying ? this.videoPause() : this.videoPlay() } }, { key: "showLoading", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "视频加载中,请稍等  或者切换稍低的清晰度"; e ? (this.tipsInfo.innerText = t, this.tipsInfo.className = "Dvideo-tips-info") : this.tipsInfo.className = "Dvideo-tips-info hide" } }, { key: "videoForward", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10; this.videoEle.currentTime && (this.currentT = this.currentT + e > this.durationT ? this.durationT : this.currentT + e, this.videoEle.currentTime = this.currentT, this.updatePorgress()) } }, { key: "videoRewind", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10; this.videoEle.currentTime && (this.currentT = this.currentT - e < 0 ? 0 : this.currentT - e, this.videoEle.currentTime = this.currentT, this.updatePorgress()) } }, { key: "videoSeek", value: function (e) { e > this.durationT || this.videoEle.currentTime && (this.videoEle.currentTime = e, this.updatePorgress()) } }, { key: "initEvent", value: function () { var e = this; document.onkeydown = function (t) { var i = t || window.event; 32 === (i.keyCode || i.which || i.charCode) && (i.stopPropagation(), i.preventDefault(), e.videoPlayPause()), 39 === (i.keyCode || i.which || i.charCode) && (i.stopPropagation(), i.preventDefault(), e.showTopBottomCtrl(), e.videoForward(10)), 37 === (i.keyCode || i.which || i.charCode) && (i.stopPropagation(), i.preventDefault(), e.showTopBottomCtrl(), e.videoRewind(10)), 38 === (i.keyCode || i.which || i.charCode) && (i.stopPropagation(), i.preventDefault(), e.showTopBottomCtrl(), e.volume = 1 * e.volume + .02 > 1 ? 1 : 1 * e.volume + .02, e.setVolume()), 40 === (i.keyCode || i.which || i.charCode) && (i.stopPropagation(), i.preventDefault(), e.showTopBottomCtrl(), e.volume = 1 * e.volume - .02 < 0 ? 0 : 1 * e.volume - .02, e.setVolume()) }, e.screenChangeEvent() } }, { key: "onPlaying", value: function () { this.opt.onPlaying(this.currentT) } }, { key: "onPause", value: function () { this.opt.onPause() } }, { key: "onLoadedMetaData", value: function () { this.opt.onLoadedMetaData() } }, { key: "onTimeupdate", value: function () { this.opt.onTimeupdate(this.currentT) } }, { key: "onEnded", value: function () { this.opt.onEnded() } }, { key: "formartTime", value: function (e) { var t = function (e) { return (e = e.toString())[1] ? e : "0" + e }, i = Math.floor(e / 60), o = Math.floor(e % 60); return t(i) + ":" + t(o) } }, { key: "setVideoDefinition", value: function (e) { this.showLoading(!0, "视频清晰度切换中，请稍等"); var t = e.target.getAttribute("data-index"), i = e.target.getAttribute("data-type"); this.currentT = this.videoEle.currentTime, this.opt.videoDefinition = { activeIndex: t, definitionList: this.opt.videoDefinition.definitionList }, this.videoDefinitionText.title = this.opt.videoDefinition.definitionList[t].name, this.videoDefinitionText.innerText = this.opt.videoDefinition.definitionList[t].name, this.setLStorage("D-videoDefinition", JSON.stringify(this.opt.videoDefinition)), this.getDomByClass("Dvideo-definition-list active")[0].className = "Dvideo-definition-list", e.target.className = "Dvideo-definition-list active", this.videoDefinitionC.style.display = "none", this.opt.setVideoDefinition(i, e, this.currentT) } }, { key: "setVideoInfo", value: function (e, t, i) { var o = this; this.isLoadMate = !1, this.isPlaying = !1, this.videoEle.src = t || "", this.videoHeaderTitle.innerText = e || "这是一个title", this.videoHeaderTitle.title = e || "这是一个title"; var n = setInterval(function () { o.isLoadMate && (clearInterval(n), o.videoEle.currentTime = i || 0), o.videoPlay() }, 500) } }, { key: "setPlayBackRate", value: function (e) { this.playbackR = this.opt.playbackRate.rateList[e], this.videoEle.playbackRate = this.playbackR, this.playbackRateText.title = this.playbackR.toFixed(1) + " x", this.playbackRateText.innerText = this.playbackR.toFixed(1) + " x", this.opt.playbackRate = { activeIndex: e, rateList: this.opt.playbackRate.rateList }, this.setLStorage("D-playbackRate", JSON.stringify(this.opt.playbackRate)), this.getDomByClass("Dvideo-playbackRate-list active")[0].className = "Dvideo-playbackRate-list", this.getDomByClass("Dvideo-playbackRate-list")[e].className = "Dvideo-playbackRate-list active", this.playbackRateC.style.display = "none" } }, { key: "updatePorgress", value: function () { if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) { this.circleRange.style.left = this.dragProgressTo + "px", this.realProress.style.width = this.dragProgressTo + "px"; var e = Math.floor(this.dragProgressTo / this.maxProgressWidth * this.durationT); this.textCurrentT.innerText = this.formartTime(e) } else this.currentP = Number(this.currentT / this.durationT * 100), this.currentP = this.currentP > 100 ? 100 : this.currentP, this.realProress.style.width = this.currentP + "%", this.circleRange.style.left = this.currentP + "%", this.textCurrentT.innerText = this.formartTime(this.videoEle.currentTime) } }, { key: "nextVideo", value: function () { console.log("你点击了播放下一集   可使用实例化的对象调用nextVideo 方法实现播放下一集的效果"), "function" == typeof this.opt.nextVideoExtend && this.opt.nextVideoExtend() } }, { key: "setVolume", value: function () { var e = this.volume / 1; this.updateVolume(e) } }, { key: "createPlaybackRateList", value: function () { var e = this.opt.showPlayBackRateUnFull ? "" : "none", t = document.createDocumentFragment(), i = this.hasLStorage("D-playbackRate") ? JSON.parse(this.getLStorage("D-playbackRate")) : this.opt.playbackRate, o = Number(i.activeIndex), n = Number(i.rateList[o]); this.playbackRate = document.createElement("span"), this.playbackRate.className = "Dvideo-playbackRate " + e, this.menuRightC.appendChild(this.playbackRate), this.playbackRateText = document.createElement("span"), this.playbackRateText.className = "Dvideo-playbackRateText", this.videoEle.playbackRate = n, this.playbackRateText.title = n.toFixed(1) + " x", this.playbackRateText.innerText = n.toFixed(1) + " x", this.playbackRate.appendChild(this.playbackRateText), this.playbackRateC = document.createElement("div"), this.playbackRateC.className = "Dvideo-playbackRate-content", this.playbackRate.appendChild(this.playbackRateC); for (var a = 0; a < i.rateList.length; a++) { var s = document.createElement("span"); s.className = a === o ? "Dvideo-playbackRate-list active" : "Dvideo-playbackRate-list", s.title = i.rateList[a].toFixed(1) + "x", s.innerText = i.rateList[a].toFixed(1) + "x", s.setAttribute("data-index", a), t.appendChild(s) } this.playbackRateC.appendChild(t); var l = this; l.playbackRate.onmouseenter = function (e) { l.playbackRateC.style.display = "block" }, l.playbackRate.onmouseleave = function (e) { l.playbackRateC.style.display = "none" }, l.playbackRateC.onclick = function (e) { var t = (e || window.event).target.getAttribute("data-index"); l.setPlayBackRate(t) } } }, { key: "createCurrentDurationText", value: function () { var e = document.createDocumentFragment(); this.textVideoTimeC = document.createElement("div"), this.textVideoTimeC.className = "Dvideo-time-content", this.videoCtrlDetail.appendChild(this.textVideoTimeC), this.textCurrentT = document.createElement("span"), this.textCurrentT.className = "Dvideo-text-current", this.textCurrentT.innerText = "--:-- ", e.appendChild(this.textCurrentT), this.textDurationT = document.createElement("span"), this.textDurationT.className = "Dvideo-text-duration", this.textDurationT.innerText = " --:--", e.appendChild(this.textDurationT), this.textVideoTimeC.appendChild(e) } }, { key: "createPcProgress", value: function () { this.videoProressC = document.createElement("div"), this.videoProressC.className = "Dvideo-progress-content", this.videoCtrl.appendChild(this.videoProressC), this.videoProressD = document.createElement("div"), this.videoProressD.className = "Dvideo-progress-detail", this.videoProressC.appendChild(this.videoProressD), this.bufferedProress = document.createElement("div"), this.bufferedProress.className = "Dvideo-progress-buffered", this.videoProressD.appendChild(this.bufferedProress), this.realProress = document.createElement("div"), this.realProress.className = "Dvideo-progress-real", this.videoProressD.appendChild(this.realProress), this.circleRange = document.createElement("span"), this.circleRange.className = "Dvideo-circle-range", this.videoProressC.appendChild(this.circleRange); var e = this; e.videoProressD.onclick = function (t) { var i = t || window.event, o = e.videoProressD.offsetWidth, n = i.offsetX; e.videoEle.currentTime = e.currentT = Math.floor(n / o * e.durationT), e.updatePorgress() }, e.circleRange.onmousedown = function (t) { e.isDrag = !0; var i = t || window.event, o = i.clientX, n = t.target.offsetLeft + 7; i.stopPropagation(), e.maxProgressWidth = e.videoProressD.offsetWidth, e.videoCtrl.onmousemove = function (t) { var i = t || window.event; if (e.isDrag) { var a = i.clientX; e.dragProgressTo = Math.min(e.maxProgressWidth, Math.max(0, n + (a - o))), e.updatePorgress(!0) } }, e.videoCtrl.onmouseup = function (t) { (t || window.event).stopPropagation(), e.isDrag && (e.isDrag = !1, e.videoEle.currentTime = Math.floor(e.dragProgressTo / e.maxProgressWidth * e.durationT)) }, e.videoCtrl.onmouseleave = function (t) { (t || window.event).stopPropagation(), e.isDrag && (e.isDrag = !1, e.videoEle.currentTime = Math.floor(e.dragProgressTo / e.maxProgressWidth * e.durationT), e.hideTopBottomCtrl()) } } } }, {
        key: "createVideoEle", value: function () {
          this.videoEle = document.createElement("video"), this.videoEle.className = "Dvideo-ele", this.videoEle.src = this.opt.src, this.videoEle.loop = this.opt.loop, this.videoEle.autoplay = this.opt.autoplay, this.videoEle.poster = this.opt.poster, this.videoC.appendChild(this.videoEle); var e = this; e.videoEle.onloadstart = function () { e.showLoading(!0, "视频加载中，请稍等") }, e.videoEle.oncanplay = function () { e.showLoading(!1) }, e.videoEle.onplaying = function () { e.isPlaying = !0, e.videoPlayPauseI.className = "Dvideo-ctrl-playPause icon-pause", e.videoPlayPauseI.title = "暂停 space"; var t = new Date; e.reduceTBefore = Date.parse(t) - Math.floor(1e3 * e.videoEle.currentTime), e.showLoading(!1), e.onPlaying() },
            // =============================中间按钮的播放事件============
            videoBtn11.addEventListener('click', function () {
              videoBtn11.style.display = "none";
              e.videoEle.play();
            })
            // =============================中间按钮的播放事件============
            , e.videoEle.onpause = function () { e.isPlaying = !1, e.videoPlayPauseI.className = "Dvideo-ctrl-playPause icon-play", e.videoPlayPauseI.title = "播放 space", e.onPause() }, e.videoEle.onloadedmetadata = function () { e.isLoadMate = !0, e.durationT = e.videoEle.duration, e.textDurationT.innerText = e.formartTime(e.durationT), e.onLoadedMetaData() }, e.videoEle.ontimeupdate = function () { if (!e.isDrag) { e.currentT = e.videoEle.currentTime, e.updatePorgress(); var t = new Date; e.reduceTBefore = Date.parse(t) - Math.floor(1e3 * e.currentT) } e.onTimeupdate() }, e.videoEle.onprogress = function () { if (e.videoEle.buffered.length > 0) { for (var t = 0, i = 0; i < e.videoEle.buffered.length; i++)(t += e.videoEle.buffered.end(i) - e.videoEle.buffered.start(i)) > e.durationT && (t = e.durationT, console.log("缓冲完成")); var o = Math.floor(t / e.durationT * 100); e.bufferedProress.style.width = o + "%" } else console.log("未缓冲"); var n = new Date; e.videoEle.paused || (e.reduceTAfter = Date.parse(n) - Math.floor(1e3 * e.currentT), e.reduceTAfter - e.reduceTBefore > 1e3 ? e.showLoading(!0) : e.showLoading(!1)) }, e.videoEle.onended = function () { e.onEnded() }, e.videoEle.onwaiting = function () { e.showLoading(!0, "视频加载中,请稍等") }
        }
      }, { key: "createVideoC", value: function () { this.videoC = document.createElement("div"), this.videoC.className = "Dvideo-content", this.opt.ele.appendChild(this.videoC); var e = this; e.videoC.onmousemove = function () { e.showTopBottomCtrl(!0) }; var t = 0; e.videoC.onclick = function () { var i = (new Date).valueOf(); i - t > 500 ? e.isPlaying ? e.videoPause() : e.videoPlay() : e.isFull ? e.exitFullscreen() : e.launchFullScreen(e.opt.ele), t = i } } }, { key: "createCtrlC", value: function () { this.videoCtrl = document.createElement("div"), this.videoCtrl.className = "Dvideo-ctrl", this.videoC.appendChild(this.videoCtrl), this.videoCtrlDetail = document.createElement("div"), this.videoCtrlDetail.className = "Dvideo-detail", this.videoCtrl.appendChild(this.videoCtrlDetail); var e = this; e.videoCtrl.onmouseenter = function () { e.showProgressRange() }, e.videoCtrl.onclick = function (e) { e.stopPropagation() } } }, { key: "createHeaderC", value: function () { this.videoHeader = document.createElement("div"), this.videoHeader.className = "", this.videoC.appendChild(this.videoHeader), this.videoHeaderTitle = document.createElement("p"), this.videoHeaderTitle.className = "Dvideo-header-title", this.videoHeaderTitle.innerText = this.opt.title, this.videoHeaderTitle.title = this.opt.title, this.videoHeader.appendChild(this.videoHeaderTitle); this.videoHeader.onclick = function (e) { e.stopPropagation() } } }, { key: "createSelectVideoFull", value: function () { var e = this.isFull ? "全屏" : "取消全屏"; this.fullscreenConfig = document.createElement("i"), this.fullscreenConfig.className = "Dvideo-menu-fullscreenConfig icon-fullscreen", this.fullscreenConfig.title = e, this.menuRightC.appendChild(this.fullscreenConfig), this.updateFullScreenState(this.isFull); var t = this; t.fullscreenConfig.onclick = function () { t.isFull ? t.exitFullscreen() : t.launchFullScreen(t.opt.ele) } } }, { key: "createvideoPlayState", value: function () { this.videoCtrlStateC = document.createElement("div"), this.videoCtrlStateC.className = "Dvideo-ctrl-state", this.videoCtrlDetail.appendChild(this.videoCtrlStateC); var e = this.isPlaying ? "icon-pause" : "icon-play", t = this.isPlaying ? "暂停 space" : "播放 space"; this.videoPlayPauseI = document.createElement("i"), this.videoPlayPauseI.className = "Dvideo-ctrl-playPause " + e, this.videoPlayPauseI.title = t, this.videoCtrlStateC.appendChild(this.videoPlayPauseI); var i = this.opt.showNext ? "inline-block" : "none"; this.videoNextI = document.createElement("i"), this.videoNextI.className = "Dvideo-ctrl-next icon-nextdetail", this.videoNextI.title = "下一集 next", this.videoNextI.style.display = i, this.videoCtrlStateC.appendChild(this.videoNextI); var o = this; o.videoNextI.onclick = function () { o.nextVideo() }, o.videoPlayPauseI.onclick = function () { o.isPlaying ? o.videoPause() : o.videoPlay() } } }, { key: "createVideoTips", value: function () { this.tipsInfo = document.createElement("div"), this.tipsInfo.className = "Dvideo-tips-info", this.videoCtrl.appendChild(this.tipsInfo) } }, { key: "createVideoDefinition", value: function () { var e = this.opt.showVideoDefinitionUnFull ? "" : "none", t = document.createDocumentFragment(), i = this.hasLStorage("D-videoDefinition") ? JSON.parse(this.getLStorage("D-videoDefinition")) : this.opt.videoDefinition, o = Number(i.activeIndex), n = (i.definitionList[o].type, i.definitionList[o].name); this.videoDefinition = document.createElement("span"), this.videoDefinition.className = "Dvideo-definition " + e, this.menuRightC.appendChild(this.videoDefinition), this.videoDefinitionText = document.createElement("span"), this.videoDefinitionText.className = "Dvideo-definitionText", this.videoDefinitionText.title = n, this.videoDefinitionText.innerText = n, this.videoDefinition.appendChild(this.videoDefinitionText), this.videoDefinitionC = document.createElement("div"), this.videoDefinitionC.className = "Dvideo-definition-content", this.videoDefinition.appendChild(this.videoDefinitionC); for (var a = 0; a < i.definitionList.length; a++) { var s = document.createElement("span"); s.className = a === o ? "Dvideo-definition-list active" : "Dvideo-definition-list", s.title = i.definitionList[a].name, s.innerText = i.definitionList[a].name, s.setAttribute("data-index", a), s.setAttribute("data-type", i.definitionList[a].type), t.appendChild(s) } this.videoDefinitionC.appendChild(t); var l = this; l.videoDefinition.onmouseenter = function (e) { l.videoDefinitionC.style.display = "block" }, l.videoDefinition.onmouseleave = function (e) { l.videoDefinitionC.style.display = "none" }, l.videoDefinition.onclick = function (e) { var t = e || window.event; l.setVideoDefinition(t) } } }, { key: "createVolume", value: function () { var e = this.opt.showVolumeUnFull ? "" : "none"; this.videoVolumeC = document.createElement("div"), this.videoVolumeC.className = "Dvideo-volume " + e, this.menuRightC.appendChild(this.videoVolumeC), this.videoVolumeP = document.createElement("div"), this.videoVolumeP.className = "Dvideo-volume-P", this.videoVolumeC.appendChild(this.videoVolumeP), this.videoVolumeR = document.createElement("div"), this.videoVolumeR.className = "Dvideo-volume-R", this.videoVolumeP.appendChild(this.videoVolumeR), this.videoVolumeRange = document.createElement("div"), this.videoVolumeRange.className = "Dvideo-volume-range", this.videoVolumeC.appendChild(this.videoVolumeRange), this.initVolume(); var t = !1, i = this, o = 0; i.videoVolumeRange.onmousedown = function (e) { t = !0; var n = e || window.event, a = n.clientX, s = e.target.offsetLeft + 6; n.stopPropagation(), i.maxVolumeWidth = i.videoVolumeC.offsetWidth, i.videoVolumeC.onmousemove = function (e) { if (t) { var n = (e || window.event).clientX; i.dragVolumeTo = Math.min(i.maxVolumeWidth, Math.max(0, s + (n - a))), o = i.dragVolumeTo / i.maxVolumeWidth, i.updateVolume(o) } }, i.videoVolumeC.onmouseup = function (e) { t = !1, n.stopPropagation(), n.preventDefault(), i.setLStorage("Dvideo-volume", o) }, i.videoVolumeC.onmouseleave = function (e) { t = !1, n.stopPropagation(), n.preventDefault(), i.setLStorage("Dvideo-volume", o) } }, i.videoVolumeP.onclick = function (e) { var t = e || window.event, o = i.videoVolumeP.offsetWidth, n = t.offsetX; i.updateVolume(n / o) } } }, { key: "updateVolume", value: function (e) { this.videoVolumeRange.style.left = 100 * e + "%", this.videoVolumeR.style.width = 100 * e + "%", this.videoVolumeRange.setAttribute("data-volume", Math.round(100 * e)), this.volume = e, this.videoEle.volume = e, this.setLStorage("Dvideo-volume", e) } }, { key: "initVolume", value: function () { if (null === this.getLStorage("Dvideo-volume")) this.updateVolume(.8), this.volume = .8; else { var e = this.getLStorage("Dvideo-volume"); this.updateVolume(e), this.volume = e } } }, { key: "getDomByClass", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; if ("function" === !o(document.getElementsByClassName)) { for (var t = [], i = document.getElementsByTagName("*"), n = new RegExp("\\b" + e + "\\b", "g"), a = 0; a < i.length; a++)-1 != i[a].className.search(n) && t.push(i[a]); return t } return document.getElementsByClassName(e) } }, { key: "lStorage", value: function () { return !!window.localStorage } }, { key: "hasLStorage", value: function (e) { return !!this.lStorage && !("undefind" === window.localStorage.getItem(e) || null === window.localStorage.getItem(e)) } }, { key: "setLStorage", value: function (e, t) { this.lStorage && window.localStorage.setItem(e, t) } }, { key: "getLStorage", value: function (e) { return this.lStorage ? window.localStorage.getItem(e) : "" } }, { key: "rmLStorage", value: function (e) { this.lStorage && window.localStorage.removeItem(e) } }, { key: "clearLStorage", value: function () { this.lStorage && window.localStorage.clear() } }]), e
    }(); t.default = a
  }, 1: function (e, t, i) { "use strict"; var o, n = i(0); var a = new ((o = n) && o.__esModule ? o : { default: o }).default({ width: "100%", height: "100%", nextVideoExtend: function () { alert("你点击了下一个视频") }, setVideoDefinition: function (e, t, i) { alert("类型：" + e + ", ---- 事件：" + t + ", ----- 当前时间：" + i) } }); document.querySelectorAll(".videoBtn").forEach(function (e, t) { e.onclick = function () { switch (t) { case 0: var e = document.getElementById("video"); a.launchFullScreen(e); break; case 1: a.videoPlay(); break; case 2: a.videoPause(); break; case 3: a.videoPlayPause(); break; case 4: a.updateVolume(1); break; case 5: a.updateVolume(.3); break; case 6: a.setPlayBackRate(3); break; case 7: a.setPlayBackRate(1); break; case 8: a.videoRewind(10); break; case 9: a.videoForward(10); break; case 10: a.showLoading(!0, "hihihi，你好呀！！！"); break; case 11: a.showLoading(!1); break; case 12: a.showTopBottomCtrl(); break; case 13: a.hideTopBottomCtrl(!0); break; case 14: a.showTopBottomCtrl(!0); break; case 15: a.hideTopBottomCtrl(); break; case 16: a.updateVideoSize(720, 480) } } }) }, 13: function (e, t) { }, 8: function (e, t) { }
});




