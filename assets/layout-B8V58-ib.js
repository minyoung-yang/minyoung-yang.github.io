import{c as r,r as i,j as e,L as c,X as h,o}from"./index-BJnh0kvN.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),x=[{title:"홈",url:"/"},{title:"글 목록",url:"/posts"},{title:"소개",url:"/about"}];function p(){const[s,a]=i.useState(!1);return e.jsx("header",{className:"bg-white shadow-sm sticky top-0 z-50",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs(c,{to:"/",className:"flex items-center space-x-2",children:[e.jsx(u,{className:"h-8 w-8 text-blue-600"}),e.jsx("span",{className:"text-xl font-bold text-gray-900",children:"Gabriel Yang"})]}),e.jsx("nav",{className:"hidden md:flex space-x-8",children:x.map(t=>e.jsx(y,{to:t.url,children:t.title},t.url))}),e.jsx("button",{className:"md:hidden",onClick:()=>a(!s),children:s?e.jsx(h,{size:24}):e.jsx(m,{size:24})})]}),s&&e.jsx("div",{className:"md:hidden border-t",children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1",children:x.map(t=>e.jsx(b,{to:t.url,onClick:()=>a(!1),children:t.title},t.url))})})]})})}function y({to:s,children:a}){const t=o(),n=i.useCallback(l=>t.pathname===l,[t.pathname]);return e.jsx(c,{to:s,className:`text-sm font-medium transition-colors duration-200 ${n(s)?"text-blue-600 border-b-2 border-blue-600":"text-gray-700 hover:text-blue-600"}`,children:a})}function b({to:s,children:a,onClick:t}){const n=o(),l=i.useCallback(d=>n.pathname===d,[n.pathname]);return e.jsx(c,{to:s,className:`block px-3 py-2 text-base font-medium ${l(s)?"text-blue-600 bg-blue-50":"text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`,onClick:t,children:a})}function v({children:s}){return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(p,{}),e.jsx("main",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:s})]})}export{v as L,j as U};
