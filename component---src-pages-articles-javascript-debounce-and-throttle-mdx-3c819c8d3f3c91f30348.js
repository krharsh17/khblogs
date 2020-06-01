(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"PK7+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var o=n("7ljp"),a=n("94eH");var r={},i={_frontmatter:r},s=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some things that you need to know before you start playing around with production"),Object(o.b)("p",null,Object(o.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/diO0a_ZEiEE/800x450",alt:"image"}))),Object(o.b)("h2",null,"Why debounce or throttle?"),Object(o.b)("p",null,"Have you ever used a browser event such as ",Object(o.b)("inlineCode",{parentName:"p"},"onscroll")," or ",Object(o.b)("inlineCode",{parentName:"p"},"onresize")," in a web app? If you did, you certainly would have noticed how the app heavily slows down if you call anything that requires even a little bit of extra processing juice. This obviously happens because the said code is numerously called inside the event's callback for a lot more number of times than it actually should be for optimal performance. Debouncing and throttling are two major concepts that can help you to solve this issue. ",Object(o.b)("em",{parentName:"p"},"Read along to find out what they are!")),Object(o.b)("p",null,Object(o.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/HfYqz_t6IOg/800x450",alt:"image"}))),Object(o.b)("h2",null,"Debouncing"),Object(o.b)("p",null,"Debouncing is a concept often used in functional programming which helps to delay a callback after it has been triggered. It is due to this concept that when you type in a search box which does not require you to press the seach button, you still face a delay of at least a fraction of a second before you get to see the results. This delay is intentionally placed by a developer so that the target function, which generally calls a paid-for remote API or carries out a performance intensive task, does not get called so frequently as to overload the costs/resources."),Object(o.b)("p",null,"You can see it in action here -"),Object(o.b)("iframe",{height:"500",style:{width:"100%"},scrolling:"no",title:"Debounce. Leading",src:"https://codepen.io/dcorb/embed/GZWqNV?height=500&theme-id=light&default-tab=css,result",frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen ",Object(o.b)("a",{href:"https://codepen.io/dcorb/pen/GZWqNV"},"Debounce. Leading")," by Corbacho (",Object(o.b)("a",{href:"https://codepen.io/dcorb"},"@dcorb"),") on ",Object(o.b)("a",{href:"https://codepen.io"},"CodePen"),"."),Object(o.b)("h2",null,"Err.. How do I use it?"),Object(o.b)("p",null,"To implement debouncing, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"Underscore")," or ",Object(o.b)("inlineCode",{parentName:"p"},"lodash"),"'s inbuilt function called ",Object(o.b)("inlineCode",{parentName:"p"},"debounce"),". Or if you feel using an entire library just for one function is an overkill, you could extract it. Its usage is pretty simple and straightforward -"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"window.onscroll = _.debounce(() => {\n    // Make requests to remote APIs here...\n    // Note that the _ before debounce stands as an reference of lodash\n}, 100);\n")),Object(o.b)("p",null,"Sounds straightforward, doesn't it?"),Object(o.b)("p",null,Object(o.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/VW01KVVAvjY/800x450",alt:"image"}))),Object(o.b)("h2",null,"Throttle"),Object(o.b)("p",null,"Throttle is another concept used to tackle the same problem. More often than not, ",Object(o.b)("inlineCode",{parentName:"p"},"onscroll")," events are used to lazily-load items in a list, or to update a progress bar that shows how far you've scrolled down an article. In such cases, delaying the UI update until the input stops can relay a bad user experience. So instead of waiting until the user completes the input, the callback function is fired at fixed intervals, so that the UI keeps getting updated. This means that the function will still be called many times, however, certainly not as many times as it would have without throttling down."),Object(o.b)("h2",null,"How to throttle down?"),Object(o.b)("p",null,"Again, both Underscore & lodash have an inbuilt function for this, which you can either use by importing the libraries or extracting the functions. Here's a sample implementation -"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"window.onscroll = _.throttle(() => {\n    // Perform resource-intensive tasks here...\n    // Note that the _ before throttle stands as an reference of lodash\n}, 100);\n")),Object(o.b)("h2",null,"Everything together in action"),Object(o.b)("p",null,"Here's a codepen that contrasts the output of all the three methods of handling callbacks -"),Object(o.b)("iframe",{height:"500",style:{width:"100%"},scrolling:"no",title:"The Difference Between Throttling, Debouncing, and Neither",src:"https://codepen.io/chriscoyier/embed/vOZNQV?height=265&theme-id=light&default-tab=js,result",frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen ",Object(o.b)("a",{href:"https://codepen.io/chriscoyier/pen/vOZNQV"},"The Difference Between Throttling, Debouncing, and Neither")," by Chris Coyier (",Object(o.b)("a",{href:"https://codepen.io/chriscoyier"},"@chriscoyier"),") on ",Object(o.b)("a",{href:"https://codepen.io"},"CodePen"),"."),Object(o.b)("h2",null,"Footnotes"),Object(o.b)("p",null,"Underscore is available as an npm package for node based projects and can be installed by -"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm install underscore\n")),Object(o.b)("p",null,"lodash too can be installed via npm"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm install lodash\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-articles-javascript-debounce-and-throttle-mdx-3c819c8d3f3c91f30348.js.map