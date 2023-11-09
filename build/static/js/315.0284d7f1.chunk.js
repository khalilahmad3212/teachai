"use strict";(self.webpackChunkteachai=self.webpackChunkteachai||[]).push([[315],{2315:function(e,r,a){a.r(r),a.d(r,{default:function(){return b}});var t=a(9439),s=a(2791),o=a(4270),l=a(7689),n=a(1087),d=a(3872),i=a(583),c=a(4942),m=a(1413),u=a(4165),h=a(5861),p=a(9085),x=a(184),g=function(e){var r=e.setShowPop,a=(0,l.s0)(),o=(0,s.useState)({}),n=(0,t.Z)(o,2),i=n[0],g=n[1],f=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var s,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.Z.post("/enterprise/email",i);case 4:s=e.sent,o=s.data,g({}),console.log("data: ",o),r(!1),a("/contact-submitted"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Error: ",e.t0.message),(0,p.Am)("Failed to submit");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r){return e.apply(this,arguments)}}(),y=function(e){var r=e.target,a=r.name,t=r.value;g((function(e){return(0,m.Z)((0,m.Z)({},e),{},(0,c.Z)({},a,t))}))};return(0,x.jsxs)("form",{onSubmit:f,enctype:"text/plain",className:"space-y-8 border px-10 py-8 rounded-lg shadow-lg shadow-black-500 bg-white",children:[(0,x.jsxs)("div",{className:"flex flex-col md:flex-row gap-7 md:gap-10",children:[(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"School Name"}),(0,x.jsx)("input",{type:"text",name:"schoolName",onChange:y,value:null===i||void 0===i?void 0:i.schoolName,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Enter Your School Name"})]}),(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your Name"}),(0,x.jsx)("input",{type:"text",name:"personName",value:null===i||void 0===i?void 0:i.personName,onChange:y,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Enter Your Name"})]})]}),(0,x.jsxs)("div",{className:"flex flex-col md:flex-row gap-7 md:gap-3",children:[(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your email"}),(0,x.jsx)("input",{type:"email",name:"email",onChange:y,value:null===i||void 0===i?void 0:i.email,id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"name@example.com",required:!0})]}),(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Teachers"}),(0,x.jsx)("input",{type:"number",name:"numberOfTeachers",value:null===i||void 0===i?void 0:i.numberOfTeachers,onChange:y,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Enter Number of Teachers"})]})]}),(0,x.jsxs)("div",{className:"flex flex-col md:flex-row gap-7 md:gap-10",children:[(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Grade Level"}),(0,x.jsx)("input",{type:"text",name:"gradeLevelCovered",onChange:y,value:null===i||void 0===i?void 0:i.gradeLevelCovered,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Enter Grades Covered"})]}),(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Prefered Plan Duration"}),(0,x.jsx)("input",{type:"text",name:"preferedPlanDuration",value:null===i||void 0===i?void 0:i.preferedPlanDuration,onChange:y,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Monthly or Yearly Subscription"})]})]}),(0,x.jsxs)("div",{className:"sm:col-span-2",children:[(0,x.jsx)("label",{for:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Additional Features Required"}),(0,x.jsx)("textarea",{name:"additionalFeaturesRequired",value:null===i||void 0===i?void 0:i.additionalFeaturesRequired,onChange:y,rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Additional Features"})]}),(0,x.jsxs)("div",{className:" flex gap-5 items-center",children:[(0,x.jsx)("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 border-2 hover:bg-dark hover:text-white border-dark",children:"Send message"}),(0,x.jsx)("button",{onClick:function(){return r(!1)},className:"py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 border-2 hover:bg-dark hover:text-white border-dark",children:"Cancel"})]})]})},f=a(98),y=[{title:"7-Days Trial",subTitle:"No Credit Payment Needed",price:0,plan:"Free",teamSize:1,premiumSupport:"6 months",freeUpdates:"6 months",features:["Access to only a number of Chatbots","Free 10 chat requests per day","1 member","Write in 30+ languages"]},{title:"Starter",plan:"Starter",price:9.99,teamSize:1,premiumSupport:"6 months",freeUpdates:"6 months",features:["Access to All the Chatbots","60 chat requests per day","1 member seat","Write in 30+ languages","24/7 live chat support","All Grade Levels","10 file uploads per month"]},{title:"Professional",plan:"Professional",price:14.99,teamSize:1,premiumSupport:"6 months",freeUpdates:"6 months",features:["Access to All the Chatbots","120 chat requests per day","1 member seat","Write in 30+ languages","24/7 live chat support","Access to chat history","Extract responses to word document/pdf","All Grade Levels","20 file uploads per month"]},{title:"Enterprise Package",price:void 0,teamSize:1,premiumSupport:"6 months",freeUpdates:"6 months",features:["Let's collaborate to design a tailored plan for your school, including the number of teachers and white-label options."]}],b=function(){var e=(0,l.s0)(),r=(0,s.useState)(!1),a=(0,t.Z)(r,2),c=a[0],m=a[1],u=(0,s.useContext)(i.S).user,h=(0,s.useContext)(f._),p=h.usage,b=h.fetchUsage;(0,s.useEffect)((function(){p?console.log("usage: ",p):b()}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:" max-w-[1440px] mx-auto",children:[(0,x.jsxs)(o.q,{children:[(0,x.jsx)("meta",{charSet:"utf-8"}),(0,x.jsx)("title",{children:"Pricing| Teach Assist AI"})]}),(0,x.jsxs)("section",{class:"",children:[(0,x.jsxs)("div",{className:"my-10",children:[(0,x.jsx)("h1",{className:"text-4xl my-8 font-semibold text-center text-secondary",children:"Ignite Learning, Inspire Excellence!"}),(0,x.jsx)("div",{className:"hidden md:block",children:["Welcome to the pricing page for Teach Assist AI, a platform designed specifically for teachers and schools. Our plans are tailored to meet the unique needs of educators at every level, from individual teachers to entire educational institutions. Craft your teaching experience perfectly, analyze student performance effortlessly, and engage with your students authentically using our powerful AI technology.","We offer a range of plans to accommodate different requirements and budgets. Whether you're a new teacher, an experienced educator, or a school administrator, we have the right plan for you. Additionally, if you have specific needs or require a custom plan, our team is here to collaborate with you and find the best solution. ","We understand the importance of personalized support in the education sector. If you need any assistance or have questions regarding our plans, please do not hesitate to reach out to us. We're dedicated to helping teachers and schools succeed with Teach Assist AI. ","Curious about the price? We charge for our Full Access Plan to cover the expenses of providing our AI services. Our API enables us to utilize AI effectively in meeting your teaching requirements. By subscribing to the Full Access Plan, you not only gain unrestricted access to our cutting-edge teaching tools but also contribute to the enhancement of this exceptional service. Your support helps us sustain the API's cost, guaranteeing a reliable and efficient platform for educators. We appreciate your understanding and support as we empower teachers and enhance education with Teach Assist AI technology."].map((function(e,r){return(0,x.jsx)("p",{className:"text-lg mx-4 text-justify md:mx-32 mb-5",children:e},r)}))})]}),(0,x.jsxs)("div",{class:"py-8 px-4 mx-auto lg:py-16 lg:px-6",children:[(0,x.jsxs)("div",{class:"mx-auto max-w-screen-md text-center mb-8 lg:mb-24",children:[(0,x.jsx)("h2",{class:"mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-primary capitalize",children:"Start your 7-days free trial"}),(0,x.jsx)("p",{class:"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400",children:"No payment information needed, Change Plans Anytime. Cancel at any time"})]}),(0,x.jsx)("div",{class:"grid grid-cols-1 lg:grid-cols-4 md:mx-5 gap-5 gap-y-5",children:y.map((function(r,a){return(0,x.jsxs)("div",{class:"flex flex-col py-12 px-4 gap-5 relative md:hover:-top-20 md:hover:shadow-xl md:hover:shadow-gray-400 md:hover:z-10 md:hover:rounded-[2rem] transition-all duration-[2000] max-w-lg text-gray-900 bg-white  rounded-[1.5rem] border-gray-100 border-t border-b",children:[(0,x.jsxs)("div",{className:"mb-3 md:mb-12 border-b-2 border-gray-300 pb-1 md:pb-8 relative",children:[(0,x.jsx)("h4",{className:"text-2xl font-semibold opacity-75 ",children:r.title}),3===a&&(0,x.jsx)("h4",{className:"text-2xl font-semibold opacity-75 md:absolute",children:"(School)"})]}),(0,x.jsx)("div",{class:"flex items-baseline md:mt-4 mb-2 border-b-2 border-gray-200 pb-6 md:pb-16",children:0===(null===r||void 0===r?void 0:r.price)?(0,x.jsx)("span",{class:"mr-2 text-5xl font-extrabold",children:"Free"}):void 0===r.price?(0,x.jsx)("span",{class:"mr-2 text-5xl font-extrabold",children:"Contact Us"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("span",{class:"mr-2 text-5xl font-extrabold",children:["$",r.price]}),(0,x.jsx)("span",{class:"",children:"/month"})]})}),(0,x.jsx)("ul",{class:"mb-8 space-y-4 text-left",children:r.features.map((function(e,r){return(0,x.jsxs)("li",{class:"flex items-start space-x-3",children:[(0,x.jsx)("svg",{class:"flex-shrink-0 w-6 h-6 text-white bg-primary rounded-full",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})}),(0,x.jsx)("span",{children:e})]})}))}),"Enterprise Package"===r.title?(0,x.jsx)("button",{onClick:function(){return m(!0)},class:"text-secondary  font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 border-secondary hover:bg-secondary hover:text-white",children:"Get started"}):(0,x.jsx)("button",{onClick:function(){return a=r.title,u||(localStorage.setItem("plan",a),e("/signup")),void d.Z.post("/payment/process",{plan:a}).then((function(e){window.location.href=e.data.url,console.log("Response:",e.data)})).catch((function(e){console.error("Error:",e.message)}));var a},class:"  font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2\n\t\t\t\t\t\t\t\t\t\t\t\t\t".concat((null===p||void 0===p?void 0:p.plan)==(null===r||void 0===r?void 0:r.plan)?" bg-orange-500 text-white":"border-secondary text-secondary","  hover:bg-secondary hover:text-white"),children:(null===p||void 0===p?void 0:p.plan)==(null===r||void 0===r?void 0:r.plan)?"Current Plan":"Get started"})]})}))}),(0,x.jsxs)("div",{className:"my-20",children:[(0,x.jsx)("p",{className:"text-center mb-8 text-primary",children:"If your desired plan is not shown and you would like to customize a plan, please feel free to contact us"}),(0,x.jsx)("div",{className:"flex justify-center gap-5",children:(0,x.jsx)(n.rU,{to:"/contact",children:(0,x.jsx)("button",{className:"py-3 px-5 uppercase bg-primary text-white rounded-2xl",children:"Contact Us"})})})]})]})]})]}),c&&(0,x.jsxs)("div",{className:" fixed left-0 top-0 z-40 right-0 bottom-0",children:[(0,x.jsx)("div",{onClick:function(){return m(!1)},className:" absolute left-0 top-0 right-0 bottom-0 z-0 bg-gray-400 bg-opacity-70 cursor-pointer"}),(0,x.jsx)("div",{className:"absolute h-screen md:h-auto overflow-auto left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 z-10 w-full md:w-[700px] mx-auto ",children:(0,x.jsx)(g,{setShowPop:m})})]})]})}}}]);
//# sourceMappingURL=315.0284d7f1.chunk.js.map