import{c as r,o as u,r as c,j as e,L as i,X as h}from"./index-CLLSJe1X.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function o(t){return u({select:a=>a.location})}const x=[{title:"홈",url:"/"},{title:"글 목록",url:"/posts"},{title:"소개",url:"/about"}];function y(){const[t,a]=c.useState(!1);return e.jsx("header",{className:"bg-white shadow-sm sticky top-0 z-50",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs(i,{to:"/",className:"flex items-center space-x-2",children:[e.jsx(m,{className:"h-8 w-8 text-blue-600"}),e.jsx("span",{className:"text-xl font-bold text-gray-900",children:"Gabriel Yang"})]}),e.jsx("nav",{className:"hidden md:flex space-x-8",children:x.map(s=>e.jsx(b,{to:s.url,children:s.title},s.url))}),e.jsx("button",{className:"md:hidden",onClick:()=>a(!t),children:t?e.jsx(h,{size:24}):e.jsx(p,{size:24})})]}),t&&e.jsx("div",{className:"md:hidden border-t",children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1",children:x.map(s=>e.jsx(k,{to:s.url,onClick:()=>a(!1),children:s.title},s.url))})})]})})}function b({to:t,children:a}){const s=o(),n=c.useCallback(l=>s.pathname===l,[s.pathname]);return e.jsx(i,{to:t,className:`text-sm font-medium transition-colors duration-200 ${n(t)?"text-blue-600 border-b-2 border-blue-600":"text-gray-700 hover:text-blue-600"}`,children:a})}function k({to:t,children:a,onClick:s}){const n=o(),l=c.useCallback(d=>n.pathname===d,[n.pathname]);return e.jsx(i,{to:t,className:`block px-3 py-2 text-base font-medium ${l(t)?"text-blue-600 bg-blue-50":"text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`,onClick:s,children:a})}const f=({children:t})=>e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(y,{}),e.jsx("main",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:t})]});export{f as L,v as U};
