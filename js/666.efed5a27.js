"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[666],{9666:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(3396);const r={class:"add-layout"},n={class:"add-header"};function s(e,t,a,s,d,i){const c=(0,l.up)("el-input"),p=(0,l.up)("el-button"),o=(0,l.up)("el-table-column"),u=(0,l.up)("el-table");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",n,[(0,l.Wm)(c,{modelValue:d.searchText,"onUpdate:modelValue":t[0]||(t[0]=e=>d.searchText=e),placeholder:"请输入搜索的关键字"},null,8,["modelValue"]),(0,l.Wm)(p,{onClick:t[1]||(t[1]=e=>i.finduser()),type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)("查找")])),_:1})]),(0,l.Wm)(u,{data:d.tableData,style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{type:"index",label:"序号",width:"100",align:"center"}),(0,l.Wm)(o,{prop:"name",label:"姓名",align:"center"}),(0,l.Wm)(o,{prop:"department",label:"部门",align:"center"}),(0,l.Wm)(o,{prop:"iphone",label:"手机号",align:"center"}),(0,l.Wm)(o,{prop:"address",label:"地址",align:"center"}),(0,l.Wm)(o,{prop:"time",label:"入职时间",align:"center"})])),_:1},8,["data"])])}var d={data(){return{searchText:"",tableData:[]}},methods:{finduser(){var e=this.$store.state.tableData;this.tableData=e.filter(((e,t)=>{if(-1!=e.name.indexOf(this.searchText)||-1!=e.department.indexOf(this.searchText)||-1!=e.iphone.indexOf(this.searchText)||-1!=e.address.indexOf(this.searchText))return e}))}},mounted(){this.tableData=this.$store.state.tableData}},i=a(89);const c=(0,i.Z)(d,[["render",s],["__scopeId","data-v-9264e258"]]);var p=c}}]);
//# sourceMappingURL=666.efed5a27.js.map