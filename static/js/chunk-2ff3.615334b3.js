(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2ff3"],{"1ohE":function(t,e,i){"use strict";var a=i("LYZ3");i.n(a).a},EGe3:function(t,e,i){"use strict";var a=i("oFWl");i.n(a).a},LYZ3:function(t,e,i){},ful1:function(t,e,i){"use strict";i.r(e);i("pIFo");var a=i("fnnb"),s=(i("xfY5"),{name:"SettingBread",props:{text1:{type:String,default:""},text2:{type:String,default:""},type:{type:Number,default:0},revise:{type:Function,default:function(){}}},methods:{onRevise:function(){alert(1)}}}),l=(i("1ohE"),i("KHd+")),n=Object(l.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{type:"flex",justify:"start"}},[i("el-col",{staticClass:"list-item-col",attrs:{span:22}},[i("el-row",{attrs:{align:"middle",type:"flex",justify:"center"}},[i("el-col",{attrs:{span:22}},[i("p",{staticClass:"list-item-title"},[t._v(t._s(t.text1))]),t._v(" "),i("p",{staticClass:"list-item-content"},[t._v(t._s(t.text2))])]),t._v(" "),i("el-col",{staticStyle:{height:"100%"},attrs:{span:2}},[i("div",{staticClass:"list-item-revise"},[i("p",[i("span",{on:{click:t.revise}},[t._v("修改")])])])])],1)],1)],1)},[],!1,null,"6a2a0ab9",null);n.options.__file="index.vue";var o=n.exports,r={tel:/^[1][3,4,5,7,8][0-9]{9}$/,switchText:/(\d{3})\d{4}(\d{4})/,mail:/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/},c=i("t3Un");var p={name:"PageSetting",components:{VueCropper:a.VueCropper,SettingBread:o},filters:{switchTel:function(t){return t?r.tel.test(t.trim())?t.replace(r.switchText,"$1****$2"):t:""}},data:function(){return{dialogVisible:!1,user:this.$store.state.user.token,nickname:"",synopsis:"",activeName:"baseSetting",breadList:[{text1:"账号密码",text2:"密码强度",type:0},{text1:"绑定手机",text2:"未绑定",type:1},{text1:"绑定邮箱",text2:"未绑定",type:2}],oldPwd:"",newPwd:"",againNewPwd:""}},created:function(){var t=this;Object(c.a)({url:"user/getSettingInfo",method:"get"}).then(function(e){var i=e.data;t.breadList[0].text2="密码强度:".concat(i.strength),t.breadList[1].text2=i.tel,t.breadList[2].text2=i.mail,t.nickname=i.nickname,t.synopsis=i.synopsis})},methods:{revise:function(t){this.dialogVisible=!0}}},u=(i("EGe3"),Object(l.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{"tab-position":"left"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本设置",name:"baseSetting"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("h3",{staticClass:"setting-title"},[t._v("基本设置")]),t._v(" "),a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{"status-icon":""}},[a("el-col",{attrs:{span:20}},[a("el-form-item",[a("p",[t._v("用户")]),t._v(" "),a("el-input",{attrs:{value:t.user,disabled:""}})],1),t._v(" "),a("el-form-item",[a("p",[t._v("昵称")]),t._v(" "),a("el-input",{model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),t._v(" "),a("el-form-item",[a("p",[t._v("个人简介")]),t._v(" "),a("el-input",{attrs:{rows:6,type:"textarea",autosize:""},model:{value:t.synopsis,callback:function(e){t.synopsis=e},expression:"synopsis"}})],1)],1)],1),t._v(" "),a("el-button",{staticClass:"btn-click",attrs:{size:"small",type:"primary"}},[t._v("更新基本信息")])],1),t._v(" "),a("el-col",{attrs:{span:13}},[a("div",{staticClass:"user-img"},[a("p",[t._v("头像")]),t._v(" "),a("img",{attrs:{src:i("5K4G"),alt:""}}),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-upload",{staticClass:"upload-demo",attrs:{limit:3,action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("div",{staticStyle:{"margin-left":"11.5px"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[a("i",{staticClass:"el-icon-upload el-icon--right"}),t._v("点击上传")])],1),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件")])])],1)])])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"安全设置",name:"safeSetting"}},[a("h3",{staticClass:"setting-title"},[t._v("安全设置")]),t._v(" "),t._l(t.breadList,function(e,i){return a("div",{key:i},[a("SettingBread",{attrs:{text1:e.text1,text2:t._f("switchTel")(e.text2),type:e.type,revise:t.revise.bind(this,e.type)}})],1)})],2)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible,title:"修改密码",width:"33%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{"label-position":"right","label-width":"90px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{model:{value:t.oldPwd,callback:function(e){t.oldPwd=e},expression:"oldPwd"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{model:{value:t.newPwd,callback:function(e){t.newPwd=e},expression:"newPwd"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认新密码"}},[a("el-input",{model:{value:t.againNewPwd,callback:function(e){t.againNewPwd=e},expression:"againNewPwd"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},[],!1,null,"c0ae6d10",null));u.options.__file="index.vue";e.default=u.exports},oFWl:function(t,e,i){}}]);