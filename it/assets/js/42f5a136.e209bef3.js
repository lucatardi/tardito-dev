"use strict";(self.webpackChunktardito_dev=self.webpackChunktardito_dev||[]).push([[5629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Lists \u3016\ud83d\udc27\u3017",s={unversionedId:"python/lists",id:"python/lists",title:"Lists \u3016\ud83d\udc27\u3017",description:"In Python, a list is a versatile and commonly used data structure that allows us to store a collection of items. Lists are ordered, mutable (changeable), and can contain elements of different data types.",source:"@site/docs/python/lists.md",sourceDirName:"python",slug:"/python/lists",permalink:"/it/docs/python/lists",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Strings \ud83d\udd24",permalink:"/it/docs/python/strings"},next:{title:"Da JavaScript a Python",permalink:"/it/docs/python"}},l={},p=[{value:"List Creation",id:"list-creation",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lists-"},"Lists \u3016\ud83d\udc27\u3017"),(0,r.kt)("p",null,"In Python, a list is a versatile and commonly used data structure that allows us to store a collection of items. Lists are ordered, mutable (changeable), and can contain elements of different data types.\nHere are some key characteristics and operations associated with lists in Python:"),(0,r.kt)("h2",{id:"list-creation"},"List Creation"),(0,r.kt)("p",null,"You can create a list by enclosing a comma-separated sequence of elements within square brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [1, 2, 3, 'apple', 'banana', 3.14]\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accessing List Elements:"),"\nList elements are accessed by their index, starting from 0 for the first element. You can also use negative indices to access elements from the end of the list. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"first_element = my_list[0]\nlast_element = my_list[-1]\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Slicing:"),"\nYou can extract a sublist from a list using slicing. Slicing allows you to specify a range of indices to create a new list containing the selected elements. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sublist = my_list[1:4]  # Returns [2, 3, 'apple']\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Mutability:"),"\nLists are mutable, which means you can change, add, or remove elements after the list is created. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"my_list[2] = 42  # Changes the third element to 42\nmy_list.append('orange')  # Adds 'orange' to the end of the list\ndel my_list[4]  # Removes the fifth element\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Methods:"),"\nPython provides a wide range of built-in methods for manipulating lists, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"append()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"extend()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"insert()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remove()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pop()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"count()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sort()"),", among others.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Comprehensions:"),"\nList comprehensions are a concise way to create lists based on existing lists. They provide a more readable and efficient way to filter and transform list elements."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [1, 2, 3, 4, 5]\nsquared_numbers = [x**2 for x in numbers]  # Creates [1, 4, 9, 16, 25]\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List Length:"),"\nYou can find the number of elements in a list using the ",(0,r.kt)("inlineCode",{parentName:"p"},"len()")," function:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"length = len(my_list)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nesting Lists:"),"\nLists can be nested within other lists, allowing you to create more complex data structures. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"nested_list = [[1, 2, 3], ['a', 'b', 'c']]\n")))),(0,r.kt)("p",null,"Lists are widely used in Python for various tasks, from storing and manipulating data to implementing more complex data structures and algorithms. They are a fundamental part of Python programming."))}c.isMDXComponent=!0}}]);