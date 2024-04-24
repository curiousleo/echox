"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1924],{1921:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(5893),n=i(1151);const s={description:"Handling cookie",slug:"/cookies",sidebar_position:5},r="Cookies",l={id:"guide/cookies",title:"Cookies",description:"Handling cookie",source:"@site/docs/guide/cookies.md",sourceDirName:"guide",slug:"/cookies",permalink:"/docs/cookies",draft:!1,unlisted:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/guide/cookies.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Handling cookie",slug:"/cookies",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Context",permalink:"/docs/context"},next:{title:"Error Handling",permalink:"/docs/error-handling"}},c={},d=[{value:"Cookie Attributes",id:"cookie-attributes",level:2},{value:"Create a Cookie",id:"create-a-cookie",level:2},{value:"Read a Cookie",id:"read-a-cookie",level:2},{value:"Read all the Cookies",id:"read-all-the-cookies",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"cookies",children:"Cookies"}),"\n",(0,o.jsx)(t.p,{children:"Cookie is a small piece of data sent from a website server and stored in the user's web\nbrowser while browsing. Every time the user loads the website, the browser\nsends the cookies back to the server to notify the server of user's latest activity.\nCookies were designed to be a reliable mechanism for websites to remember stateful\ninformation (e.g. items added to the shopping cart in an online store) or to\nrecord the user's browsing activity (such as clicking particular buttons, logging\nin, or user previously visited pages of the website). Cookies can also store form content a user has previously entered, such as username, gender, age, address, etc."}),"\n",(0,o.jsx)(t.h2,{id:"cookie-attributes",children:"Cookie Attributes"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Optional"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Name"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"No"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Value"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"No"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Path"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Domain"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Expires"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"Secure"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"HttpOnly"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Echo uses go standard ",(0,o.jsx)(t.code,{children:"http.Cookie"})," object to add/retrieve cookies from the context received in the handler function."]}),"\n",(0,o.jsx)(t.h2,{id:"create-a-cookie",children:"Create a Cookie"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'func writeCookie(c echo.Context) error {\n\tcookie := new(http.Cookie)\n\tcookie.Name = "username"\n\tcookie.Value = "jon"\n\tcookie.Expires = time.Now().Add(24 * time.Hour)\n\tc.SetCookie(cookie)\n\treturn c.String(http.StatusOK, "write a cookie")\n}\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Cookie is created using ",(0,o.jsx)(t.code,{children:"new(http.Cookie)"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Attributes for the cookie are set assigning to the ",(0,o.jsx)(t.code,{children:"http.Cookie"})," instance public attributes."]}),"\n",(0,o.jsxs)(t.li,{children:["Finally ",(0,o.jsx)(t.code,{children:"c.SetCookie(cookie)"})," adds a ",(0,o.jsx)(t.code,{children:"Set-Cookie"})," header in HTTP response."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"read-a-cookie",children:"Read a Cookie"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'func readCookie(c echo.Context) error {\n\tcookie, err := c.Cookie("username")\n\tif err != nil {\n\t\treturn err\n\t}\n\tfmt.Println(cookie.Name)\n\tfmt.Println(cookie.Value)\n\treturn c.String(http.StatusOK, "read a cookie")\n}\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Cookie is read by name using ",(0,o.jsx)(t.code,{children:'c.Cookie("username")'})," from the HTTP request."]}),"\n",(0,o.jsxs)(t.li,{children:["Cookie attributes are accessed using ",(0,o.jsx)(t.code,{children:"Getter"})," function."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"read-all-the-cookies",children:"Read all the Cookies"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'func readAllCookies(c echo.Context) error {\n\tfor _, cookie := range c.Cookies() {\n\t\tfmt.Println(cookie.Name)\n\t\tfmt.Println(cookie.Value)\n\t}\n\treturn c.String(http.StatusOK, "read all the cookies")\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>r});var o=i(7294);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);