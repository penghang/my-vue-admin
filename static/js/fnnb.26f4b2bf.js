(window.webpackJsonp=window.webpackJsonp||[]).push([["fnnb"],{fnnb:function(e,t,o){window,e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(e,t,o){var n=o(2);"string"==typeof n&&(n=[[e.i,n,""]]),o(4)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},function(e,t,o){"use strict";var n=o(0);o.n(n).a},function(e,t,o){(e.exports=o(3)(!1)).push([e.i,'\n.vue-cropper[data-v-6dae58fd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n.cropper-box[data-v-6dae58fd],\n.cropper-box-canvas[data-v-6dae58fd],\n.cropper-drag-box[data-v-6dae58fd],\n.cropper-crop-box[data-v-6dae58fd],\n.cropper-face[data-v-6dae58fd] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n}\n.cropper-box-canvas img[data-v-6dae58fd] {\n  position: relative;\n  text-align: left;\n  user-select: none;\n  transform: none;\n  max-width: none;\n  max-height: none;\n}\n.cropper-box[data-v-6dae58fd] {\n  overflow: hidden;\n}\n.cropper-move[data-v-6dae58fd] {\n  cursor: move;\n}\n.cropper-crop[data-v-6dae58fd] {\n  cursor: crosshair;\n}\n.cropper-modal[data-v-6dae58fd] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cropper-crop-box[data-v-6dae58fd] {\n  /*border: 2px solid #39f;*/\n}\n.cropper-view-box[data-v-6dae58fd] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-6dae58fd] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-face[data-v-6dae58fd] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n.crop-info[data-v-6dae58fd] {\n  position: absolute;\n  left: 0px;\n  min-width: 65px;\n  text-align: center;\n  color: white;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n}\n.crop-line[data-v-6dae58fd] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n}\n.line-w[data-v-6dae58fd] {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.line-a[data-v-6dae58fd] {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.line-s[data-v-6dae58fd] {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.line-d[data-v-6dae58fd] {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.crop-point[data-v-6dae58fd] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  opacity: 0.75;\n  background-color: #39f;\n  border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.point2[data-v-6dae58fd] {\n  top: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.point3[data-v-6dae58fd] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.point4[data-v-6dae58fd] {\n  top: 50%;\n  left: -4px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.point5[data-v-6dae58fd] {\n  top: 50%;\n  right: -4px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.point6[data-v-6dae58fd] {\n  bottom: -5px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.point7[data-v-6dae58fd] {\n  bottom: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.point8[data-v-6dae58fd] {\n  bottom: -5px;\n  right: -4px;\n  cursor: se-resize;\n}\n@media screen and (max-width: 500px) {\n.crop-point[data-v-6dae58fd] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    opacity: 0.45;\n    background-color: #39f;\n    border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n    top: -10px;\n    left: -10px;\n}\n.point2[data-v-6dae58fd],\n  .point4[data-v-6dae58fd],\n  .point5[data-v-6dae58fd],\n  .point7[data-v-6dae58fd] {\n    display: none;\n}\n.point3[data-v-6dae58fd] {\n    top: -10px;\n    right: -10px;\n}\n.point4[data-v-6dae58fd] {\n    top: 0;\n    left: 0;\n}\n.point6[data-v-6dae58fd] {\n    bottom: -10px;\n    left: -10px;\n}\n.point8[data-v-6dae58fd] {\n    bottom: -10px;\n    right: -10px;\n}\n}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){var n={},r=function(e){var t;return function(){return void 0===t&&(t=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),t}}(),i=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],h=o(5);function p(e,t){for(var o=0;o<e.length;o++){var r=e[o],i=n[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],t));n[r.id]={id:r.id,refs:1,parts:s}}}}function u(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):o.push(n[a]={id:a,parts:[s]})}return o}function d(e,t){var o=i(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),c.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertAt.before,o);o.insertBefore(t,r)}}function l(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function f(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=o.nc;n&&(e.attrs.nonce=n)}return g(t,e.attrs),d(e,t),t}function g(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function v(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;o=a||(a=f(t)),n=w.bind(null,o,c,!1),r=w.bind(null,o,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),d(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=h(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,o,t),r=function(){l(o),o.href&&URL.revokeObjectURL(o.href)}):(o=f(t),n=function(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){l(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=u(e,t);return p(o,t),function(e){for(var r=[],i=0;i<o.length;i++){var a=o[i];(s=n[a.id]).refs--,r.push(s)}for(e&&p(u(e,t),t),i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete n[s.id]}}}};var m=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function w(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"cropper",staticClass:"vue-cropper",on:{mouseover:e.scaleImg,mouseout:e.cancelScale}},[o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+e.x/e.scale+"px,"+e.y/e.scale+"px,0)rotateZ("+90*e.rotate+"deg)"}},[o("img",{ref:"cropperImg",attrs:{src:e.imgs,alt:"cropper-img"}})])]),e._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":e.move&&!e.crop,"cropper-crop":e.crop,"cropper-modal":e.cropping},on:{mousedown:e.startMove,touchstart:e.startMove}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:e.cropW+"px",height:e.cropH+"px",transform:"translate3d("+e.cropOffsertX+"px,"+e.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+(e.x-e.cropOffsertX)/e.scale+"px,"+(e.y-e.cropOffsertY)/e.scale+"px,0)rotateZ("+90*e.rotate+"deg)"},attrs:{src:e.imgs,alt:"cropper-img"}})]),e._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:e.cropMove,touchstart:e.cropMove}}),e._v(" "),e.info?o("span",{staticClass:"crop-info",style:{top:e.cropInfo.top}},[e._v("\n          "+e._s(this.cropInfo.width)+" × "+e._s(this.cropInfo.height)+"\n        ")]):e._e(),e._v(" "),e.fixedBox?e._e():o("span",[o("span",{staticClass:"crop-line line-w",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,1)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,1)}}}),e._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,1,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,1,0)}}}),e._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,2)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,2)}}}),e._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,2,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,2,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,1,1)},touchstart:function(t){e.changeCropSize(t,!0,!0,1,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,1)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,2,1)},touchstart:function(t){e.changeCropSize(t,!0,!0,2,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,1,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,1,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,2,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,2,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,1,2)},touchstart:function(t){e.changeCropSize(t,!0,!0,1,2)}}}),e._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,2)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,2)}}}),e._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,2,2)},touchstart:function(t){e.changeCropSize(t,!0,!0,2,2)}}})])])])};n._withStripped=!0;var r={getData:function(e){return new Promise(function(t,o){var n={};(function(e){var t=null;return new Promise(function(o,n){if(e.src)if(/^data\:/i.test(e.src))t=function(e){e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var t=atob(e),o=t.length,n=new ArrayBuffer(o),r=new Uint8Array(n),i=0;i<o;i++)r[i]=t.charCodeAt(i);return n}(e.src),o(t);else if(/^blob\:/i.test(e.src)){var r=new FileReader;r.onload=function(e){t=e.target.result,o(t)},function(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="blob",o.onload=function(e){200!=this.status&&0!==this.status||function(e){r.readAsArrayBuffer(e)}(this.response)},o.send()}(e.src)}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";t=i.response,o(t),i=null},i.open("GET",e.src,!0),i.responseType="arraybuffer",i.send(null)}else n("img error")})})(e).then(function(e){n.arrayBuffer=e,n.orientation=function(e){var t,o,n,r,i,a,s,c,h,p=new DataView(e),u=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(c=2;c<u;){if(255===p.getUint8(c)&&225===p.getUint8(c+1)){a=c;break}c++}if(a&&(o=a+10,"Exif"===function(e,t,o){var n,r="";for(n=t,o+=t;n<o;n++)r+=String.fromCharCode(e.getUint8(n));return r}(p,a+4,4)&&(i=p.getUint16(o),((r=18761===i)||19789===i)&&42===p.getUint16(o+2,r)&&(n=p.getUint32(o+4,r))>=8&&(s=o+n))),s)for(u=p.getUint16(s,r),h=0;h<u;h++)if(c=s+12*h+2,274===p.getUint16(c,r)){c+=8,t=p.getUint16(c,r);break}return t}(e),t(n)}).catch(function(e){o(e)})})}},i=r,a={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:Number,default:0},autoCropHeight:{type:Number,default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:Number,default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0}},computed:{cropInfo:function(){var e={};if(e.top=this.cropOffsertY>21?"-21px":"0px",e.width=this.cropW>0?this.cropW:0,e.height=this.cropH>0?this.cropH:0,this.infoTrue){var t=1;this.high&&!this.full&&(t=window.devicePixelRatio),1!==this.enlarge&!this.full&&(t=Math.abs(Number(this.enlarge))),e.width=e.width*t,e.height=e.height*t,this.full&&(e.width=e.width/this.scale,e.height=e.height/this.scale)}return e.width=e.width.toFixed(0),e.height=e.height.toFixed(0),e},isIE:function(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1;return t}},watch:{img:function(){this.checkedImg()},imgs:function(e){""!==e&&this.reload()},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(e,t){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()},autoCrop:function(e){e&&this.goAutoCrop()},rotate:function(){this.showPreview(),this.autoCrop&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{checkOrientationImage:function(e,t,o,n){var r=this,i=document.createElement("canvas"),a=i.getContext("2d");switch(a.save(),t){case 2:i.width=o,i.height=n,a.translate(o,0),a.scale(-1,1);break;case 3:i.width=o,i.height=n,a.translate(o/2,n/2),a.rotate(180*Math.PI/180),a.translate(-o/2,-n/2);break;case 4:i.width=o,i.height=n,a.translate(0,n),a.scale(1,-1);break;case 5:i.height=o,i.width=n,a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:i.width=n,i.height=o,a.translate(n/2,o/2),a.rotate(90*Math.PI/180),a.translate(-o/2,-n/2);break;case 7:i.height=o,i.width=n,a.rotate(.5*Math.PI),a.translate(o,-n),a.scale(-1,1);break;case 8:i.height=o,i.width=n,a.translate(n/2,o/2),a.rotate(-90*Math.PI/180),a.translate(-o/2,-n/2);break;default:i.width=o,i.height=n}a.drawImage(e,0,0,o,n),a.restore(),i.toBlob(function(e){var t=URL.createObjectURL(e);r.imgs=t},"image/"+this.outputType,1)},checkedImg:function(){var e=this;if(""!==this.img){this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var t=new Image;if(t.onload=function(){if(""===e.img)return e.$emit("imgLoad","error"),!1;var o=t.width,n=t.height;i.getData(t).then(function(r){e.orientation=r.orientation||1;var i=e.maxImgSize;!e.orientation&&o<i&n<i?e.imgs=e.img:(o>i&&(n=n/o*i,o=i),n>i&&(o=o/n*i,n=i),e.checkOrientationImage(t,e.orientation,o,n))})},t.onerror=function(){e.$emit("imgLoad","error")},t.crossOrigin="",this.isIE){var o=new XMLHttpRequest;o.onload=function(){var e=URL.createObjectURL(this.response);t.src=e},o.open("GET",this.img,!0),o.responseType="blob",o.send()}else t.src=this.img}},startMove:function(e){if(e.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=(e.clientX?e.clientX:e.touches[0].clientX)-this.x,this.moveY=(e.clientY?e.clientY:e.touches[0].clientY)-this.y,e.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==e.touches.length&&(this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=e.offsetX?e.offsetX:e.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=e.offsetY?e.offsetY:e.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale:function(e){var t=this;e.preventDefault();var o=this.scale,n=this.touches[0].clientX,r=this.touches[0].clientY,i=e.touches[0].clientX,a=e.touches[0].clientY,s=this.touches[1].clientX,c=this.touches[1].clientY,h=e.touches[1].clientX,p=e.touches[1].clientY,u=Math.sqrt(Math.pow(n-s,2)+Math.pow(r-c,2)),d=Math.sqrt(Math.pow(i-h,2)+Math.pow(a-p,2))-u,l=1,f=(l=(l=l/this.trueWidth>l/this.trueHeight?l/this.trueHeight:l/this.trueWidth)>.1?.1:l)*d;if(!this.touchNow){if(this.touchNow=!0,d>0?o+=Math.abs(f):d<0&&o>Math.abs(f)&&(o-=Math.abs(f)),this.touches=e.touches,setTimeout(function(){t.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o}},cancelTouchScale:function(e){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(e){var t=this;if(e.preventDefault(),e.touches&&2===e.touches.length)return this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var o,n,r=e.clientX?e.clientX:e.touches[0].clientX,i=e.clientY?e.clientY:e.touches[0].clientY;o=r-this.moveX,n=i-this.moveY,this.$nextTick(function(){if(t.centerBox){var e,r,i,a,s=t.getImgAxis(o,n,t.scale),c=t.getCropAxis(),h=t.trueHeight*t.scale,p=t.trueWidth*t.scale;switch(t.rotate){case 1:case-1:case 3:case-3:e=t.cropOffsertX-t.trueWidth*(1-t.scale)/2+(h-p)/2,r=t.cropOffsertY-t.trueHeight*(1-t.scale)/2+(p-h)/2,i=e-h+t.cropW,a=r-p+t.cropH;break;default:e=t.cropOffsertX-t.trueWidth*(1-t.scale)/2,r=t.cropOffsertY-t.trueHeight*(1-t.scale)/2,i=e-p+t.cropW,a=r-h+t.cropH}s.x1>=c.x1&&(o=e),s.y1>=c.y1&&(n=r),s.x2<=c.x2&&(o=i),s.y2<=c.y2&&(n=a)}t.x=o,t.y=n,t.$emit("imgMoving",{moving:!0,axis:t.getImgAxis()})})},leaveImg:function(e){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()})},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize)},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(e){var t=this;e.preventDefault();var o=this.scale,n=e.deltaY||e.wheelDelta;n=navigator.userAgent.indexOf("Firefox")>0?30*n:n,this.isIE&&(n=-n);var r=this.coe,i=(r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth)*n;i<0?o+=Math.abs(i):o>Math.abs(i)&&(o-=Math.abs(i));var a=i<0?"add":"reduce";if(a!==this.coeStatus&&(this.coeStatus=a,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(function(){t.scaling=!1,t.coe=t.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o},changeScale:function(e){var t=this.scale;e=e||1;var o=20;if((e*=o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth)>0?t+=Math.abs(e):t>Math.abs(e)&&(t-=Math.abs(e)),!this.checkoutImgAxis(this.x,this.y,t))return!1;this.scale=t},createCrop:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches?e.touches[0].clientX:0,n=e.clientY?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick(function(){var e=o-t.cropX,r=n-t.cropY;if(e>0?(t.cropW=e+t.cropChangeX>t.w?t.w-t.cropChangeX:e,t.cropOffsertX=t.cropChangeX):(t.cropW=t.w-t.cropChangeX+Math.abs(e)>t.w?t.cropChangeX:Math.abs(e),t.cropOffsertX=t.cropChangeX+e>0?t.cropChangeX+e:0),t.fixed){var i=t.cropW/t.fixedNumber[0]*t.fixedNumber[1];i+t.cropOffsertY>t.h?(t.cropH=t.h-t.cropOffsertY,t.cropW=t.cropH/t.fixedNumber[1]*t.fixedNumber[0],t.cropOffsertX=e>0?t.cropChangeX:t.cropChangeX-t.cropW):t.cropH=i,t.cropOffsertY=t.cropOffsertY}else r>0?(t.cropH=r+t.cropChangeY>t.h?t.h-t.cropChangeY:r,t.cropOffsertY=t.cropChangeY):(t.cropH=t.h-t.cropChangeY+Math.abs(r)>t.h?t.cropChangeY:Math.abs(r),t.cropOffsertY=t.cropChangeY+r>0?t.cropChangeY+r:0)})},changeCropSize:function(e,t,o,n,r){e.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=t,this.canChangeY=o,this.changeCropTypeX=n,this.changeCropTypeY=r,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0)},changeCropNow:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches?e.touches[0].clientX:0,n=e.clientY?e.clientY:e.touches?e.touches[0].clientY:0,r=this.w,i=this.h,a=0,s=0;if(this.centerBox){var c=this.getImgAxis(),h=c.x2,p=c.y2;a=c.x1>0?c.x1:0,s=c.y1>0?c.y1:0,r>h&&(r=h),i>p&&(i=p)}this.$nextTick(function(){var e=o-t.cropX,c=n-t.cropY;if(t.canChangeX&&(1===t.changeCropTypeX?t.cropOldW-e>0?(t.cropW=r-t.cropChangeX-e<=r-a?t.cropOldW-e:t.cropOldW+t.cropChangeX-a,t.cropOffsertX=r-t.cropChangeX-e<=r-a?t.cropChangeX+e:a):(t.cropW=Math.abs(e)+t.cropChangeX<=r?Math.abs(e)-t.cropOldW:r-t.cropOldW-t.cropChangeX,t.cropOffsertX=t.cropChangeX+t.cropOldW):2===t.changeCropTypeX&&(t.cropOldW+e>0?(t.cropW=t.cropOldW+e+t.cropOffsertX<=r?t.cropOldW+e:r-t.cropOffsertX,t.cropOffsertX=t.cropChangeX):(t.cropW=r-t.cropChangeX+Math.abs(e+t.cropOldW)<=r-a?Math.abs(e+t.cropOldW):t.cropChangeX-a,t.cropOffsertX=r-t.cropChangeX+Math.abs(e+t.cropOldW)<=r-a?t.cropChangeX-Math.abs(e+t.cropOldW):a))),t.canChangeY&&(1===t.changeCropTypeY?t.cropOldH-c>0?(t.cropH=i-t.cropChangeY-c<=i-s?t.cropOldH-c:t.cropOldH+t.cropChangeY-s,t.cropOffsertY=i-t.cropChangeY-c<=i-s?t.cropChangeY+c:s):(t.cropH=Math.abs(c)+t.cropChangeY<=i?Math.abs(c)-t.cropOldH:i-t.cropOldH-t.cropChangeY,t.cropOffsertY=t.cropChangeY+t.cropOldH):2===t.changeCropTypeY&&(t.cropOldH+c>0?(t.cropH=t.cropOldH+c+t.cropOffsertY<=i?t.cropOldH+c:i-t.cropOffsertY,t.cropOffsertY=t.cropChangeY):(t.cropH=i-t.cropChangeY+Math.abs(c+t.cropOldH)<=i-s?Math.abs(c+t.cropOldH):t.cropChangeY-s,t.cropOffsertY=i-t.cropChangeY+Math.abs(c+t.cropOldH)<=i-s?t.cropChangeY-Math.abs(c+t.cropOldH):s))),t.canChangeX&&t.fixed){var h=t.cropW/t.fixedNumber[0]*t.fixedNumber[1];h+t.cropOffsertY>i?(t.cropH=i-t.cropOffsertY,t.cropW=t.cropH/t.fixedNumber[1]*t.fixedNumber[0]):t.cropH=h}if(t.canChangeY&&t.fixed){var p=t.cropH/t.fixedNumber[1]*t.fixedNumber[0];p+t.cropOffsertX>r?(t.cropW=r-t.cropOffsertX,t.cropH=t.cropW/t.fixedNumber[0]*t.fixedNumber[1]):t.cropW=p}})},changeCropEnd:function(e){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(e){if(e.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(e),!1;if(e.touches&&2===e.touches.length)return this.crop=!1,this.startMove(e),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var t,o,n=e.clientX?e.clientX:e.touches[0].clientX,r=e.clientY?e.clientY:e.touches[0].clientY;t=n-this.cropOffsertX,o=r-this.cropOffsertY,this.cropX=t,this.cropY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()})},moveCrop:function(e,t){var o=this,n=0,r=0;e&&(e.preventDefault(),n=e.clientX?e.clientX:e.touches[0].clientX,r=e.clientY?e.clientY:e.touches[0].clientY),this.$nextTick(function(){var e,i,a=n-o.cropX,s=r-o.cropY;if(t&&(a=o.cropOffsertX,s=o.cropOffsertY),e=a<=0?0:a+o.cropW>o.w?o.w-o.cropW:a,i=s<=0?0:s+o.cropH>o.h?o.h-o.cropH:s,o.centerBox){var c=o.getImgAxis();e<=c.x1&&(e=c.x1),e+o.cropW>c.x2&&(e=c.x2-o.cropW),i<=c.y1&&(i=c.y1),i+o.cropH>c.y2&&(i=c.y2-o.cropH)}o.cropOffsertX=e,o.cropOffsertY=i,o.$emit("cropMoving",{moving:!0,axis:o.getCropAxis()})})},getImgAxis:function(e,t,o){e=e||this.x,t=t||this.y,o=o||this.scale;var n={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*o,i=this.trueHeight*o;switch(this.rotate){case 0:n.x1=e+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=t+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o;break;case 1:case-1:case 3:case-3:n.x1=e+this.trueWidth*(1-o)/2+(r-i)/2,n.x2=n.x1+this.trueHeight*o,n.y1=t+this.trueHeight*(1-o)/2+(i-r)/2,n.y2=n.y1+this.trueWidth*o;break;default:n.x1=e+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=t+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o}return n},getCropAxis:function(){var e={x1:0,x2:0,y1:0,y2:0};return e.x1=this.cropOffsertX,e.x2=e.x1+this.cropW,e.y1=this.cropOffsertY,e.y2=e.y1+this.cropH,e},leaveCrop:function(e){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()})},getCropChecked:function(e){var t=this,o=document.createElement("canvas"),n=new Image,r=this.rotate,i=this.trueWidth,a=this.trueHeight,s=this.cropOffsertX,c=this.cropOffsertY;function h(e,t){o.width=Math.round(e),o.height=Math.round(t)}n.onload=function(){if(0!==t.cropW){var p=o.getContext("2d"),u=1;t.high&!t.full&&(u=window.devicePixelRatio),1!==t.enlarge&!t.full&&(u=Math.abs(Number(t.enlarge)),console.log(u));var d=t.cropW*u,l=t.cropH*u,f=i*t.scale*u,g=a*t.scale*u,v=(t.x-s+t.trueWidth*(1-t.scale)/2)*u,m=(t.y-c+t.trueHeight*(1-t.scale)/2)*u;switch(h(d,l),p.save(),r){case 0:t.full?(h(d/t.scale,l/t.scale),p.drawImage(n,v/t.scale,m/t.scale,f/t.scale,g/t.scale)):p.drawImage(n,v,m,f,g);break;case 1:case-3:t.full?(h(d/t.scale,l/t.scale),v=v/t.scale+(f/t.scale-g/t.scale)/2,m=m/t.scale+(g/t.scale-f/t.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g/t.scale,f/t.scale,g/t.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g,f,g));break;case 2:case-2:t.full?(h(d/t.scale,l/t.scale),p.rotate(90*r*Math.PI/180),v/=t.scale,m/=t.scale,p.drawImage(n,-v-f/t.scale,-m-g/t.scale,f/t.scale,g/t.scale)):(p.rotate(90*r*Math.PI/180),p.drawImage(n,-v-f,-m-g,f,g));break;case 3:case-1:t.full?(h(d/t.scale,l/t.scale),v=v/t.scale+(f/t.scale-g/t.scale)/2,m=m/t.scale+(g/t.scale-f/t.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f/t.scale,v,f/t.scale,g/t.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f,v,f,g));break;default:t.full?(h(d/t.scale,l/t.scale),p.drawImage(n,v/t.scale,m/t.scale,f/t.scale,g/t.scale)):p.drawImage(n,v,m,f,g)}p.restore()}else{var w=i*t.scale,x=a*t.scale,C=o.getContext("2d");switch(C.save(),r){case 0:h(w,x),C.drawImage(n,0,0,w,x);break;case 1:case-3:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,0,-x,w,x);break;case 2:case-2:h(w,x),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,-x,w,x);break;case 3:case-1:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,0,w,x);break;default:h(w,x),C.drawImage(n,0,0,w,x)}C.restore()}e(o)},"data"!==this.img.substr(0,4)&&(n.crossOrigin="Anonymous"),n.src=this.imgs},getCropData:function(e){var t=this;this.getCropChecked(function(o){e(o.toDataURL("image/"+t.outputType,t.outputSize))})},getCropBlob:function(e){var t=this;this.getCropChecked(function(o){o.toBlob(function(t){return e(t)},"image/"+t.outputType,t.outputSize)})},showPreview:function(){var e=this;if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout(function(){e.isCanShow=!0},16);var t=this.cropW,o=this.cropH,n=this.scale,r={};r.div={width:"".concat(t,"px"),height:"".concat(o,"px")};var i=(this.x-this.cropOffsertX)/n,a=(this.y-this.cropOffsertY)/n;r.w=t,r.h=o,r.url=this.imgs,r.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(n,")translate3d(").concat(i,"px, ").concat(a,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,"deg)")},r.html='\n      <div class="show-preview" style="width: '.concat(r.w,"px; height: ").concat(r.h,'px,; overflow: hidden">\n        <div style="width: ').concat(t,"px; height: ").concat(o,'px">\n          <img src=').concat(r.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,"px; transform:\n          scale(").concat(n,")translate3d(").concat(i,"px, ").concat(a,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,'deg)">\n        </div>\n      </div>'),this.$emit("realTime",r)},reload:function(){var e=this,t=new Image;t.onload=function(){e.w=parseFloat(window.getComputedStyle(e.$refs.cropper).width),e.h=parseFloat(window.getComputedStyle(e.$refs.cropper).height),e.trueWidth=t.width,e.trueHeight=t.height,e.original?e.scale=1:(e.trueWidth>e.w&&(e.scale=e.w/e.trueWidth),e.trueHeight*e.scale>e.h&&(e.scale=e.h/e.trueHeight)),e.$nextTick(function(){e.x=-(e.trueWidth-e.trueWidth*e.scale)/2+(e.w-e.trueWidth*e.scale)/2,e.y=-(e.trueHeight-e.trueHeight*e.scale)/2+(e.h-e.trueHeight*e.scale)/2,e.loading=!1,e.autoCrop&&e.goAutoCrop(),e.$emit("imgLoad","success")})},t.onerror=function(){e.$emit("imgLoad","error")},t.src=this.imgs},goAutoCrop:function(e,t){this.clearCrop(),this.cropping=!0;var o=this.w,n=this.h;if(this.centerBox){var r=this.trueWidth*this.scale,i=this.trueHeight*this.scale;o=r<o?r:o,n=i<n?i:n}var a=e||this.autoCropWidth,s=t||this.autoCropHeight;0!==a&&0!==s||(a=.8*o,s=.8*n),a=a>o?o:a,s=s>n?n:s,this.fixed&&(s=a/this.fixedNumber[0]*this.fixedNumber[1]),s>this.h&&(a=(s=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(a,s)},changeCrop:function(e,t){var o=this;this.cropW=e,this.cropH=t,this.cropOffsertX=(this.w-e)/2,this.cropOffsertY=(this.h-t)/2,this.centerBox&&this.$nextTick(function(){o.moveCrop(null,!0)})},refresh:function(){var e=this;this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(function(){e.checkedImg()})},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear:function(){this.rotate=0},checkoutImgAxis:function(e,t,o){e=e||this.x,t=t||this.y,o=o||this.scale;var n=!0;if(this.centerBox){var r=this.getImgAxis(e,t,o),i=this.getCropAxis();r.x1>=i.x1&&(n=!1),r.x2<=i.x2&&(n=!1),r.y1>=i.y1&&(n=!1),r.y2<=i.y2&&(n=!1)}return n}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";var e=this,t=navigator.userAgent;this.isIOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(t,o,n){for(var r=atob(this.toDataURL(o,n).split(",")[1]),i=r.length,a=new Uint8Array(i),s=0;s<i;s++)a[s]=r.charCodeAt(s);t(new Blob([a],{type:e.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop)}};o(1);var s=function(e,t,o,n,r,i,a,s){var c,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=[],h._compiled=!0),h._scopeId="data-v-"+i,c)if(h.functional){h._injectStyles=c;var p=h.render;h.render=function(e,t){return c.call(t),p(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:h}}(a,n,0,0,0,"6dae58fd");s.options.__file="src/vue-cropper.vue";var c=s.exports;o.d(t,"VueCropper",function(){return c});var h=function(e){e.component("VueCropper",c)};"undefined"!=typeof window&&window.Vue&&h(window.Vue),t.default={version:"0.4.6",install:h,VueCropper:c}}])}}]);