import{d as u,A as w,p as g,H as h,i as v,c as x,a as n,w as l,T as r,K as b,o as y,j as c,s as i,b as a,n as k,u as _,y as f,h as B,g as C}from"./app-b1c68b4b.js";const E={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},$=a("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),N=[$],W=u({__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:t}){const s=e;w(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow="visible"});const d=()=>{s.closeable&&t("close")},m=o=>{o.key==="Escape"&&s.show&&d()};g(()=>document.addEventListener("keydown",m)),h(()=>{document.removeEventListener("keydown",m),document.body.style.overflow="visible"});const p=v(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(o,T)=>(y(),x(b,{to:"body"},[n(r,{"leave-active-class":"duration-200"},{default:l(()=>[c(a("div",E,[n(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[c(a("div",{class:"fixed inset-0 transform transition-all",onClick:d},N,512),[[i,e.show]])]),_:1}),n(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[c(a("div",{class:k(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",_(p)])},[e.show?f(o.$slots,"default",{key:0}):B("",!0)],2),[[i,e.show]])]),_:3})],512),[[i,e.show]])]),_:3})]))}}),S=["type"],z=u({__name:"SecondaryButton",props:{type:{default:"button"}},setup(e){return(t,s)=>(y(),C("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[f(t.$slots,"default")],8,S))}});export{W as _,z as a};
