"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2411],{3349:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(5893),t=r(1151);const i={description:"Routing requests",slug:"/routing",sidebar_position:10},o="Routing",c={id:"guide/routing",title:"Routing",description:"Routing requests",source:"@site/docs/guide/routing.md",sourceDirName:"guide",slug:"/routing",permalink:"/docs/routing",draft:!1,unlisted:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/guide/routing.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Routing requests",slug:"/routing",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Response",permalink:"/docs/response"},next:{title:"Static Files",permalink:"/docs/static-files"}},a={},d=[{value:"Match-any / wildcard",id:"match-any--wildcard",level:2},{value:"Path Matching Order",id:"path-matching-order",level:2},{value:"Group",id:"group",level:2},{value:"Route Naming",id:"route-naming",level:2},{value:"URI Building",id:"uri-building",level:2},{value:"List Routes",id:"list-routes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"routing",children:"Routing"}),"\n",(0,s.jsxs)(n.p,{children:["Echo's router is based on ",(0,s.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Radix_tree",children:"radix tree"}),", making\nroute lookup really fast. It leverages ",(0,s.jsx)(n.a,{href:"https://golang.org/pkg/sync/#Pool",children:"sync pool"}),"\nto reuse memory and achieve zero dynamic memory allocation with no GC overhead."]}),"\n",(0,s.jsxs)(n.p,{children:["Routes can be registered by specifying HTTP method, path and a matching handler.\nFor example, code below registers a route for method ",(0,s.jsx)(n.code,{children:"GET"}),", path ",(0,s.jsx)(n.code,{children:"/hello"})," and a\nhandler which sends ",(0,s.jsx)(n.code,{children:"Hello, World!"})," HTTP response."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Handler\nfunc hello(c echo.Context) error {\n  \treturn c.String(http.StatusOK, "Hello, World!")\n}\n\n// Route\ne.GET("/hello", hello)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"Echo.Any(path string, h Handler)"})," to register a handler for all HTTP methods.\nIf you want to register it for some methods use ",(0,s.jsx)(n.code,{children:"Echo.Match(methods []string, path string, h Handler)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Echo defines handler function as ",(0,s.jsx)(n.code,{children:"func(echo.Context) error"})," where ",(0,s.jsx)(n.code,{children:"echo.Context"})," primarily\nholds HTTP request and response interfaces."]}),"\n",(0,s.jsx)(n.h2,{id:"match-any--wildcard",children:"Match-any / wildcard"}),"\n",(0,s.jsxs)(n.p,{children:["Matches zero or more characters in the path. For example, pattern ",(0,s.jsx)(n.code,{children:"/users/*"})," will\nmatch:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/1/files/1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/anything..."})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["There can be only one effective match-any parameter in route. When route is added with multiple match-any\n",(0,s.jsx)(n.code,{children:"/v1/*/images/*"}),". The router matches always the first ",(0,s.jsx)(n.code,{children:"*"})," till the end of requst URL i.e. it works as ",(0,s.jsx)(n.code,{children:"/v1/*"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"path-matching-order",children:"Path Matching Order"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Static"}),"\n",(0,s.jsx)(n.li,{children:"Param"}),"\n",(0,s.jsx)(n.li,{children:"Match any"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'e.GET("/users/:id", func(c echo.Context) error {\n\treturn c.String(http.StatusOK, "/users/:id")\n})\n\ne.GET("/users/new", func(c echo.Context) error {\n\treturn c.String(http.StatusOK, "/users/new")\n})\n\ne.GET("/users/1/files/*", func(c echo.Context) error {\n\treturn c.String(http.StatusOK, "/users/1/files/*")\n})\n'})}),"\n",(0,s.jsx)(n.p,{children:"Above routes would resolve in the following order:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/new"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/:id"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/users/1/files/*"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Routes can be written in any order."})}),"\n",(0,s.jsx)(n.h2,{id:"group",children:"Group"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Echo#Group(prefix string, m ...Middleware) *Group"})}),"\n",(0,s.jsxs)(n.p,{children:["Routes with common prefix can be grouped to define a new sub-router with optional\nmiddleware. In addition to specified middleware group also inherits parent middleware.\nTo add middleware later in the group you can use ",(0,s.jsx)(n.code,{children:"Group.Use(m ...Middleware)"}),".\nGroups can also be nested."]}),"\n",(0,s.jsxs)(n.p,{children:["In the code below, we create an admin group which requires basic HTTP authentication\nfor routes ",(0,s.jsx)(n.code,{children:"/admin/*"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'g := e.Group("/admin")\ng.Use(middleware.BasicAuth(func(username, password string, c echo.Context) (bool, error) {\n\tif username == "joe" && password == "secret" {\n\t\treturn true, nil\n\t}\n\treturn false, nil\n}))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"route-naming",children:"Route Naming"}),"\n",(0,s.jsxs)(n.p,{children:["Each of the registration methods returns a ",(0,s.jsx)(n.code,{children:"Route"})," object, which can be used to name a route after the registration. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'route := e.POST("/users", func(c echo.Context) error {\n})\nroute.Name = "create-user"\n\n// or using the inline syntax\ne.GET("/users/:id", func(c echo.Context) error {\n}).Name = "get-user"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Route names can be very useful when generating URIs from the templates, where you can't access the handler references or when you have multiple routes with the same handler."}),"\n",(0,s.jsx)(n.h2,{id:"uri-building",children:"URI Building"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Echo#URI(handler HandlerFunc, params ...interface{})"})," can be used to generate URI for any handler with specified path parameters. It's helpful to centralize all your\nURI patterns which ease in refactoring your application."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.code,{children:"e.URI(h, 1)"})," will generate ",(0,s.jsx)(n.code,{children:"/users/1"})," for the route registered below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Handler\nh := func(c echo.Context) error {\n\treturn c.String(http.StatusOK, "OK")\n}\n\n// Route\ne.GET("/users/:id", h)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In addition to ",(0,s.jsx)(n.code,{children:"Echo#URI"}),", there is also ",(0,s.jsx)(n.code,{children:"Echo#Reverse(name string, params ...interface{})"})," which is used to generate URIs based on the route name. For example a call to ",(0,s.jsx)(n.code,{children:'Echo#Reverse("foobar", 1234)'})," would generate the URI ",(0,s.jsx)(n.code,{children:"/users/1234"})," if the ",(0,s.jsx)(n.code,{children:"foobar"})," route is registered like below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Handler\nh := func(c echo.Context) error {\n\treturn c.String(http.StatusOK, "OK")\n}\n\n// Route\ne.GET("/users/:id", h).Name = "foobar"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"list-routes",children:"List Routes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Echo#Routes() []*Route"})," can be used to list all registered routes in the order\nthey are defined. Each route contains HTTP method, path and an associated handler."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Handlers\nfunc createUser(c echo.Context) error {\n}\n\nfunc findUser(c echo.Context) error {\n}\n\nfunc updateUser(c echo.Context) error {\n}\n\nfunc deleteUser(c echo.Context) error {\n}\n\n// Routes\ne.POST("/users", createUser)\ne.GET("/users", findUser)\ne.PUT("/users", updateUser)\ne.DELETE("/users", deleteUser)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Using the following code you can output all the routes to a JSON file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'data, err := json.MarshalIndent(e.Routes(), "", "  ")\nif err != nil {\n\treturn err\n}\nos.WriteFile("routes.json", data, 0644)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"routes.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'[\n  {\n    "method": "POST",\n    "path": "/users",\n    "name": "main.createUser"\n  },\n  {\n    "method": "GET",\n    "path": "/users",\n    "name": "main.findUser"\n  },\n  {\n    "method": "PUT",\n    "path": "/users",\n    "name": "main.updateUser"\n  },\n  {\n    "method": "DELETE",\n    "path": "/users",\n    "name": "main.deleteUser"\n  }\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var s=r(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);