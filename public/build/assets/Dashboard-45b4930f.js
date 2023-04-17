import{_ as Te}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-3cf1c075.js";import{d as T,z as Oe,r as E,A as Fe,B as je,i as Pe,x as we,j as _e,u,o as h,g as x,C as ke,D as Ee,c as Ne,v as ie,a as c,w,F as le,G as Ie,b as o,n as C,q as He,h as N,e as $,t as V,m as Ue}from"./app-b1c68b4b.js";import{_ as ue,a as de}from"./SecondaryButton.vue_vue_type_script_setup_true_lang-9f03d1d6.js";import{_ as A,b as R,a as ce}from"./TextInput.vue_vue_type_script_setup_true_lang-4a35bfe5.js";import{P as me}from"./PrimaryButton-50009fed.js";import"./ApplicationLogo-3ec27a11.js";import"./_plugin-vue_export-helper-c27b6911.js";var ze=Object.defineProperty,qe=(t,e,s)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,pe=(t,e,s)=>(qe(t,typeof e!="symbol"?e+"":e,s),s);const f={debug:!1,masked:!1,prefix:"",suffix:"",thousands:",",decimal:".",precision:2,disableNegative:!1,disabled:!1,min:null,max:null,allowBlank:!1,minimumNumberOfCharacters:0,modelModifiers:{number:!1},shouldRound:!0,focusOnRight:!1},$e=["+","-"],Ce=["decimal","thousands","prefix","suffix"];function _(t){return Math.max(0,Math.min(t,1e3))}function O(t,e){return t=t.padStart(e+1,"0"),e===0?t:`${t.slice(0,-e)}.${t.slice(-e)}`}function Ve(t){return t=t?t.toString():"",t.replace(/\D+/g,"")||"0"}function Le(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${e}`)}function Qe(t,e,s){return e?t+s+e:t}function B(t,e){return $e.includes(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" as a value.`),!1):/\d/g.test(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" (any number) as a value.`),!1):!0}function Ge(t){for(const e of Ce)if(!B(t[e],e))return!1;return!0}function F(t){for(const e of Ce){t[e]=t[e].replace(/\d+/g,"");for(const s of $e)t[e]=t[e].replaceAll(s,"")}return t}function Be(t){const e=t.length,s=t.indexOf(".");return e-(s+1)}function fe(t){return t.replace(/^(-?)0+(?!\.)(.+)/,"$1$2")}function Me(t){return/^-?[\d]+$/g.test(t)}function Se(t){return/^-?[\d]+(\.[\d]+)$/g.test(t)}function he(t,e,s){return e>t.length-1?t:t.substring(0,e)+s+t.substring(e+1)}function De(t,e){const s=e-Be(t);if(s>=0)return t;let r=t.slice(0,s);const a=t.slice(s);if(r.charAt(r.length-1)==="."&&(r=r.slice(0,-1)),parseInt(a.charAt(0),10)>=5){for(let l=r.length-1;l>=0;l-=1){const d=r.charAt(l);if(d!=="."&&d!=="-"){const m=parseInt(d,10)+1;if(m<10)return he(r,l,m);r=he(r,l,"0")}}return`1${r}`}return r}function Ae(t,e){const s=()=>{t.setSelectionRange(e,e)};t===document.activeElement&&(s(),setTimeout(s,1))}function Re(t){return new Event(t,{bubbles:!0,cancelable:!1})}function i({debug:t=!1},...e){t&&console.log(...e)}class j{constructor(e){pe(this,"number",0n),pe(this,"decimal",0),this.setNumber(e)}getNumber(){return this.number}getDecimalPrecision(){return this.decimal}setNumber(e){this.decimal=0,typeof e=="bigint"?this.number=e:typeof e=="number"?this.setupString(e.toString()):this.setupString(e)}toFixed(e=0,s=!0){let r=this.toString();const a=e-this.getDecimalPrecision();return a>0?(r.includes(".")||(r+="."),r.padEnd(r.length+a,"0")):a<0?s?De(r,e):r.slice(0,a):r}toString(){let e=this.number.toString();if(this.decimal){let s=!1;return e.charAt(0)==="-"&&(e=e.substring(1),s=!0),e=e.padStart(e.length+this.decimal,"0"),e=`${e.slice(0,-this.decimal)}.${e.slice(-this.decimal)}`,e=fe(e),(s?"-":"")+e}return e}lessThan(e){const[s,r]=this.adjustComparisonNumbers(e);return s<r}biggerThan(e){const[s,r]=this.adjustComparisonNumbers(e);return s>r}isEqual(e){const[s,r]=this.adjustComparisonNumbers(e);return s===r}setupString(e){if(e=fe(e),Me(e))this.number=BigInt(e);else if(Se(e))this.decimal=Be(e),this.number=BigInt(e.replace(".",""));else throw new Error(`BigNumber has received and invalid format for the constructor: ${e}`)}adjustComparisonNumbers(e){let s;e.constructor.name!=="BigNumber"?s=new j(e):s=e;const r=this.getDecimalPrecision()-s.getDecimalPrecision();let a=this.getNumber(),l=s.getNumber();return r>0?l=s.getNumber()*10n**BigInt(r):r<0&&(a=this.getNumber()*10n**BigInt(r*-1)),[a,l]}}function I(t,e=f,s=""){if(i(e,"utils format() - caller",s),i(e,"utils format() - input1",t),t==null)t="";else if(typeof t=="number")e.shouldRound?t=t.toFixed(_(e.precision)):t=t.toFixed(_(e.precision)+1).slice(0,-1);else if(e.modelModifiers&&e.modelModifiers.number&&Me(t))t=Number(t).toFixed(_(e.precision));else if(!e.disableNegative&&t==="-")return t;i(e,"utils format() - input2",t);const r=e.disableNegative?"":t.indexOf("-")>=0?"-":"";let a=t.replace(e.prefix,"").replace(e.suffix,"");i(e,"utils format() - filtered",a),!e.precision&&e.thousands!=="."&&Se(a)&&(a=De(a,0),i(e,"utils format() - !opt.precision && isValidFloat()",a));const l=Ve(a);i(e,"utils format() - numbers",l),i(e,"utils format() - numbersToCurrency",r+O(l,e.precision));const d=new j(r+O(l,e.precision));i(e,"utils format() - bigNumber1",d.toString()),e.max&&d.biggerThan(e.max)&&d.setNumber(e.max),e.min&&d.lessThan(e.min)&&d.setNumber(e.min);const m=d.toFixed(_(e.precision),e.shouldRound);if(i(e,"utils format() - bigNumber2",d.toFixed(_(e.precision))),/^0(\.0+)?$/g.test(m)&&e.allowBlank)return"";let[g,y]=m.split(".");const k=y!==void 0?y.length:0;g=g.padStart(e.minimumNumberOfCharacters-k,"0"),g=Le(g,e.thousands);const p=e.prefix+Qe(g,y,e.decimal)+e.suffix;return i(e,"utils format() - output",p),p}function H(t,e=f,s=""){if(i(e,"utils unformat() - caller",s),i(e,"utils unformat() - input",t),!e.disableNegative&&t==="-")return i(e,"utils unformat() - return netagive symbol",t),t;const r=e.disableNegative?"":t.indexOf("-")>=0?"-":"",a=t.replace(e.prefix,"").replace(e.suffix,"");i(e,"utils unformat() - filtered",a);const l=Ve(a);i(e,"utils unformat() - numbers",l);const d=new j(r+O(l,e.precision));i(e,"utils unformat() - bigNumber1",l.toString()),e.max&&d.biggerThan(e.max)&&d.setNumber(e.max),e.min&&d.lessThan(e.min)&&d.setNumber(e.min);let m=d.toFixed(_(e.precision),e.shouldRound);return e.modelModifiers&&e.modelModifiers.number&&(m=parseFloat(m)),i(e,"utils unformat() - output",m),m}const U=(t,e,s)=>{if(i(e,"directive setValue() - caller",s),!Ge(e)){i(e,"directive setValue() - validateRestrictedOptions() return false. Stopping here...",t.value);return}let r=t.value.length-(t.selectionEnd||0);t.value=I(t.value,e,s),r=Math.max(r,e.suffix.length),r=t.value.length-r,r=Math.max(r,e.prefix.length),Ae(t,r),t.dispatchEvent(Re("change"))},ge=(t,e)=>{const s=t.currentTarget,r=t.code==="Backspace"||t.code==="Delete",a=s.value.length-(s.selectionEnd||0)===0;if(i(e,"directive onkeydown() - el.value",s.value),i(e,"directive onkeydown() - backspacePressed",r),i(e,"directive onkeydown() - isAtEndPosition",a),e.allowBlank&&r&&a&&H(s.value,e,"directive onkeydown allowBlank")===0&&(i(e,'directive onkeydown() - set el.value = ""',s.value),s.value="",s.dispatchEvent(Re("change"))),i(e,"directive onkeydown() - e.key",t.key),t.key==="+"){i(e,"directive onkeydown() - unformat el.value",s.value);let l=H(s.value,e,"directive onkeydown +");typeof l=="string"&&(l=parseFloat(l)),l<0&&(s.value=String(l*-1))}},ve=(t,e)=>{const s=t.currentTarget;i(e,"directive oninput()",s.value),/^[1-9]$/.test(s.value)&&(s.value=O(s.value,_(e.precision)),i(e,"directive oninput() - is 1-9",s.value)),U(s,e,"directive oninput")},be=(t,e)=>{const s=t.currentTarget;i(e,"directive onFocus()",s.value),e.focusOnRight&&Ae(s,s.value.length-e.suffix.length)},Ke={mounted(t,e){if(!e.value)return;const s=F({...f,...e.value});if(i(s,"directive mounted() - opt",s),t.tagName.toLocaleUpperCase()!=="INPUT"){const r=t.getElementsByTagName("input");r.length!==1||(t=r[0])}t.onkeydown=r=>{ge(r,s)},t.oninput=r=>{ve(r,s)},t.onfocus=r=>{be(r,s)},i(s,"directive mounted() - el.value",t.value),U(t,s,"directive mounted")},updated(t,e){if(!e.value)return;const s=F({...f,...e.value});t.onkeydown=r=>{ge(r,s)},t.oninput=r=>{ve(r,s)},t.onfocus=r=>{be(r,s)},i(s,"directive updated() - el.value",t.value),i(s,"directive updated() - opt",s),U(t,s,"directive updated")},beforeUnmount(t){t.onkeydown=null,t.oninput=null,t.onfocus=null}},We=["id","value","disabled"],Ze={inheritAttrs:!1,name:"Money3",directives:{money3:Ke}},xe=T({...Ze,props:{debug:{required:!1,type:Boolean,default:!1},id:{required:!1,type:[Number,String],default:()=>{const t=Ee();return t?t.uid:null}},modelValue:{required:!0,type:[Number,String]},modelModifiers:{required:!1,type:Object,default:()=>({number:!1})},masked:{type:Boolean,default:!1},precision:{type:Number,default:()=>f.precision},decimal:{type:String,default:()=>f.decimal,validator(t){return B(t,"decimal")}},thousands:{type:String,default:()=>f.thousands,validator(t){return B(t,"thousands")}},prefix:{type:String,default:()=>f.prefix,validator(t){return B(t,"prefix")}},suffix:{type:String,default:()=>f.suffix,validator(t){return B(t,"suffix")}},disableNegative:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},max:{type:[Number,String],default:()=>f.max},min:{type:[Number,String],default:()=>f.min},allowBlank:{type:Boolean,default:()=>f.allowBlank},minimumNumberOfCharacters:{type:Number,default:()=>f.minimumNumberOfCharacters},shouldRound:{type:Boolean,default:()=>f.shouldRound},focusOnRight:{type:Boolean,default:()=>f.focusOnRight}},emits:["update:model-value"],setup(t,{emit:e}){const s=t,{modelValue:r,modelModifiers:a,masked:l,precision:d,shouldRound:m,focusOnRight:g}=Oe(s);i(s,"component setup()",s);let y=r.value;(s.disableNegative||y!=="-")&&a.value&&a.value.number&&(m.value?y=Number(r.value).toFixed(_(d.value)):y=Number(r.value).toFixed(_(d.value)+1).slice(0,-1));const k=E(I(y,s,"component setup"));i(s,"component setup() - data.formattedValue",k.value),Fe(r,p);function p(b){i(s,"component watch() -> value",b);const n=I(b,F({...s}),"component watch");n!==k.value&&(i(s,"component watch() changed -> formatted",n),k.value=n)}let v=null;function P(b){let n=b.target.value;i(s,"component change() -> evt.target.value",n),l.value&&!a.value.number||(n=H(n,F({...s}),"component change")),n!==v&&(v=n,i(s,"component change() -> update:model-value",n),e("update:model-value",n))}const M=je(),S=Pe(()=>{const b={...M};return delete b["onUpdate:modelValue"],b});return(b,n)=>{const D=we("money3");return _e((h(),x("input",ke({id:`${t.id}`},u(S),{type:"tel",class:"v-money3",value:k.value,disabled:s.disabled,onChange:P}),null,16,We)),[[D,{precision:u(d),decimal:s.decimal,thousands:s.thousands,prefix:s.prefix,suffix:s.suffix,disableNegative:s.disableNegative,min:s.min,max:s.max,allowBlank:s.allowBlank,minimumNumberOfCharacters:s.minimumNumberOfCharacters,debug:s.debug,modelModifiers:u(a),shouldRound:u(m),focusOnRight:u(g)}]])}}}),ye=T({__name:"MoneyInput",setup(t){T({Money3Component:xe});const e={masked:!1,prefix:"",suffix:"",thousands:".",decimal:",",precision:2,disableNegative:!0,disabled:!1,min:null,max:null,allowBlank:!1,minimumNumberOfCharacters:0,shouldRound:!0,focusOnRight:!1};return(s,r)=>(h(),Ne(u(xe),ke({class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"},e),null,16))}}),Je=o("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},"Dashboard",-1),Xe={class:"py-12 max-w-7xl mx-auto flex"},Ye={class:"p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},et=o("div",{class:"flex items-center justify-between mb-4"},[o("h5",{class:"text-xl font-bold leading-none text-gray-900 dark:text-white"},"Transações")],-1),tt={class:"flow-root"},st={role:"list",class:"divide-y divide-gray-200 dark:divide-gray-700"},rt={class:"flex items-center space-x-4"},ot={class:"flex-shrink-0"},at={key:0,class:"w-5 h-5 text-gray-400 dark:text-white",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},nt=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"},null,-1),it=[nt],lt={key:1,class:"w-5 h-5 text-gray-400 dark:text-white",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},ut=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"},null,-1),dt=[ut],ct={key:2,class:"w-5 h-5 text-gray-400 dark:text-white",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},mt=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"},null,-1),pt=[mt],ft={class:"text-sm font-medium text-gray-900 truncate dark:text-white"},ht={key:0,class:"text-sm text-gray-500 truncate dark:text-gray-400"},gt={class:"inline-flex"},vt={class:"font-semibold text-gray-900 dark:text-white"},bt={class:"text-sm text-gray-500 truncate dark:text-gray-400"},xt={key:1},yt=o("div",{class:"flex p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",role:"alert"},[o("svg",{"aria-hidden":"true",class:"flex-shrink-0 inline w-5 h-5 mr-3",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})]),o("span",{class:"sr-only"},"Info"),o("div",null,[o("span",{class:"font-medium"},"Oopps!"),$(" Ainda não há nenhuma transação na sua carteira! ")])],-1),wt=[yt],_t={class:"w-1/3 sm:px-6 lg:px-8"},kt={class:"bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between"},Nt=o("div",{class:"p-6 text-gray-900 dark:text-gray-100"},"Saldo Atual:",-1),$t={class:"p-6 font-semibold text-gray-900 dark:text-white text-end flex items-center"},Ct={key:0,class:"bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between mt-4"},Vt=o("div",{class:"p-6 text-gray-900 dark:text-gray-100"},"Depositar",-1),Bt=o("svg",{class:"h-5 w-5",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})],-1),Mt=o("span",{class:"sr-only"},"Depositar",-1),St=[Bt,Mt],Dt={key:1,class:"bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between mt-4"},At=o("div",{class:"p-6 text-gray-900 dark:text-gray-100"},"Nova Transação",-1),Rt=o("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"})],-1),Tt=o("span",{class:"sr-only"},"Nova Transação",-1),Ot=[Rt,Tt],Ft={class:"p-6 text-center"},jt=o("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Depositar ",-1),Pt=o("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Informe a quantia desejada para fazer o deposito. ",-1),Et={class:"mt-6"},It={class:"mt-6 flex justify-end"},Ht={class:"p-6 text-center"},Ut=o("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Transferir ",-1),zt=o("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Preencha o formulário abaixo para realizar a transferência. ",-1),qt={class:"text-center"},Lt={class:"mt-6"},Qt={class:"mt-6"},Gt={class:"mt-6"},Kt={class:"mt-6 flex justify-end"},ss=T({__name:"Dashboard",props:{transactions:null},setup(t){const e=E(!1),s=E(!1),r=ie({amount:""}),a=ie({document:"",amount:"",password:""}),l=()=>{e.value=!0},d=()=>{s.value=!0},m=()=>{e.value=!1,r.reset()},g=()=>{s.value=!1,a.reset()},y=()=>{r.post(route("deposit"),{preserveScroll:!0,onSuccess:()=>{m()},onFinish:()=>{r.reset()}})},k=()=>{a.post(route("transfer"),{preserveScroll:!0,onSuccess:()=>{g()},onFinish:()=>{}})};return(p,v)=>{const P=we("mask");return h(),x(le,null,[c(u(Ie),{title:"Dashboard"}),c(Te,null,{header:w(()=>[Je]),default:w(()=>{var M,S,b;return[o("div",Xe,[o("div",{class:C(["sm:px-6 lg:px-8",{"w-full":p.$page.props.auth.isShopkeeper,"w-2/3":p.$page.props.auth.isUser}])},[o("div",Ye,[et,o("div",tt,[o("ul",st,[t.transactions.length>0?(h(!0),x(le,{key:0},He(t.transactions,n=>{var D,z,q,L,Q,G,K,W,Z,J,X,Y,ee,te,se,re,oe,ae,ne;return h(),x("li",{key:n.id,class:"py-3 sm:py-4"},[o("div",rt,[o("div",ot,[n.description==1?(h(),x("svg",at,it)):N("",!0),n.description==2&&n.wallet_id==((q=(z=(D=p.$page.props.auth)==null?void 0:D.user)==null?void 0:z.wallet)==null?void 0:q.id)?(h(),x("svg",lt,dt)):N("",!0),n.description==2&&n.wallet_id!=((G=(Q=(L=p.$page.props.auth)==null?void 0:L.user)==null?void 0:Q.wallet)==null?void 0:G.id)?(h(),x("svg",ct,pt)):N("",!0)]),o("div",{class:C(["flex-1 min-w-0",{"line-through":n.refunded_at}])},[o("p",ft,[$(V(n.description==1?"Depósito":n.wallet_id==((Z=(W=(K=p.$page.props.auth)==null?void 0:K.user)==null?void 0:W.wallet)==null?void 0:Z.id)?"Tranferência Recebida":"Transferência Feita")+" ",1),n.description==2&&n.wallet_id==((Y=(X=(J=p.$page.props.auth)==null?void 0:J.user)==null?void 0:X.wallet)==null?void 0:Y.id)&&!n.refunded_at?(h(),Ne(u(Ue),{key:0,href:p.route("refund",{transaction:n.id}),as:"button",method:"post",class:"pointer text-sm text-blue-500 truncate dark:text-blue-400"},{default:w(()=>[$(" Reembolsar ")]),_:2},1032,["href"])):N("",!0)]),n.description==2?(h(),x("p",ht,V(n.wallet_id==((se=(te=(ee=p.$page.props.auth)==null?void 0:ee.user)==null?void 0:te.wallet)==null?void 0:se.id)?`De: ${(oe=(re=n.reference)==null?void 0:re.user)==null?void 0:oe.name}`:`Para: ${(ne=(ae=n.wallet)==null?void 0:ae.user)==null?void 0:ne.name}`),1)):N("",!0)],2),o("div",gt,[o("div",{class:C(["text-end",{"line-through":n.refunded_at}])},[o("p",vt," R$ "+V(n.difference),1),o("p",bt,V(n.created_at),1)],2)])])])}),128)):(h(),x("li",xt,wt))])])])],2),o("div",_t,[o("div",kt,[Nt,o("p",$t," R$ "+V((b=(S=(M=p.$page.props.auth)==null?void 0:M.user)==null?void 0:S.wallet)==null?void 0:b.balance),1)]),p.$page.props.auth.isUser?(h(),x("div",Ct,[Vt,o("button",{type:"button",onClick:l,class:"p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},St)])):N("",!0),p.$page.props.auth.isUser?(h(),x("div",Dt,[At,o("button",{type:"button",onClick:d,class:"p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},Ot)])):N("",!0)])]),c(ue,{show:e.value,onClose:m},{default:w(()=>[o("div",Ft,[jt,Pt,o("div",Et,[c(A,{for:"amount",value:"Valor",class:"sr-only"}),c(ye,{id:"amount",modelValue:u(r).amount,"onUpdate:modelValue":v[0]||(v[0]=n=>u(r).amount=n),class:"mt-1 w-2/4",placeholder:"Quantia"},null,8,["modelValue"]),c(R,{message:u(r).errors.amount,class:"mt-2"},null,8,["message"])]),o("div",It,[c(de,{onClick:m},{default:w(()=>[$(" Cancelar")]),_:1}),c(me,{class:C(["ml-3",{"opacity-25":u(r).processing}]),disabled:u(r).processing,onClick:y},{default:w(()=>[$(" Depositar ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"]),c(ue,{show:s.value,onClose:g},{default:w(()=>[o("div",Ht,[Ut,zt,o("div",qt,[o("div",Lt,[c(A,{for:"document",value:"Documento do Destinatário"}),_e(c(ce,{id:"document",type:"text",modelValue:u(a).document,"onUpdate:modelValue":v[1]||(v[1]=n=>u(a).document=n),class:"mt-1 w-3/4",placeholder:"Documento"},null,8,["modelValue"]),[[P,["###.###.###-##","##.###.###/####-##"]]]),c(R,{message:u(a).errors.document,class:"mt-2"},null,8,["message"])]),o("div",Qt,[c(A,{for:"amount",value:"Valor"}),c(ye,{id:"amount",ref:"depositInput",modelValue:u(a).amount,"onUpdate:modelValue":v[2]||(v[2]=n=>u(a).amount=n),class:"mt-1 w-3/4",placeholder:"Quantia"},null,8,["modelValue"]),c(R,{message:u(a).errors.amount,class:"mt-2"},null,8,["message"])]),o("div",Gt,[c(A,{for:"password",value:"Senha"}),c(ce,{id:"password",type:"password",class:"mt-1 w-3/4",modelValue:u(a).password,"onUpdate:modelValue":v[3]||(v[3]=n=>u(a).password=n),required:"",autocomplete:"current-password",placeholder:"Senha"},null,8,["modelValue"]),c(R,{class:"mt-2",message:u(a).errors.password},null,8,["message"])])]),o("div",Kt,[c(de,{onClick:g},{default:w(()=>[$(" Cancelar")]),_:1}),c(me,{class:C(["ml-3",{"opacity-25":u(a).processing}]),disabled:u(a).processing,onClick:k},{default:w(()=>[$(" Transferir ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]}),_:1})],64)}}});export{ss as default};
