"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5091],{5704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(5893),o=n(1151);const a={title:"@cache"},i=void 0,s={id:"operators/cache",title:"@cache",description:"The @cache operator enables caching for the query, field or type it is applied to. For eg:",source:"@site/docs/operators/cache.md",sourceDirName:"operators",slug:"/operators/cache",permalink:"/docs/operators/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/cache.md",tags:[],version:"current",frontMatter:{title:"@cache"},sidebar:"tutorialSidebar",previous:{title:"@addField",permalink:"/docs/operators/add-field"},next:{title:"@const",permalink:"/docs/operators/const"}},c={},l=[{value:"maxAge",id:"maxage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"@cache"})," operator enables caching for the query, field or type it is applied to. For eg:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"schema {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @cache(maxAge: 3000)\n  user(id: Int): User\n}\n\ntype Post {\n  title: String\n  body: String\n  user: User\n}\n\ntype User @cache(maxAge: 4000) {\n  id: Int\n  name: String @cache(maxAge: 8000)\n  age: Int\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"maxage",children:"maxAge"}),"\n",(0,r.jsxs)(t.p,{children:["the parameter ",(0,r.jsx)(t.code,{children:"maxAge"})," takes a non-zero unsigned integer value which signifies the duration, in milliseconds, for which the value will be cached."]}),"\n",(0,r.jsxs)(t.p,{children:["In the above example, the entire result of ",(0,r.jsx)(t.code,{children:"posts"})," query will be cached for 3000ms. When the ",(0,r.jsx)(t.strong,{children:"@cache"})," operator is applied to a type, it is equivalent to applying it to each field individually. If for a type, one of the fields needs to be cached differently then this operator can be applied to that field separately and it will override the values provided for the type, as can be seen in the above example for ",(0,r.jsx)(t.code,{children:"name"})," field in the ",(0,r.jsx)(t.code,{children:"User"})," type."]}),"\n",(0,r.jsx)(t.h1,{id:"how-does-the-caching-work",children:"How does the caching work?"}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.strong,{children:"@cache"})," is set for a query or a field, the resolver for it will run once and the result will be stored in memory for ",(0,r.jsx)(t.code,{children:"maxAge"})," milliseconds, and will expire after this duration. After the cache expires, the resolver will be run again to fetch the latest value and that value will then be cached."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(7294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);