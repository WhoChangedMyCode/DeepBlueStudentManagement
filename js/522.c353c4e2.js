"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[522],{1522:function(e,l,a){a.r(l),a.d(l,{default:function(){return p}});var t=a(3396);const i=e=>((0,t.dD)("data-v-7693400a"),e=e(),(0,t.Cn)(),e),n={class:"add-layout"},o=i((()=>(0,t._)("span",null,"请点击确认是否删除用户",-1))),d={class:"dialog-footer"};function s(e,l,a,i,s,r){const u=(0,t.up)("el-table-column"),c=(0,t.up)("el-button"),p=(0,t.up)("el-table"),m=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(p,{data:s.tableData,style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{type:"index",label:"序号",width:"100",align:"center"}),(0,t.Wm)(u,{prop:"name",label:"姓名",align:"center"}),(0,t.Wm)(u,{prop:"department",label:"部门",align:"center"}),(0,t.Wm)(u,{prop:"iphone",label:"手机号",align:"center"}),(0,t.Wm)(u,{prop:"address",label:"地址",align:"center"}),(0,t.Wm)(u,{prop:"time",label:"入职时间",align:"center"}),(0,t.Wm)(u,{label:"操作",align:"center"},{default:(0,t.w5)((e=>[(0,t.Wm)(c,{style:{background:"rgb(255,98,99)"},size:"small",type:"danger",onClick:l=>r.handleDelete(e.$index,e.row)},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),(0,t.Wm)(m,{modelValue:s.dialogVisible,"onUpdate:modelValue":l[1]||(l[1]=e=>s.dialogVisible=e),title:"提示",width:"30%"},{footer:(0,t.w5)((()=>[(0,t._)("span",d,[(0,t.Wm)(c,{onClick:l[0]||(l[0]=e=>s.dialogVisible=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:1}),(0,t.Wm)(c,{type:"primary",onClick:r.deluser},{default:(0,t.w5)((()=>[(0,t.Uk)(" 确定 ")])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[o])),_:1},8,["modelValue"])])}var r={data(){return{tableData:[],dialogVisible:!1,idx:0}},methods:{handleDelete(e,l){this.dialogVisible=!0,this.idx=e,console.log(e),console.log(l)},deluser(){this.dialogVisible=!1,this.$store.commit("deltableData",this.idx)}},mounted(){this.tableData=this.$store.state.tableData}},u=a(89);const c=(0,u.Z)(r,[["render",s],["__scopeId","data-v-7693400a"]]);var p=c}}]);
//# sourceMappingURL=522.c353c4e2.js.map