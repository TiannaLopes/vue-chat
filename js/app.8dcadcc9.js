(function(){"use strict";var e={4393:function(e,t,s){var n=s(5130),a=s(6768);const o={id:"app",class:"min-h-screen flex"},c={class:"flex-grow flex flex-col items-center justify-center bg-gray-100"},r={key:1,class:"text-center text-gray-500"};function i(e,t,s,n,i,l){const u=(0,a.g2)("SidebarComponent"),d=(0,a.g2)("ChatWindow");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(u,{contacts:i.contacts,onSelectContact:l.selectContact},null,8,["contacts","onSelectContact"]),(0,a.Lk)("div",c,[i.selectedContact?((0,a.uX)(),(0,a.Wv)(d,{key:0,contact:i.selectedContact,messages:i.messages,onSendMessage:l.sendMessage},null,8,["contact","messages","onSendMessage"])):((0,a.uX)(),(0,a.CE)("div",r,"Select a contact to start chatting"))])])}var l=s(4373),u=s(4232);const d=e=>((0,a.Qi)("data-v-0ce66cc5"),e=e(),(0,a.jt)(),e),g={class:"w-64 bg-white shadow-md"},f=d((()=>(0,a.Lk)("div",{class:"p-4 font-bold text-lg"},"Contacts",-1))),p=["onClick"];function m(e,t,s,n,o,c){return(0,a.uX)(),(0,a.CE)("div",g,[f,(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.contacts,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e,onClick:t=>c.select(e),class:"cursor-pointer p-4 hover:bg-gray-100"},(0,u.v_)(e),9,p)))),128))])])}var h={name:"SidenbarComponent",props:{contacts:{type:Array,required:!0}},methods:{select(e){this.$emit("selectContact",e)}}},v=s(1241);const b=(0,v.A)(h,[["render",m],["__scopeId","data-v-0ce66cc5"]]);var y=b;const C={class:"w-full max-w-4xl bg-white shadow-md rounded-lg flex flex-col"},w={class:"p-4 border-b text-lg font-bold"};function x(e,t,s,n,o,c){const r=(0,a.g2)("MessageList"),i=(0,a.g2)("MessageInput");return(0,a.uX)(),(0,a.CE)("div",C,[(0,a.Lk)("div",w,(0,u.v_)(s.contact),1),(0,a.bF)(r,{messages:s.messages},null,8,["messages"]),(0,a.bF)(i,{onSendMessage:c.sendMessage},null,8,["onSendMessage"])])}const M={class:"message-list flex-grow overflow-y-auto p-4"},S={class:"flex justify-between"},k={class:"timestamp text-sm text-gray-500"},_={class:"username font-bold text-blue-600"},E={class:"content text-gray-800"};function O(e,t,s,n,o,c){return(0,a.uX)(),(0,a.CE)("div",M,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.messages,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e[0],class:"message mb-4"},[(0,a.Lk)("div",S,[(0,a.Lk)("span",k,(0,u.v_)(e[0]),1),(0,a.Lk)("span",_,(0,u.v_)(e[1]),1)]),(0,a.Lk)("p",E,(0,u.v_)(e[2]),1)])))),128))])}var I={name:"MessageList",props:{messages:{type:Array,required:!0}}};const L=(0,v.A)(I,[["render",O],["__scopeId","data-v-4841eda6"]]);var j=L;const A={class:"message-input w-full p-4 border-t flex space-x-4"};function X(e,t,s,o,c,r){return(0,a.uX)(),(0,a.CE)("div",A,[(0,a.bo)((0,a.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.message=e),placeholder:"Type a message",class:"input-field flex-grow h-12 resize-none"},null,512),[[n.Jo,c.message]]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.handleSubmit&&r.handleSubmit(...e)),class:"btn"},"Send")])}var T={name:"MessageInput",data(){return{message:""}},methods:{handleSubmit(){if(this.message){const e={timestamp:(new Date).toISOString(),message:this.message};this.$emit("sendMessage",e),this.message=""}}}};const W=(0,v.A)(T,[["render",X],["__scopeId","data-v-0ee0b0ba"]]);var $=W,F={name:"ChatWindow",components:{MessageList:j,MessageInput:$},props:{contact:{type:String,required:!0},messages:{type:Array,required:!0}},methods:{sendMessage(e){this.$emit("sendMessage",e)}}};const q=(0,v.A)(F,[["render",x],["__scopeId","data-v-4b965cd2"]]);var D=q;const R="1qZ30RucRHD13pmg2eVd7NDgEcI1UXfyWfTwczuLW6yI",P="Messages";var U={name:"App",components:{SidebarComponent:y,ChatWindow:D},data(){return{contacts:["Alice","Bob","Charlie"],selectedContact:null,messages:[]}},mounted(){this.fetchMessages(),setInterval(this.fetchMessages,3e3)},methods:{selectContact(e){this.selectedContact=e,this.fetchMessages()},async fetchMessages(){if(this.selectedContact)try{const e=await l.A.get(`https://sheets.googleapis.com/v4/spreadsheets/${R}/values/${P}?`);this.messages=e.data.values.filter((e=>e[1]===this.selectedContact||e[2]===this.selectedContact))}catch(e){console.error(e)}},async sendMessage(e){if(this.selectedContact)try{await l.A.post(`https://sheets.googleapis.com/v4/spreadsheets/${R}/values/${P}:append?valueInputOption=USER_ENTERED`,{range:P,majorDimension:"ROWS",values:[[e.timestamp,this.selectedContact,e.message]]});this.fetchMessages()}catch(t){console.error(t)}}}};const z=(0,v.A)(U,[["render",i]]);var K=z;(0,n.Ef)(K).mount("#app")}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,a,o){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var r=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[i])}))?n.splice(i--,1):(r=!1,o<c&&(c=o));if(r){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,c=n[0],r=n[1],i=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(i)var u=i(s)}for(t&&t(n);l<c.length;l++)o=c[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},n=self["webpackChunkvue_chat"]=self["webpackChunkvue_chat"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(4393)}));n=s.O(n)})();
//# sourceMappingURL=app.8dcadcc9.js.map