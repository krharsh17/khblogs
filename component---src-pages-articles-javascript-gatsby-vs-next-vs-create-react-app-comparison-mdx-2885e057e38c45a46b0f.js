(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{pI0D:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var s=a("7ljp"),n=a("94eH");var i={},o={_frontmatter:i},r=n.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(s.b)(r,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A beginner's take on the most popular React toolchains out in the market."),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/cI-Ctf3PRPs/1600x900",alt:"image"}))),Object(s.b)("p",null,"When vanilla JS beginners start to feel that they have become mature enough to play with some serious code now, they usually head to frameworks. I've seen newbies use as heavy scaffolds as Angular to create basic forms. And this compels me to write a piece on why you shouldn't do that, and how you should judge a piece of code before using it."),Object(s.b)("hr",null),Object(s.b)("p",null,"No matter whether you've just begun coding or you have had years of experience building applications, not having carried out proper research can seriously damage the present as well as the future of any project that you undertake. And this research includes choosing the most suited languages, frameworks and toolchains for your project, depending on the requirements at hand."),Object(s.b)("p",null,"This article is going to cover the entire process of choosing the best candidate among the top 3 ReactJS based toolchains - create-react-app, Next.js & GatsbyJS"),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://cdn.shopify.com/s/files/1/2391/5185/articles/ULTIMATE_List_of_React_Blogs_and_Sites_that_Allow_Guest_Blogging_wallpaper_1600x.png?v=1564838086",alt:"image"}))),Object(s.b)("h1",null,"Whats the difference?"),Object(s.b)("p",null,"Before we begin benchmarking each toolchain against the various use-cases that they're all built for, we need to understand what makes them different from one another? After all, they all are built on top of ReactJS, and use React under the hood to publish web-apps. Then why are they not used interchangeably with one another?"),Object(s.b)("p",null,"For starters, each of the three candidates are ",Object(s.b)("em",{parentName:"p"},"toolchains")," which means that they are only relevant to packaging and publishing code, and have no absolutely no role in altering the way in which the app is designed. This means that these toolchain come into play after a web app's structural design is ready. However, it is important to decide on a toolchain as soon as possible because every toolchain has its own set of requirements to be met by the code design. And if this is not planned properly prior to development, then it poses a risk of sending the dev team into a refactoring phase, which can sometimes last longer than even the initial development phase."),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://media.vlpt.us/post-images/ryu/30c42cd0-35bf-11ea-a2cb-e3f4a6de3397/-2020-01-13-1.42.57.png",alt:"image"}))),Object(s.b)("h2",null,"create-react-app"),Object(s.b)("p",null,"This was built by facebook, the original makers of the React framework. The official docs state this to be the easiest way of creating a React SPA if you're someone who is trying out React for the first time.\n",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://create-react-app.dev/docs/getting-started/"}),"Learn create-react-app"))),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://sergiodxa.com/static/slides/nextjs.png",alt:"image"}))),Object(s.b)("h2",null,"Next.js"),Object(s.b)("p",null,"This is a popular toolchain for building React apps. However, rather than exporting SPAs (Single Page Applications), Next.js exports a server-side rendered web app, which can be deployed on a server to allow server-side rendering of your app, which eliminates a lot of issues that are cause by client-side rendered apps such as inability to handle external links, limited SEO support etc.\n",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://nextjs.org/docs/getting-started"}),"Learn Next.js"))),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://stevencotterill.com/static/a8c8c75ea310f6d3f91c681946646114/bc8e0/website-rebuilt-in-gatsbyjs.png",alt:"image"}))),Object(s.b)("h2",null,"GatsbyJS"),Object(s.b)("p",null,"This is a toolchain whose popularity has been rising quite lately. It is backed by an awesome collection of community-contributed content including blogs, tutorials, plugins and much more. It allows pre-rendering a website, which means that the React code is directly built into static HTML + JS files, allowing them to be served via static servers, achieve great levels of performance, and also enabling SEO & SMO.\n",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object.assign({parentName:"em"},{href:"https://www.gatsbyjs.org/docs/"}),"Learn GatsbyJS"))),Object(s.b)("h1",null,"Let's begin!"),Object(s.b)("p",null,"Instead of setting out high quality benchmarks such as rendering time, loading time etc, I will be comparing these frameworks against their most common use-cases. This sort of comparison generally tends to be more friendly for beginners."),Object(s.b)("p",null," So here's the list of general use-cases for a React web app -"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Simple, static web app"),Object(s.b)("li",{parentName:"ul"},"Large websites with dynamic content, such as ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com"}),"Medium")),Object(s.b)("li",{parentName:"ul"},"Purely Single Page Apps, such as Gmail, GDrive"),Object(s.b)("li",{parentName:"ul"},"Complex isomorphic apps, which involve both CSR & SSR, such as Twitter, Facebook")),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://www.digitalvidya.com/wp-content/uploads/2019/03/personal-blog.jpg",alt:"image"}))),Object(s.b)("h1",null,"Simple, static web app"),Object(s.b)("p",null,"A static web app generally requires to be:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Compact, with not more than 15-20 webpages"),Object(s.b)("li",{parentName:"ul"},"SEO-friendly, to allow better discovery on the web")),Object(s.b)("p",null,"With static web apps, updates don't necessarily require to be fast, however, fast updates will always be a major pro."),Object(s.b)("p",null,"For static websites, Gatsby is way better than any of the other contenders. With the awesome pre-optimized starters, beginner friendly documentation, huge support for CMS plugins and pre-rendering of all pages, Gatsby can help you set up a custom website for a routine task such as a blog, or a product landing page quite quick & smooth. The pre-rendered HTML built by Gatsby can be deployed anywhere, with ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://blog.krharsh17.vision/articles/github-pages/roadmap"}),"GitHub Pages")," & Netlify being the top choices for static site developers.web"),Object(s.b)("p",null,"However, one important point that such comparisons often miss out on is that Gatsby creates an renders every single page of your app to static HTML while building. This means that all of your 15-20 webpages are sequentially created by the toolchain while building the app. It is quite evident that this can become a major issue if the site grows large enough, given that some of the CD build environments (Yep, ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.netlify.com/blog/2020/02/25/gatsby-build-speed-improvements-with-parallel-image-processing/"}),"I'm talking about Netlify"),") are notoriously slow."),Object(s.b)("p",null,"Deploying a Next.js app for a 15-20 pages website would be an overkill, in my humble opinion. Unnecessary server side rendering will decrease your web-app's performance, and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://neilpatel.com/blog/speed-is-a-killer/"}),"you'd certainly not want to lose audience just because your blog loads slow.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Verdict"),": Gatsby\n",Object(s.b)("strong",{parentName:"p"},"Reason"),": Optimized performance, developer experience and build time."),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png",alt:"image"}))),Object(s.b)("h1",null,"Large website with dynamic content"),Object(s.b)("p",null,"Now that your website has started to grow, and you've shifted to something more interactive, you'll slowly realize that you're spending a lot more time while watching your app build after every upgrade if you continue to use Gatsby. Also, you will start facing problems with loading dynamic content easily (",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/firebase/firebase-js-sdk/issues/2222#issuecomment-538072948"}),"Gatsby confuses Firebase"),"). To handle these things better, it would be easier to shift to Next.js as ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.mediacurrent.com/blog/what-is-gatsbyjs/"}),"Gatsby is explicitly a static website generator")),Object(s.b)("p",null,"On a sidenote, it is practically impossible to compile dynamic changes to a static website. So you either need to use an external backend, or handle simple logic through SSR-based Next.js"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Verdict"),": Next.js\n",Object(s.b)("strong",{parentName:"p"},"Reason"),": Faster content updates, pure SSR"),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://cdn.business2community.com/wp-content/uploads/2020/04/LWbQEPhqHAAWfsmY_OdUt687xf95tUpxg-mIDKphdOAcTgg6jNBVUvg_8NAHP-8YQSik2Y97PpcCoMfPBhNbitXqRdrluzyui1n0wHx60gamYwaNYh5iE0uZaqIFC3F5R0NNtOH.png",alt:"image"}))),Object(s.b)("h1",null,"Single Page Applications"),Object(s.b)("p",null,"SPAs generally dont require to be SEO optimized, or handle external links. They are usually meant to be heavily client-side rendered, to carry out client based operations. External links in an SPA can still be implemented using an appropriate server environment. The most important requirement for an SPA is to be fast and responsive to the user.js"),Object(s.b)("p",null,"In this use-case, Gatsby & Next both level out. This is because of the way that they are designed."),Object(s.b)("p",null,"Apart from being a static site generator, Gatsby has a nice little feature called ",Object(s.b)("em",{parentName:"p"},"React injection")," using which, static sides created by Gatsby are injected with React framework upon loading. This means that it is not completely static, and it still has access to the most robust features of React such as virtual DOM. This is what greatly increases the performance of sites made using Gatsby."),Object(s.b)("p",null,"Also worth noting that Next.js too has a nice little feature, which allows it to serve static as well as dynamic webpages. This means that everytime an app is built in Next.js with multiple pages, all those pages are assessed by the Next frameworks and pages which do not have any dynamic content are generated & served statically. This reduces the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://davidea.st/articles/measuring-server-side-rendering-performance-is-tricky"}),"interactive time delay")," associated with Next and thus improves its performance on the whole."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Verdict"),": Next AND Gatsby\n",Object(s.b)("strong",{parentName:"p"},"Reason"),": Comparable features & metrics in this use case"),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://cdn.neow.in/news/images/uploaded/2019/07/1563214183_twitter_neowin.jpg",alt:"image"}))),Object(s.b)("h1",null,"Isomorphic Apps"),Object(s.b)("p",null,"Isomorphic or Universal apps ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb"}),"(I know they're different)")," generally involve a lot of dynamic content. Almost all of the content on giants such as Twitter & Facebook is dynamic. This simply means that they can not function even with a client side React injection such as Gatsby's. Although Gatsby can still handle this, but it is beaten out by Next in some cases such as first meaningful paint. Also, SEO for a large isomorphic app is much more easier in Next than in Gatsby. So Next is the clear winner here."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Verdict"),": Next.js\n",Object(s.b)("strong",{parentName:"p"},"Reason"),": Better SEO, public accessibility, and performance optimization"),Object(s.b)("h1",null,"The Final Verdict"),Object(s.b)("p",null,"There can not be one answer to what's the best toolchain for React. It always depends on how you plan to use them. Here's a list of most common use-cases best suited to each toolchain:"),Object(s.b)("h2",null,Object(s.b)("strong",{parentName:"h2"},"Gatsby")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Blog"),Object(s.b)("li",{parentName:"ul"},"Landing Pages"),Object(s.b)("li",{parentName:"ul"},"Any other website with static content")),Object(s.b)("h2",null,Object(s.b)("strong",{parentName:"h2"},"Next")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Social Media-like Apps"),Object(s.b)("li",{parentName:"ul"},"Forum-like Apps"),Object(s.b)("li",{parentName:"ul"},"Real time interactive Apps"),Object(s.b)("li",{parentName:"ul"},"Apps that require syncing content between client in real time")),Object(s.b)("h2",null,Object(s.b)("strong",{parentName:"h2"},"create-react-app")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Learning")),Object(s.b)("p",null,"Thanks for reading!"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-articles-javascript-gatsby-vs-next-vs-create-react-app-comparison-mdx-2885e057e38c45a46b0f.js.map