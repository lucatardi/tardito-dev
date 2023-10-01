"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[9471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:17},i="Modules",l={unversionedId:"angular/modules",id:"angular/modules",title:"Modules",description:"In Angular, a module is like a container that groups specific parts of an application. It's a way to organize and separate code into different functional units. Simply put, you can think of a module as a container for components, services, and other resources that belong to a specific part of the application.",source:"@site/docs/angular/modules.md",sourceDirName:"angular",slug:"/angular/modules",permalink:"/docs/angular/modules",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/docs/angular/routing"},next:{title:"React",permalink:"/docs/category/react"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("p",null,"In Angular, a module is like a container that groups specific parts of an application. It's a way to organize and separate code into different functional units. Simply put, you can think of a module as a container for components, services, and other resources that belong to a specific part of the application."),(0,o.kt)("p",null,"Imagine building a car: you have the engine, the wheels, the interior, and so on. Each part of this car can be considered a module. The engine has internal components that work together to make it function, just like a module in Angular contains components and services that collaborate to perform a specific function in the application."),(0,o.kt)("p",null,"Modules help keep the application organized, make the code more manageable, and promote the reusability of different parts of the application. Additionally, Angular provides a root module called AppModule, which is the main module of the application and serves as a starting point for organizing all other modules."),(0,o.kt)("p",null,"For creating and registering a module, you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NgModule")," decorator, which accepts various parameters such as the registered and included components within the module or other modules imported and used within it."),(0,o.kt)("p",null,"The more complex and sophisticated the application, the more sense it makes to use modules to divide it and facilitate maintenance."))}u.isMDXComponent=!0}}]);