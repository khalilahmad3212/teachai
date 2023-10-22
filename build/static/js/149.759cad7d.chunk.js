"use strict";(self.webpackChunkteachai=self.webpackChunkteachai||[]).push([[149],{9149:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var s=a(2791),r=a(1087),n=a(184),l=function(){return(0,n.jsx)("aside",{className:"w-full md:w-60 min-h-[30rem] pt-5",children:(0,n.jsx)("div",{className:"p-2",children:(0,n.jsxs)("ul",{className:"space-y-2 md:space-y-4 grid grid-cols-1",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(r.rU,{to:"/admin/dashboard/users",className:"flex items-center rounded-xl font-bold text-sm text-yellow-900 py-3 px-4",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"text-lg mr-4",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"})}),"Users"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r.rU,{to:"/admin/dashboard/post/new",className:"flex rounded-xl font-bold text-sm text-gray-900 py-3 px-4",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"text-lg mr-4",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"})}),"Add Post"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r.rU,{to:"/admin/dashboard/settings",className:"flex rounded-xl font-bold text-sm text-gray-900 py-3 px-4",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"text-lg mr-4",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"})}),"Settings"]})})]})})})},i=a(4165),o=a(5861),c=a(583),d=a(98),u=a(9085),x=a(3872),h=function(){var e=(0,s.useContext)(c.S),t=e.users,a=e.getAllUsers,r=((0,s.useContext)(d._).usage,function(e){var t=new Date(e),a=new Date(t);a.setDate(t.getDate()+30);var s="".concat(a.getDate().toString().padStart(2,"0")," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]," ").concat(a.getFullYear());return console.log(s),s}),l=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,s){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.put("/plan/cancel",{userId:t,usageId:s});case 3:r=e.sent,r.data,a(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ",e.t0),(0,u.Am)("Error While canceling the Plan");case 12:console.log("User ID: ",t),console.log("Usage ID: ",s);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,s){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.delete("/admin/users/".concat(t));case 3:r=e.sent,r.data,(0,u.Am)("User deleted Successfully"),a(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error: ",e.t0),(0,u.Am)("Error While Deleting the Plan");case 13:console.log("User ID: ",t),console.log("Usage ID: ",s);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}();return(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsxs)("table",{className:"min-w-full bg-white border border-gray-300",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"No."}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"First Name"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Last Name"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Email"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Role"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b text-start",children:"Plan"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Usage"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Expiry Date"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Status"}),(0,n.jsx)("th",{className:"py-2 px-4 border-b",children:"Delete"})]})}),(0,n.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,t){var a,s,i,o;return(0,n.jsxs)("tr",{className:"text-center",children:[(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:t+1}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:null===(a=e.user)||void 0===a?void 0:a.firstName}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:null===(s=e.user)||void 0===s?void 0:s.lastName}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:null===(i=e.user)||void 0===i?void 0:i.email}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:null===(o=e.user)||void 0===o?void 0:o.role}),(0,n.jsx)("td",{className:"py-2 px-4 border-b text-start",children:e.plan}),(0,n.jsxs)("td",{className:"py-2 px-4 border-b",children:[e.usageCount,"/",null===e.usageLimit?"Unlimited":null===e||void 0===e?void 0:e.usageLimit]}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:null!==e&&void 0!==e&&e.paymentDate?r(null===e||void 0===e?void 0:e.paymentDate):"-"}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:["Starter","Professional"].includes(null===e||void 0===e?void 0:e.plan)&&(0,n.jsx)("button",{className:" bg-blue-400 px-2 rounded text-sm text-white",onClick:function(){var t;return l(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t._id,e._id)},children:"Cancel"})}),(0,n.jsx)("td",{className:"py-2 px-4 border-b",children:(0,n.jsx)("button",{className:" bg-blue-400 px-2 rounded text-sm text-white",onClick:function(){var t;return h(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t._id,e._id)},children:"Delete"})})]},e._id)}))})]})})},m=a(7689),p=a(7762),v=a(9439),f=a(6584),g=a(2443),j=a.n(g),b=a(8820),y=a(1243),N=a(6588),w=function(){var e=(0,s.useState)({headers:{"Content-Type":"multipart/form-data",authorization:"Bearer ".concat(localStorage.getItem("teachai_token"))}}),t=(0,v.Z)(e,2),a=t[0],l=(t[1],(0,s.useRef)(null)),c=(0,s.useRef)(null),d=(0,s.useState)(""),x=(0,v.Z)(d,2),h=x[0],m=x[1],g=(0,s.useState)(""),w=(0,v.Z)(g,2),S=w[0],Z=w[1],C=(0,s.useState)(""),k=(0,v.Z)(C,2),D=k[0],A=k[1],I=(0,s.useState)(""),U=(0,v.Z)(I,2),z=U[0],_=(U[1],(0,s.useState)("")),H=(0,v.Z)(_,2),E=H[0],M=H[1],F=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var s,r,n,o,d,x,v,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),(s=new FormData).append("title",S),s.append("image",h),s.append("content",D),e.prev=5,r=(0,p.Z)(s.entries());try{for(r.s();!(n=r.n()).done;)o=n.value,console.log(o[0]+", "+o[1])}catch(i){r.e(i)}finally{r.f()}return e.next=10,y.Z.post("".concat(N.addstory_url,"/story/addstory"),s,a);case 10:d=e.sent,x=d.data,console.log("Data: ",x),(0,u.Am)("Add Post Successful"),Z(""),A(""),m(""),c.current.editor.setData(""),l.current.value="",e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log("Here is error!: ",e.t0),M(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v||null===(f=v.data)||void 0===f?void 0:f.error);case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t){return e.apply(this,arguments)}}();return(0,n.jsx)("div",{className:"Inclusive-addStory-page",children:(0,n.jsxs)("form",{onSubmit:F,className:"addStory-form",children:[E&&(0,n.jsx)("div",{className:"error_msg",children:E}),z&&(0,n.jsxs)("div",{className:"success_msg",children:[(0,n.jsx)("span",{children:z}),(0,n.jsx)(r.rU,{to:"/",children:"Go home"})]}),(0,n.jsx)("input",{type:"text",required:!0,id:"title",placeholder:"Title",onChange:function(e){return Z(e.target.value)},value:S,className:"mb-3"}),(0,n.jsx)("div",{className:"prose",style:{display:"flex",justifyContent:"center",width:"100%"},children:(0,n.jsx)(f.CKEditor,{editor:j(),config:{toolbar:["heading","|","bold","italic","blockQuote","link","numberedList","bulletedList"]},onChange:function(e,t){var a=t.getData();A(a)},ref:c})}),(0,n.jsxs)("div",{class:"StoryImageField",children:[(0,n.jsx)(b.aBR,{}),(0,n.jsx)("div",{class:"txt",children:h?h.name:" Include a high-quality image in your story to make it more inviting to readers."}),(0,n.jsx)("input",{name:"image",type:"file",ref:l,onChange:function(e){m(e.target.files[0])}})]}),(0,n.jsx)("button",{type:"submit",disabled:!h,className:h?"addStory-btn":"dis-btn",children:"Publish "})]})})},S=a(224),Z=function(){var e=(0,s.useState)({headers:{"Content-Type":"multipart/form-data",authorization:"Bearer ".concat(localStorage.getItem("teachai_token"))}}),t=(0,v.Z)(e,2),a=t[0],l=(t[1],(0,m.UO)().slug),c=(0,s.useRef)(null),d=(0,s.useState)(!0),h=(0,v.Z)(d,2),p=h[0],g=h[1],w=(0,s.useState)({}),Z=(0,v.Z)(w,2),C=(Z[0],Z[1]),k=(0,s.useState)(""),D=(0,v.Z)(k,2),A=D[0],I=D[1],U=(0,s.useState)(""),z=(0,v.Z)(U,2),_=z[0],H=z[1],E=(0,s.useState)(""),M=(0,v.Z)(E,2),F=M[0],L=M[1],V=(0,s.useState)(""),B=(0,v.Z)(V,2),P=B[0],R=B[1],T=(0,s.useState)(""),W=(0,v.Z)(T,2),q=W[0],J=(W[1],(0,s.useState)("")),G=(0,v.Z)(J,2),K=G[0],O=G[1],Q=(0,m.s0)();(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,x.Z.get("/story/editStory/".concat(l),a);case 4:t=e.sent,s=t.data,C(s.data),L(s.data.title),R(s.data.content),I(s.data.image),H(s.data.image),g(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),Q("/");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Y=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var s,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(s=new FormData).append("title",F),s.append("content",P),s.append("image",A),s.append("previousImage",_),e.prev=6,e.next=9,y.Z.put("".concat(N.addstory_url,"/story/").concat(l,"/edit"),s,a);case 9:r=e.sent,r.data,(0,u.Am)("Edit Story Successfully"),setTimeout((function(){Q("/blogs")}),2500),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),setTimeout((function(){O("")}),4500),O(e.t0.response.data.error);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,n.jsx)(n.Fragment,{children:p?(0,n.jsx)(S.Z,{}):(0,n.jsx)("div",{className:"Inclusive-editStory-page ",children:(0,n.jsxs)("form",{onSubmit:Y,className:"editStory-form",children:[K&&(0,n.jsx)("div",{className:"error_msg",children:K}),q&&(0,n.jsxs)("div",{className:"success_msg",children:[(0,n.jsx)("span",{children:q}),(0,n.jsx)(r.rU,{to:"/",children:"Go home"})]}),(0,n.jsx)("input",{type:"text",required:!0,id:"title",placeholder:"Title",onChange:function(e){return L(e.target.value)},value:F}),(0,n.jsx)("div",{className:"prose",style:{display:"flex",justifyContent:"center",width:"100%"},children:(0,n.jsx)(f.CKEditor,{editor:j(),config:{toolbar:["heading","|","bold","italic","blockQuote","link","numberedList","bulletedList"]},onChange:function(e,t){var a=t.getData();R(a)},data:P})}),(0,n.jsxs)("div",{class:"currentlyImage",children:[(0,n.jsx)("div",{class:"absolute",children:"Currently Image"}),(0,n.jsx)("img",{src:"".concat(N.backend_resourse,"/storyImages/").concat(_),alt:"storyImage"})]}),(0,n.jsxs)("div",{class:"StoryImageField",children:[(0,n.jsx)(b.aBR,{}),(0,n.jsx)("div",{class:"txt",children:A===_?"    Change the image in your story ":A.name}),(0,n.jsx)("input",{name:"image",type:"file",ref:c,onChange:function(e){I(e.target.files[0])}})]}),(0,n.jsx)("button",{type:"submit",className:"editStory-btn",children:"Edit Story "})]})})})},C=a(6709),k=function(){var e=(0,s.useContext)(c.S),t=e.user,a=e.isAuthenticated,r=e.getAllUsers;return(0,s.useEffect)((function(){r()}),[]),(0,n.jsx)(d.j,{children:(0,n.jsx)("div",{className:" max-w-[1440px] mx-auto",children:a&&"admin"===(null===t||void 0===t?void 0:t.role)?(0,n.jsxs)("div",{className:"relative min-h-[80vh] overflow-hidden flex flex-col md:flex-row",children:[(0,n.jsx)(l,{}),(0,n.jsx)("main",{className:" mt-40 md:mt-0 max-h-screen overflow-auto flex-1",children:(0,n.jsx)("div",{className:"px-2 md:px-6 py-8",children:(0,n.jsxs)(m.Z5,{children:[(0,n.jsx)(m.AW,{index:!0,path:"users",element:(0,n.jsx)(h,{})}),(0,n.jsx)(m.AW,{path:"post/new",element:(0,n.jsx)(w,{})}),(0,n.jsx)(m.AW,{path:"story/:slug/edit",element:(0,n.jsx)(Z,{})}),(0,n.jsx)(m.AW,{path:"settings",element:(0,n.jsx)(C.Z,{})})]})})})]}):(0,n.jsx)("div",{children:"Loading"})})})}},224:function(e,t,a){a.d(t,{Z:function(){return r}});a(2791);var s=a(184),r=function(){return(0,s.jsx)("div",{className:"mask",children:(0,s.jsx)("div",{className:"loader"})})}}}]);
//# sourceMappingURL=149.759cad7d.chunk.js.map