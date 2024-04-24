"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9027],{4762:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(5893),s=o(1151);const i={description:"Load balancing recipe"},t="Load Balancing",a={id:"cookbook/load-balancing",title:"Load Balancing",description:"Load balancing recipe",source:"@site/docs/cookbook/load-balancing.md",sourceDirName:"cookbook",slug:"/cookbook/load-balancing",permalink:"/docs/cookbook/load-balancing",draft:!1,unlisted:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/cookbook/load-balancing.md",tags:[],version:"current",frontMatter:{description:"Load balancing recipe"},sidebar:"docsSidebar",previous:{title:"JWT",permalink:"/docs/cookbook/jwt"},next:{title:"Middleware",permalink:"/docs/cookbook/middleware"}},c={},l=[{value:"Echo",id:"echo",level:2},{value:"Start servers",id:"start-servers",level:3},{value:"Nginx",id:"nginx",level:2},{value:"1) Install Nginx",id:"1-install-nginx",level:3},{value:"2) Configure Nginx",id:"2-configure-nginx",level:3},{value:"3) Restart Nginx",id:"3-restart-nginx",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"load-balancing",children:"Load Balancing"}),"\n",(0,r.jsx)(n.p,{children:"This recipe demonstrates how you can use Nginx as a reverse proxy server and load balance between multiple Echo servers."}),"\n",(0,r.jsx)(n.h2,{id:"echo",children:"Echo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:"reference",children:"https://github.com/labstack/echox/blob/master/cookbook/load-balancing/upstream/server.go\n"})}),"\n",(0,r.jsx)(n.h3,{id:"start-servers",children:"Start servers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cd upstream"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"go run server.go server1 :8081"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"go run server.go server2 :8082"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nginx",children:"Nginx"}),"\n",(0,r.jsx)(n.h3,{id:"1-install-nginx",children:"1) Install Nginx"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install",children:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install"})}),"\n",(0,r.jsx)(n.h3,{id:"2-configure-nginx",children:"2) Configure Nginx"}),"\n",(0,r.jsxs)(n.p,{children:["Create a file ",(0,r.jsx)(n.code,{children:"/etc/nginx/sites-enabled/localhost"})," with the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-reference",children:"https://github.com/labstack/echox/blob/master/cookbook/load-balancing/nginx.conf\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Change listen, server_name, access_log per your need."})}),"\n",(0,r.jsx)(n.h3,{id:"3-restart-nginx",children:"3) Restart Nginx"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"service nginx restart\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Browse to ",(0,r.jsx)(n.a,{href:"https://localhost:8080",children:"https://localhost:8080"}),', and you should see a webpage being served from either "server 1" or "server 2".']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"Hello from upstream server server1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>t});var r=o(7294);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);