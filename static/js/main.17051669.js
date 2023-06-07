(()=>{"use strict";var e={5621:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var i=n(9526),a=n(3535),o=n(3827),r=n(2982),s=n(5861),l=n(885),c=n(4333),d=n(8576),f=n(1133),u=n(7557),h=function(e){return e[e.SCROLLVIEW=0]="SCROLLVIEW",e[e.VIEW=1]="VIEW",e}({});function p(e){var t=e.viewType,n=e.children,i=c.SizeScheme.get().screen.height.min-145;return t===h.SCROLLVIEW?(0,u.jsx)(d.default,{style:{height:i},children:n}):(0,u.jsx)(f.default,{style:{minHeight:i},children:n})}var g=n(6075),x=n(5519),y="check_definitions",j="check_tasks",m=n(4637),S=n(9233),v=n(2727);function b(e){return e.showOptions?(0,u.jsx)(f.default,{style:{height:e.height,marginTop:10,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:e.buttons.map((function(t,n){return(0,u.jsx)(c.ButtonIcon,{faIcon:t.faIcon,handleClick:function(){t.handleClick(e.index)}},"dynamicButton_"+n)}))},"dynamicItem_"+e.index):(0,u.jsxs)(f.default,{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",marginTop:10,alignItems:"center",height:e.height},children:[(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.d,fontWeight:"bold",color:c.ColorScheme.get().secondary},children:e.index+1}),(0,u.jsx)(f.default,{style:{flex:1,paddingHorizontal:5},children:e.children}),(0,u.jsx)(c.ButtonIcon,{faIcon:g.faEllipsisVertical,handleClick:function(){e.openShowOptions(e.index)}})]},"dynamicItem_"+e.index)}function k(e){var t=e.navigation,n=(0,i.useState)([]),a=(0,l.default)(n,2),o=a[0],d=a[1],h=(0,i.useState)([]),y=(0,l.default)(h,2),k=y[0],O=y[1],I=(0,i.useState)(""),C=(0,l.default)(I,2),w=C[0],T=C[1],z=(0,i.useState)(!1),E=(0,l.default)(z,2),D=E[0],_=E[1],N=(0,i.useState)(-1),P=(0,l.default)(N,2),B=P[0],L=P[1],A=(0,x.useAsyncStorage)(j),J=(0,v.useIsFocused)(),W=function(){var e=(0,s.default)((function*(){var e=yield A.getItem();e||(e="[]");var t=JSON.parse(e);d(t)}));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){W()}),[J]),(0,u.jsxs)(c.Layout,{children:[(0,u.jsx)(c.Header,{navigation:t,title:"Check",buttons:[{faIcon:g.faCircleQuestion,handleClick:function(){window.open("https://mujdecisy.github.io/app/check-defined-tasks","blank")}},{faIcon:g.faList,handleClick:function(){t.push("Definitions")}}]}),(0,u.jsxs)(p,{children:[o.length<1&&(0,u.jsxs)(f.default,{children:[(0,u.jsx)(c.Takoz,{height:20}),(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.c,textAlign:"center"},children:"There is no task to do daily."}),(0,u.jsx)(c.Takoz,{height:20}),(0,u.jsx)(c.ButtonText,{label:"Add a Task",handleClick:function(){t.push("Definitions")}})]}),o.length>0&&o.map((function(e,n){return(0,u.jsx)(f.default,{children:(0,u.jsx)(b,{buttons:[{faIcon:g.faTrashCan,handleClick:function(){var e=(0,s.default)((function*(e){var t=(0,r.default)(k);t[e]=!1;var i=yield A.getItem(),a=JSON.parse(i);a.splice(n,1),yield A.setItem(JSON.stringify(a)),O(t),W()}));return function(t){return e.apply(this,arguments)}}()},{faIcon:g.faEdit,handleClick:function(e){L(e),T(o[e].note),_(!0)}},{faIcon:g.faCheck,handleClick:function(e){var t=(0,r.default)(k);t[e]=!1,O(t)}}],height:50,index:n,showOptions:k[n],openShowOptions:function(e){var t=(0,r.default)(k);t[e]=!0,O(t)},children:(0,u.jsx)(m.default,{onPress:function(){t.push("Task",{taskIndex:n})},children:(0,u.jsxs)(f.default,{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,u.jsxs)(f.default,{style:{paddingStart:10,flex:1},children:[(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.e,fontWeight:"bold"},children:e.title}),(0,u.jsx)(f.default,{style:{maxHeight:33,overflow:"hidden"},children:(0,u.jsx)(S.default,{children:e.note})})]}),(0,u.jsxs)(S.default,{style:{fontSize:c.SizeScheme.get().font.e},children:[e.checked.filter((function(e){return e})).length,"/",e.checked.length]})]})})})},"task_"+n)}))]}),(0,u.jsx)(c.Modal,{visible:D,handleClose:function(){_(!1)},style:{height:350},children:(0,u.jsxs)(f.default,{children:[(0,u.jsx)(c.Input,{label:"Add Note for Task",type:c.InputTypes.TEXT,settings:[c.Settings.TEXT_MULTILINE_6],value:[w],handleChange:function(e){T(e[0])}}),(0,u.jsx)(c.Takoz,{height:20}),(0,u.jsx)(c.ButtonText,{label:"Save Task",handleClick:(0,s.default)((function*(){var e=yield A.getItem();e||(e="[]");var t=JSON.parse(e);t[B].note=w,yield A.setItem(JSON.stringify(t)),_(!1);var n=(0,r.default)(k);n[B]=!1,O(n),W()}))})]})})]})}var O=n(5421);function I(e){var t=e.navigation,n=(0,x.useAsyncStorage)(y).getItem,a=(0,x.useAsyncStorage)(j),o=(0,i.useState)([]),r=(0,l.default)(o,2),d=r[0],h=r[1],b=(0,i.useState)(!1),k=(0,l.default)(b,2),I=k[0],C=k[1],w=(0,i.useState)(""),T=(0,l.default)(w,2),z=T[0],E=T[1],D=(0,i.useState)(-1),_=(0,l.default)(D,2),N=_[0],P=_[1],B=(0,v.useIsFocused)(),L=function(){var e=(0,s.default)((function*(){var e=yield n();e||(e="[]");var t=JSON.parse(e);h(t)}));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){L()}),[B]),(0,u.jsxs)(c.Layout,{children:[(0,u.jsx)(c.Header,{navigation:t,title:"Check",buttons:[{faIcon:g.faAdd,handleClick:function(){t.push("DefinitionEdit")}}]}),(0,u.jsxs)(p,{children:[(0,u.jsxs)(f.default,{children:[d.length<1&&(0,u.jsxs)(f.default,{children:[(0,u.jsx)(c.Takoz,{height:20}),(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.c,textAlign:"center"},children:"There is definition."}),(0,u.jsx)(c.Takoz,{height:20}),(0,u.jsx)(c.ButtonText,{label:"Create A Definition",handleClick:function(){t.push("DefinitionEdit")}})]}),d.length>0&&d.map((function(e,n){return(0,u.jsx)(m.default,{onPress:function(){t.push("DefinitionEdit",{index:n})},children:(0,u.jsxs)(f.default,{style:{marginBottom:20,borderBottomWidth:1,borderBottomColor:c.ColorScheme.get().secondary,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:5,paddingBottom:5},children:[(0,u.jsx)(c.ButtonIcon,{faIcon:g.faSquarePlus,handleClick:function(){P(n),E(""),C(!0)}}),(0,u.jsx)(f.default,{style:{flex:1,paddingHorizontal:10},children:(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.c},children:e.title})}),(0,u.jsxs)(f.default,{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.d},children:e.steps.length}),(0,u.jsx)(c.Takoz,{width:5}),(0,u.jsx)(O.FontAwesomeIcon,{icon:g.faShoePrints})]})]})},"def_"+n)}))]}),(0,u.jsx)(c.Modal,{visible:I,handleClose:function(){C(!1)},style:{height:375},children:(0,u.jsxs)(f.default,{children:[(0,u.jsx)(c.Input,{label:"Add Note for Task",type:c.InputTypes.TEXT,settings:[c.Settings.TEXT_MULTILINE_6],value:[z],handleChange:function(e){E(e[0])}}),(0,u.jsx)(c.Takoz,{height:10}),(0,u.jsx)(c.ButtonText,{label:"Add Task",handleClick:(0,s.default)((function*(){var e=yield a.getItem();e||(e="[]");var n=JSON.parse(e);n.push({note:z,definitionIndex:N,title:d[N].title,steps:d[N].steps,checked:d[N].steps.map((function(e){return!1}))}),yield a.setItem(JSON.stringify(n)),t.goBack()}))})]})})]})]})}function C(e){var t=e.navigation,n=e.route,a=(0,i.useState)(""),o=(0,l.default)(a,2),d=o[0],j=o[1],m=(0,i.useState)([{content:"",showOptions:!1}]),v=(0,l.default)(m,2),k=v[0],O=v[1],I=(0,x.useAsyncStorage)(y),C=I.getItem,w=I.setItem,T=function(){var e=(0,s.default)((function*(){var e=yield C(),t=JSON.parse(e);O(t[n.params.index].steps.map((function(e){return{content:e,showOptions:!1}}))),j(t[n.params.index].title)}));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){n.params&&void 0!==n.params.index&&T()}),[n.params]);var z=[];return n.params&&void 0!==n.params.index&&z.push({faIcon:g.faTrashCan,handleClick:function(){var e=(0,s.default)((function*(){var e=yield C(),i=JSON.parse(e);i.splice(n.params.index,1),w(JSON.stringify(i)),O(i.steps),t.goBack()}));return function(){return e.apply(this,arguments)}}()}),(0,u.jsxs)(c.Layout,{children:[(0,u.jsx)(c.Header,{navigation:t,title:"Check",buttons:[].concat(z,[{faIcon:g.faFloppyDisk,handleClick:function(){var e=(0,s.default)((function*(){var e=yield C();e||(e="[]");var i=JSON.parse(e);n.params&&void 0!==n.params.index?i[n.params.index]={title:d,steps:k.map((function(e){return e.content}))}:i.push({title:d,steps:k.map((function(e){return e.content}))}),w(JSON.stringify(i)),t.goBack()}));return function(){return e.apply(this,arguments)}}()}])}),(0,u.jsxs)(p,{viewType:h.SCROLLVIEW,children:[(0,u.jsx)(c.Input,{label:"Title",handleChange:function(e){return j(e[0])},value:[d],type:c.InputTypes.TEXT}),(0,u.jsx)(c.Takoz,{}),(0,u.jsxs)(f.default,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.c,fontWeight:"bold"},children:"Steps"}),(0,u.jsx)(c.ButtonIcon,{faIcon:g.faAdd,handleClick:function(){O([].concat((0,r.default)(k),[{content:"",showOptions:!1}]))}})]}),k.map((function(e,t){return(0,u.jsx)(b,{index:t,buttons:[{faIcon:g.faAngleUp,handleClick:function(e){if(e>0){var t=(0,r.default)(k),n=t[e];t[e]=t[e-1],t[e-1]=n,O(t)}}},{faIcon:g.faAngleDown,handleClick:function(e){if(e<k.length-1){var t=(0,r.default)(k),n=t[e];t[e]=t[e+1],t[e+1]=n,O(t)}}},{faIcon:g.faTrashCan,handleClick:function(e){var t=(0,r.default)(k);t.splice(e,1),O(t)}},{faIcon:g.faCheck,handleClick:function(e){var t=(0,r.default)(k);t[e].showOptions=!t[e].showOptions,O(t)}}],showOptions:k[t].showOptions,openShowOptions:function(e){if(k.every((function(e){return!1===e.showOptions}))){var t=(0,r.default)(k);t[e].showOptions=!t[e].showOptions,O(t)}},height:70,children:(0,u.jsx)(f.default,{style:{paddingStart:10,paddingTop:15},children:(0,u.jsx)(c.Input,{label:"",type:c.InputTypes.TEXT,value:[e.content],handleChange:function(e){var n=(0,r.default)(k);n[t].content=e[0],O(n)}})})},"DynamicListItem_"+t)}))]})]})}var w=n(4942);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function z(e){var t=e.navigation,n=e.route,a=(0,i.useState)({}),o=(0,l.default)(a,2),r=o[0],d=o[1],h=(0,x.useAsyncStorage)(j),g=function(){var e=(0,s.default)((function*(){if(n.params&&void 0!==n.params.taskIndex){var e=yield h.getItem();e||(e="[]");var t=JSON.parse(e);console.log(t[n.params.taskIndex]),d(t[n.params.taskIndex])}}));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){g()}),[]),(0,u.jsxs)(c.Layout,{children:[(0,u.jsx)(c.Header,{navigation:t,title:"Check",buttons:[]}),(0,u.jsxs)(p,{children:[(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.c,fontWeight:"bold"},children:r.title}),(0,u.jsx)(f.default,{style:{padding:10,backgroundColor:c.ColorScheme.get().backgroundDark,marginVertical:20},children:(0,u.jsx)(S.default,{children:r.note})}),void 0!==r.steps&&r.steps.map((function(e,t){return(0,u.jsx)(m.default,{onPress:(0,s.default)((function*(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,w.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r);e.checked[t]=!e.checked[t];var i=yield h.getItem(),a=JSON.parse(i);a[n.params.taskIndex]=e,yield h.setItem(JSON.stringify(a)),g()})),children:(0,u.jsxs)(f.default,{style:{display:"flex",flexDirection:"row",marginTop:20,paddingBottom:10,alignItems:"center",borderBottomWidth:1,borderBottomColor:c.ColorScheme.get().secondary},children:[(0,u.jsx)(f.default,{style:{height:20,width:20,borderWidth:2,borderRadius:5,borderColor:c.ColorScheme.get().shadowColor,backgroundColor:r.checked[t]?c.ColorScheme.get().primary:"transparent"}}),(0,u.jsx)(f.default,{style:{flex:1,paddingStart:20},children:(0,u.jsx)(S.default,{style:{fontSize:c.SizeScheme.get().font.d},children:e})})]})},"step_"+t)}))]})]})}var E=(0,o.default)();function D(){return(0,u.jsx)(a.default,{children:(0,u.jsxs)(E.Navigator,{children:[(0,u.jsx)(E.Screen,{name:"Dashboard",component:k,options:{headerShown:!1}}),(0,u.jsx)(E.Screen,{name:"Definitions",component:I,options:{headerShown:!1}}),(0,u.jsx)(E.Screen,{name:"DefinitionEdit",component:C,options:{headerShown:!1}}),(0,u.jsx)(E.Screen,{name:"Task",component:z,options:{headerShown:!1}})]})})}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,i,a,o)=>{if(!i){var r=1/0;for(d=0;d<e.length;d++){for(var[i,a,o]=e[d],s=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(i,a){if(1&a&&(i=this(i)),8&a)return i;if("object"===typeof i&&i){if(4&a&&i.__esModule)return i;if(16&a&&"function"===typeof i.then)return i}var o=Object.create(null);n.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>i[e]));return r.default=()=>i,n.d(o,r),o}})(),n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var a,o,[r,s,l]=i,c=0;if(r.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self.webpackChunkweb=self.webpackChunkweb||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=n.O(void 0,[773],(()=>n(9386)));i=n.O(i)})();
//# sourceMappingURL=main.17051669.js.map