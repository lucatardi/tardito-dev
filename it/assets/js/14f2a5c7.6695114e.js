"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[2545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},o=void 0,l={unversionedId:"python/dictionaries",id:"python/dictionaries",title:"dictionaries",description:"In Python, a dictionary is an unordered collection of key-value pairs. Dictionaries are also known as associative arrays or hash maps in other programming languages. Each key in a dictionary is associated with a specific value. Dictionaries are defined using curly braces {} and the key-value pairs are separated by colons :.",source:"@site/docs/python/dictionaries.md",sourceDirName:"python",slug:"/python/dictionaries",permalink:"/it/docs/python/dictionaries",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tuples \u2987\ud83d\udc27\u2988",permalink:"/it/docs/python/tuples"},next:{title:"Da JavaScript a Python",permalink:"/it/docs/python"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Python, a dictionary is an unordered collection of key-value pairs. Dictionaries are also known as associative arrays or hash maps in other programming languages. Each key in a dictionary is associated with a specific value. Dictionaries are defined using curly braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," and the key-value pairs are separated by colons ",(0,r.kt)("inlineCode",{parentName:"p"},":"),"."),(0,r.kt)("p",null,"Here's a basic example of creating a dictionary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'my_dict = {\n    "name": "John",\n    "age": 30,\n    "city": "New York"\n}\n')),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"name"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"age"'),", and ",(0,r.kt)("inlineCode",{parentName:"p"},'"city"')," are keys, and ",(0,r.kt)("inlineCode",{parentName:"p"},'"John"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"30"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},'"New York"')," are their corresponding values."),(0,r.kt)("p",null,"You can access values in a dictionary by referencing their keys. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'name = my_dict["name"]  # Access the value associated with the key "name" ("John")\n')),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method to access values and provide a default value if the key is not present:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'country = my_dict.get("country", "Unknown")  # Access the value associated with the key "country" (returns "Unknown" if not found)\n')),(0,r.kt)("p",null,"Some important things to note about dictionaries:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unordered"),": Dictionaries are unordered, meaning the order of key-value pairs is not guaranteed. Starting from Python 3.7, dictionaries maintain the insertion order.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keys are Unique"),": Keys in a dictionary must be unique. If you use the same key with a different value, the original value associated with that key will be overwritten.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mutable"),": Dictionaries are mutable, which means you can add, update, and remove key-value pairs after creating the dictionary."))),(0,r.kt)("p",null,"Here are some common dictionary operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adding a new key-value pair:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'my_dict["email"] = "john@example.com"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modifying an existing value:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'my_dict["age"] = 31\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removing a key-value pair:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'del my_dict["city"]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checking if a key exists in the dictionary:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if "name" in my_dict:\n    # Do something\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Getting a list of keys or values:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"keys = my_dict.keys()\nvalues = my_dict.values()\n")))),(0,r.kt)("p",null,"Dictionaries are commonly used in Python for tasks like storing configuration settings, mapping between related data, and efficiently looking up values based on keys."))}u.isMDXComponent=!0}}]);