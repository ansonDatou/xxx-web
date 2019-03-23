webpackJsonp([18],{ebNe:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={data:function(){return{visible:!1,dataForm:{userId:0,userNo:"",openid:"",appid:"",unionid:"",username:"",nickname:"",mobile:"",email:"",password:"",avatarUrl:"",gender:"",country:"",province:"",city:"",createTime:"",deleted:""},dataRule:{userNo:[{required:!0,message:"用户编号，7-10位随机数不能为空",trigger:"blur"}],openid:[{required:!0,message:"微信openid不能为空",trigger:"blur"}],appid:[{required:!0,message:"微信appid不能为空",trigger:"blur"}],unionid:[{required:!0,message:"微信unionid不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名==手机号不能为空",trigger:"blur"}],nickname:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],avatarUrl:[{required:!0,message:"头像不能为空",trigger:"blur"}],gender:[{required:!0,message:"0=未知，1=男，2=女不能为空",trigger:"blur"}],country:[{required:!0,message:"国家不能为空",trigger:"blur"}],province:[{required:!0,message:"省份不能为空",trigger:"blur"}],city:[{required:!0,message:"城市不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],deleted:[{required:!0,message:"0=未删除，1=删除不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.userId=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.userId&&a.$http({url:a.$http.adornUrl("/sys/appuser/info/"+a.dataForm.userId),method:"get",params:a.$http.adornParams()}).then(function(e){var r=e.data;r&&0===r.code&&(a.dataForm.userNo=r.user.userNo,a.dataForm.openid=r.user.openid,a.dataForm.appid=r.user.appid,a.dataForm.unionid=r.user.unionid,a.dataForm.username=r.user.username,a.dataForm.nickname=r.user.nickname,a.dataForm.mobile=r.user.mobile,a.dataForm.email=r.user.email,a.dataForm.password=r.user.password,a.dataForm.avatarUrl=r.user.avatarUrl,a.dataForm.gender=r.user.gender,a.dataForm.country=r.user.country,a.dataForm.province=r.user.province,a.dataForm.city=r.user.city,a.dataForm.createTime=r.user.createTime,a.dataForm.deleted=r.user.deleted)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/sys/appuser/"+(e.dataForm.userId?"update":"save")),method:"post",data:e.$http.adornData({userId:e.dataForm.userId||void 0,userNo:e.dataForm.userNo,openid:e.dataForm.openid,appid:e.dataForm.appid,unionid:e.dataForm.unionid,username:e.dataForm.username,nickname:e.dataForm.nickname,mobile:e.dataForm.mobile,email:e.dataForm.email,password:e.dataForm.password,avatarUrl:e.dataForm.avatarUrl,gender:e.dataForm.gender,country:e.dataForm.country,province:e.dataForm.province,city:e.dataForm.city,createTime:e.dataForm.createTime,deleted:e.dataForm.deleted})}).then(function(a){var r=a.data;r&&0===r.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(r.msg)})})}}},o={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[r("el-form-item",{attrs:{label:"用户编号，7-10位随机数",prop:"userNo"}},[r("el-input",{attrs:{placeholder:"用户编号，7-10位随机数"},model:{value:e.dataForm.userNo,callback:function(a){e.$set(e.dataForm,"userNo",a)},expression:"dataForm.userNo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信openid",prop:"openid"}},[r("el-input",{attrs:{placeholder:"微信openid"},model:{value:e.dataForm.openid,callback:function(a){e.$set(e.dataForm,"openid",a)},expression:"dataForm.openid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信appid",prop:"appid"}},[r("el-input",{attrs:{placeholder:"微信appid"},model:{value:e.dataForm.appid,callback:function(a){e.$set(e.dataForm,"appid",a)},expression:"dataForm.appid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信unionid",prop:"unionid"}},[r("el-input",{attrs:{placeholder:"微信unionid"},model:{value:e.dataForm.unionid,callback:function(a){e.$set(e.dataForm,"unionid",a)},expression:"dataForm.unionid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名==手机号",prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名==手机号"},model:{value:e.dataForm.username,callback:function(a){e.$set(e.dataForm,"username",a)},expression:"dataForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[r("el-input",{attrs:{placeholder:"用户昵称"},model:{value:e.dataForm.nickname,callback:function(a){e.$set(e.dataForm,"nickname",a)},expression:"dataForm.nickname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"手机号"},model:{value:e.dataForm.mobile,callback:function(a){e.$set(e.dataForm,"mobile",a)},expression:"dataForm.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.dataForm.email,callback:function(a){e.$set(e.dataForm,"email",a)},expression:"dataForm.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{placeholder:"密码"},model:{value:e.dataForm.password,callback:function(a){e.$set(e.dataForm,"password",a)},expression:"dataForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"头像",prop:"avatarUrl"}},[r("el-input",{attrs:{placeholder:"头像"},model:{value:e.dataForm.avatarUrl,callback:function(a){e.$set(e.dataForm,"avatarUrl",a)},expression:"dataForm.avatarUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"0=未知，1=男，2=女",prop:"gender"}},[r("el-input",{attrs:{placeholder:"0=未知，1=男，2=女"},model:{value:e.dataForm.gender,callback:function(a){e.$set(e.dataForm,"gender",a)},expression:"dataForm.gender"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"国家",prop:"country"}},[r("el-input",{attrs:{placeholder:"国家"},model:{value:e.dataForm.country,callback:function(a){e.$set(e.dataForm,"country",a)},expression:"dataForm.country"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"省份",prop:"province"}},[r("el-input",{attrs:{placeholder:"省份"},model:{value:e.dataForm.province,callback:function(a){e.$set(e.dataForm,"province",a)},expression:"dataForm.province"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"城市",prop:"city"}},[r("el-input",{attrs:{placeholder:"城市"},model:{value:e.dataForm.city,callback:function(a){e.$set(e.dataForm,"city",a)},expression:"dataForm.city"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[r("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createTime,callback:function(a){e.$set(e.dataForm,"createTime",a)},expression:"dataForm.createTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"0=未删除，1=删除",prop:"deleted"}},[r("el-input",{attrs:{placeholder:"0=未删除，1=删除"},model:{value:e.dataForm.deleted,callback:function(a){e.$set(e.dataForm,"deleted",a)},expression:"dataForm.deleted"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=r("VU/8")(t,o,!1,null,null,null);a.default=i.exports}});