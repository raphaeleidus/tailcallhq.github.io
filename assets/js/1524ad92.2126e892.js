"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8202],{502:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=s(5893),r=s(1151);const a={title:"Basic Auth",description:"Learn how you can provide granular access to types and fields in GraphQL schema with the help of authentication providers"},i=void 0,c={id:"auth/basic-auth",title:"Basic Auth",description:"Learn how you can provide granular access to types and fields in GraphQL schema with the help of authentication providers",source:"@site/docs/auth/basic-auth.md",sourceDirName:"auth",slug:"/auth/basic-auth",permalink:"/docs/auth/basic-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/auth/basic-auth.md",tags:[],version:"current",frontMatter:{title:"Basic Auth",description:"Learn how you can provide granular access to types and fields in GraphQL schema with the help of authentication providers"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/auth"},next:{title:"JWT",permalink:"/docs/auth/jwt"}},o={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Tailcall config",id:"tailcall-config",level:2},{value:"Making test request",id:"making-test-request",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Basic Authentication"})," is a straightforward authentication scheme that sends base64-encoded usernames and passwords in the HTTP Authorization header with each request. It's simple to implement but requires HTTPS to ensure security due to its lack of encryption."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["To be able to use Basic Authentication support you should have configured ",(0,n.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html",children:(0,n.jsx)(t.code,{children:"htpasswd"})})," file that contains users credentials data."]}),"\n",(0,n.jsxs)(t.p,{children:["To generate this data you can use ",(0,n.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html",children:"Apache tooling"})," itself or available ",(0,n.jsx)(t.a,{href:"https://hostingcanada.org/htpasswd-generator/",children:"web-tool"})]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"Since this file stores secure information make sure to hash the password you use with secure algorithms"})}),"\n",(0,n.jsx)(t.h2,{id:"tailcall-config",children:"Tailcall config"}),"\n",(0,n.jsxs)(t.p,{children:["To use Basic Auth you should first include htpasswd file generated from ",(0,n.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"})," with the help of ",(0,n.jsxs)(t.a,{href:"/docs/directives/link#htpasswd",children:[(0,n.jsx)(t.code,{children:"@link"})," directive"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We can use that file as an example for it that has data for ",(0,n.jsx)(t.code,{children:"testuser:mypassword"})," credentials in encrypted format:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",metastring:'title="htpasswd"',children:"testuser:$2y$10$wJ/mZDURcAOBIrswCAKFsO0Nk7BpHmWl/XuhF7lNm3gBAFH3ofsuu\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After adding ",(0,n.jsx)(t.code,{children:"@link"})," you can use the ",(0,n.jsxs)(t.a,{href:"/docs/directives/protected",children:[(0,n.jsx)(t.code,{children:"@protected"})," directive"]})," to mark the fields that requiring success authentication to be requested."]}),"\n",(0,n.jsx)(t.p,{children:"The whole example could look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema\n  @server(port: 8000, graphiql: true)\n  @upstream(baseURL: "http://jsonplaceholder.typicode.com")\n  @link(id: "auth-basic", type: Htpasswd, src: "htpasswd") {\n  query: Query\n}\n\ntype Query {\n  user(id: Int!): User @http(path: "/users/{{args.id}}")\n}\n\ntype User @protected {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"making-test-request",children:"Making test request"}),"\n",(0,n.jsx)(t.p,{children:"Now you can run the example file with Tailcall and try to make a query for data with specifying credentials."}),"\n",(0,n.jsxs)(t.p,{children:["To make the request first create base64 encoded string from the ",(0,n.jsx)(t.code,{children:"testuser:mypassword"})," string and then append the result to the ",(0,n.jsx)(t.code,{children:"Authorization: Basic"})," header."]}),"\n",(0,n.jsx)(t.p,{children:"A request example with curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"curl --request POST \\\n  --url http://localhost:8000/graphql \\\n  --header 'Authorization: Basic dGVzdHVzZXI6bXlwYXNzd29yZA==' \\\n  --data '{\"query\":\"query {\\n\\tuser(id: 1) { name }\\n}\"}'\n"})}),"\n",(0,n.jsx)(t.p,{children:"or you can use the GraphQL Playground and add the header in the HTTP Headers section:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "Authorization": "Basic dGVzdHVzZXIyOm15cGFzc3dvcmQ="\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"with query:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"query {\n  user(id: 1) {\n    name\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Executing such request should be resolved with the user and its name."})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var n=s(7294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);