(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[0],{24:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(15),s=c.n(n),r=(c(24),c(3)),o=c(0),l=function(e){var t=e.logoName;return Object(o.jsx)("header",{className:"text-center text-gray-500 mt-5 mb-16",children:Object(o.jsx)("span",{className:"text-3xl font-light",children:t})})},a=c(29),i=c(17),d=c(18),u=c(5),j=c(8),x=c(30),b=c(14),m=c.n(b),h=c(16),p=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fakestoreapi.com/products/");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c.filter((function(e){return"electronics"!==e.category})));case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();function f(e){return{count:e}}var g=function(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return e.count-1<0?e:{count:e.count-1};default:throw new Error}},O=function(e){var t=e.handleChange,c=e.initialCount,n=void 0===c?1:c,s=Object(r.useReducer)(g,n,f),l=Object(j.a)(s,2),a=l[0],i=l[1],d=function(e){i({type:e}),t&&t("increment"===e?a.count+1:a.count-1)};return Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)("label",{className:"text-gray-700 text-sm",htmlFor:"count",children:"Count:"}),Object(o.jsxs)("div",{className:"flex items-center mt-1",children:[Object(o.jsx)("button",{onClick:function(){return d("decrement")},className:"text-gray-500 focus:outline-none focus:text-gray-600",children:Object(o.jsx)("svg",{className:"h-5 w-5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(o.jsx)("span",{className:"text-gray-700 text-lg mx-2",children:a.count}),Object(o.jsx)("button",{onClick:function(){return d("increment")},className:"text-gray-500 focus:outline-none focus:text-gray-600",children:Object(o.jsx)("svg",{className:"h-5 w-5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})]})},w=function(e){var t=e.open,c=e.children,n=e.onClose,s=Object(r.useState)(t),l=Object(j.a)(s,2),a=l[0],i=l[1],d=function(e){e.target===e.currentTarget&&(n&&n(),i(!1))};return Object(o.jsx)("dialog",{id:"mymodaltop",className:"bg-transparent z-0 relative w-screen h-screen",open:a,children:Object(o.jsx)("div",{id:"modalBackdrop",onClick:d,className:"p-7 flex justify-center items-start overflow-x-hidden overflow-y-auto fixed left-0 top-0 w-full h-full bg-blue-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-100",children:Object(o.jsx)("div",{className:"bg-white flex rounded-lg md:w-1/2 relative pb-5",children:Object(o.jsxs)("div",{className:"flex flex-col items-start md:w-full",children:[Object(o.jsx)("div",{className:"pt-4 pb-3 px-5 flex items-center w-full",children:Object(o.jsx)("svg",{className:"ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",onClick:d,children:Object(o.jsx)("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})})}),c]})})})})},v=function(e){var t=e.product,c=e.toggleModal,n=e.toggleCart,s=e.addProductToCart,l=Object(r.useState)(1),a=Object(j.a)(l,2),i=a[0],d=a[1],x=function(){t&&s(Object(u.a)(Object(u.a)({},t),{},{count:i}))};return t&&Object(o.jsx)(w,{open:!!t,onClose:c,children:Object(o.jsxs)("div",{className:"md:flex  px-7",children:[Object(o.jsx)("div",{className:"w-full h-64 md:w-1/2 lg:h-full",children:Object(o.jsx)("img",{className:"h-full w-full rounded-md object-scale-down max-w-lg mx-auto",src:t.image,alt:"Nike Air"})}),Object(o.jsxs)("div",{className:"w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2",children:[Object(o.jsx)("h3",{className:"text-gray-800 uppercase text-lg mb-5",children:t.title}),Object(o.jsx)("p",{className:"text-gray-600 mb-3 text-sm",children:t.description.slice(0,1).toUpperCase()+t.description.slice(1)}),Object(o.jsxs)("span",{className:"text-gray-500 ",children:[t.price,"$"]}),Object(o.jsx)("hr",{className:"my-3"}),Object(o.jsx)(O,{handleChange:d}),Object(o.jsxs)("div",{className:"flex items-center mt-6",children:[Object(o.jsx)("button",{onClick:function(){x(),c(),n()},className:"px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500",children:"Order Now"}),Object(o.jsx)("button",{onClick:x,className:"mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none",children:Object(o.jsx)("svg",{className:"h-5 w-5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})})})]})]})]})})},N=function(e){var t=e.product,c=e.toggleModal,n=e.addProductToCart;return Object(o.jsxs)("div",{onClick:function(){return c(t)},className:"w-full  max-w-sm h-96 mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-xl",children:[Object(o.jsx)("div",{className:"flex items-end justify-end h-3/5  w-full bg-cover",style:{backgroundImage:"url('".concat(t.image,"')")},children:Object(o.jsx)("button",{name:"addToCart",onClick:function(e){return function(e,c){e.stopPropagation(),n(Object(u.a)(Object(u.a)({},t),{},{count:1}))}(e,Object(u.a)(Object(u.a)({},t),{},{count:0}))},className:"p-2 rounded-full bg-blue-600 text-white mx-2 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500",children:Object(o.jsx)("svg",{className:"h-5 w-5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})})})}),Object(o.jsxs)("div",{className:"px-5 py-3 flex flex-col justify-between h-2/5 ",children:[Object(o.jsx)("h3",{className:"text-gray-700 uppercase text-base",children:t.title}),Object(o.jsxs)("span",{className:"text-gray-500 mt-2 bottom-0",children:[t.price,"$"]})]})]})},y=function(e){var t=e.products,c=e.toggleModal,n=e.onAddProductToCart;return Object(o.jsx)("ul",{className:"list-none grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6",children:t.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(N,{product:e,toggleModal:c,addProductToCart:n})},e.id)}))})},k=function(e){var t=e.onClick,c=e.itemsNumber;return Object(o.jsxs)("button",{className:"shoppingCart fixed top-5 right-8 text-center bg-white rounded-full border-black border-2 p-2 ",onClick:t,children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:h-8 sm:w-8 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(o.jsx)("p",{className:"bg-red-500 flex items-center justify-center text-white absolute -bottom-3 rounded-full w-7 h-7 -right-4 z-30 p-1",children:c})]})},C=function(e){var t=e.products,c=e.removeProductFromCart,n=e.addProductToCart,s=e.isCartOpen,r=e.toggleCart;return s?Object(o.jsx)(w,{open:s,onClose:r,children:0===t.length?Object(o.jsx)("div",{className:" py-5 text-center w-full",children:Object(o.jsx)("p",{children:"Your cart is empty now, please go to our shop and get something sweet :)"})}):Object(o.jsxs)("div",{className:"bg-white h-full flex flex-col w-full  max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100",children:[Object(o.jsx)("h2",{className:"text-xl font-semibold",children:"Your cart"}),Object(o.jsx)("ul",{className:"flex flex-col divide-y divide-coolGray-700",children:t.map((function(e){return Object(o.jsx)("li",{className:"flex flex-col py-6 sm:flex-row sm:justify-between",children:Object(o.jsxs)("div",{className:"flex w-full space-x-2 sm:space-x-4",children:[Object(o.jsx)("img",{className:"flex-shrink-0 object-scale-down w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32",src:e.image,alt:e.title}),Object(o.jsxs)("div",{className:"flex flex-col justify-between w-full pb-4",children:[Object(o.jsxs)("div",{className:"flex justify-between w-full pb-2",children:[Object(o.jsxs)("div",{className:"space-y-1",children:[Object(o.jsx)("h3",{className:"text-lg font-semibold leading-snug sm:pr-8",children:e.title}),Object(o.jsx)("p",{className:"text-sm dark:text-coolGray-400",children:"Classic"})]}),Object(o.jsx)("div",{className:"text-right",children:Object(o.jsxs)("p",{className:"text-lg font-semibold",children:[e.price,"$"]})})]}),Object(o.jsx)(O,{initialCount:e.count,handleChange:function(){return function(e){n(Object(u.a)(Object(u.a)({},e),{},{count:1}))}(e)}}),Object(o.jsxs)("div",{className:"flex text-sm divide-x",children:[Object(o.jsxs)("button",{className:"flex items-center px-2 py-1 pl-0 space-x-1",onClick:function(){return c(e.id)},children:[Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-4 h-4 fillCurrent",children:[Object(o.jsx)("path",{d:"M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"}),Object(o.jsx)("rect",{width:"32",height:"200",x:"168",y:"216"}),Object(o.jsx)("rect",{width:"32",height:"200",x:"240",y:"216"}),Object(o.jsx)("rect",{width:"32",height:"200",x:"312",y:"216"}),Object(o.jsx)("path",{d:"M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"})]}),Object(o.jsx)("span",{children:"Remove"})]}),Object(o.jsxs)("button",{className:"flex items-center px-2 py-1 space-x-1",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-4 h-4 fillCurrent",children:Object(o.jsx)("path",{d:"M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"})}),Object(o.jsx)("span",{children:"Add to favorites"})]})]})]})]})},e.id)}))}),Object(o.jsxs)("div",{className:"space-y-1 text-right",children:[Object(o.jsxs)("p",{children:["Total amount:",Object(o.jsxs)("span",{className:"font-semibold",children:[" ",t.reduce((function(e,t){return+(+t.price*+t.count+e).toFixed(2)}),0),"$"]})]}),Object(o.jsx)("p",{className:"text-sm dark:text-coolGray-400",children:"Not including taxes and shipping costs"})]}),Object(o.jsxs)("div",{className:"flex justify-end space-x-4",children:[Object(o.jsxs)("button",{onClick:r,className:"px-6 py-2 border rounded-md dark:border-violet-400 border-blue-600 text-blue-600",children:["Back",Object(o.jsx)("span",{className:"sr-only sm:not-sr-only",children:" to shop"})]}),t.length>0&&Object(o.jsxs)("button",{className:"px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900 bg-blue-500 text-white ",children:[Object(o.jsx)("span",{className:"sr-only sm:not-sr-only",children:"Continue to"})," ","Checkout"]})]})]})}):Object(o.jsx)(k,{itemsNumber:t.reduce((function(e,t){return t.count+e}),0),onClick:r})},M=function(){var e=Object(x.a)("products",p),t=e.data,c=e.isLoading,n=e.error,s=t,l=Object(r.useState)(null),a=Object(j.a)(l,2),i=a[0],b=a[1],m=function(e){return b(i?null:e)},h=Object(r.useState)([]),f=Object(j.a)(h,2),g=f[0],O=f[1],w=function(e){g.find((function(t){return t.id===e.id}))?O((function(t){return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{count:t.count+e.count}):t}))})):O((function(t){return[].concat(Object(d.a)(t),[e])}))},N=Object(r.useState)(!1),k=Object(j.a)(N,2),M=k[0],L=k[1],H=function(){return L((function(e){return!e}))};return c?Object(o.jsx)("div",{className:"w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50",children:Object(o.jsx)("span",{className:"text-blue-500 opacity-75 top-1/2 my-0 mx-auto block text-2xl relative w-0 h-0",children:"Loading..."})}):n?Object(o.jsx)("h2",{children:"Ooops...Something went wrong"}):Object(o.jsxs)("section",{className:"main-page container mx-auto",children:[Object(o.jsx)(y,{products:s,toggleModal:m,onAddProductToCart:w}),Object(o.jsx)(v,{product:i,addProductToCart:w,toggleModal:m,toggleCart:H}),Object(o.jsx)(C,{products:g,removeProductFromCart:function(e){O((function(t){return t.filter((function(t){return t.id!==e}))}))},addProductToCart:w,isCartOpen:M,toggleCart:H})]})},L=new a.a,H=function(){return Object(o.jsxs)(i.a,{client:L,children:[Object(o.jsx)(l,{logoName:"TrendyCuts."}),Object(o.jsx)(M,{})]})};s.a.render(Object(o.jsx)(H,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.07eec7c8.chunk.js.map