(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{BzAU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),o=n("94eH");var r={},s={_frontmatter:r},i=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Not as simple as it seems."),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/fJTqyZMOh18/1600x900",alt:"image"}))),Object(a.b)("p",null,"One of the most amazing recent experiences I had with a popular third-party SDK was with the PayTM payment gateway Android SDK. The task was to integrate the SDK into a project to facilitate the acceptance of in-app payments through PayTM."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"“What comes easy won’t last long, and what lasts long won’t come easy.” ― Pep Talk Radio")),Object(a.b)("h1",null,"The beginning"),Object(a.b)("p",null,"Importing the SDK within the android studio project was smooth as butter. All it needed was the addition of one line in the app level build.gradle file."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"implementation 'com.paytm:pgplussdk:1.4.4'\n")),Object(a.b)("p",null,"The project was synced and all the classes related to the development kit were downloaded."),Object(a.b)("h1",null,"The helper"),Object(a.b)("p",null,"The next thing to make was a helper class. Since processing a payment requires two major things: the creation of a checksum, and creation of an order, so its code had to be written separately from the calling code to reduce clutter and increase readability. Now came the real challenge."),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/MD6E2Sv__iA/1600x900",alt:"image"}))),Object(a.b)("h1",null,"The challenges"),Object(a.b)("h2",null,"Little Boy"),Object(a.b)("p",null,"As mentioned above, the processing of payment requires the generation of a checksum. But the trick here is that the checksum has to be generated on a server, which is not very clearly mentioned in the documentation."),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://miro.medium.com/max/1400/1*qomEMATr34CVTRtU-yHV0A.png",alt:"image"}))),Object(a.b)("p",null,"As can be observed above, there is no mention of the word ‘server’ anywhere on the main guide page. Although upon clicking the generate checksum link, it is mentioned that the code has to be run on a server, or the languages in which the sample code is stated also hint that the action is to be carried out on a server environment, an explicit declaration of the same on this page itself would do no harm. I feel it is due to this reason, that many of the forums online are filled with questions regarding why the sample java code stated here isn’t running on android."),Object(a.b)("h2",null,"Fat Man"),Object(a.b)("p",null,"Even though not realizing the requirements of the checksum generation wasted a lot of my time, but something more troublesome was coming. I chose Google Cloud Functions to serve as a platform to generate and verify the order checksum, and so went over to the Node.js sample code. What I saw next was the most unexpectable thing from a vendor as large as PayTM."),Object(a.b)("p",null,"The switch shown here is an actual part of the official Node.js sample code hosted by PayTM themselves, and it quite evident that the case /generateChecksum is the case responsible for handling creation of checksum, but it is filled with garbage default values. I can not imagine a greater horror for a beginner developer than this."),Object(a.b)("p",null,"What followed was a few hours of fiddling around with the raw methods present in the repository until I could finally manage to come up with a working set of methods that could be deployed to Cloud Functions. (You can find the code here). This easily took up a handful of hours and made me lose track of where I originally was in my project. I don’t really feel this puts a third-party library or a sample repository in a good light."),Object(a.b)("h1",null,"The wrap-up"),Object(a.b)("p",null,"The next thing needed was a network client that could relay my requests over to the PayTM servers. Volley seemed to be just right for the job. Integrating it was quite simple, all the app level build.gradle needed was:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"implementation 'com.android.volley:volley:1.1.1'\n")),Object(a.b)("p",null,"And to send the request,"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"StringRequest stringRequest = new StringRequest(Request.Method.POST, checksumServerURL, new Response.Listener<String>() {\n    @Override\n    public void onResponse(final String response) {\n        //Created the order with the checksum here\n    }\n    }, new Response.ErrorListener() {\n        @Override\n        public void onErrorResponse(VolleyError error) {\n            // Handled network errors here\n        }\n    }) {\n        @Override\n        protected Map<String, String> getParams() {\n            return orderParamsMap;\n        }\n};\n\nVolley.newRequestQueue(context).add(stringRequest);\n")),Object(a.b)("h1",null,"The verdict"),Object(a.b)("p",null,"To be honest, I went into this incident with an intention to integrate a third-party payment method, but I came out with the integration as well as a contribution to the betterment of the documentation available for the integration. Throughout my endeavour, I came across a lot of messages, posts & questions regarding the same issue that I was facing, which clearly means that finding a solution to this meant helping a lot of other people. So all in all, it turned out to be a bitter-sweet experience for me. But I will suggest anyone who’s on the same path, do give my account a read, you will really save yourself from a lot of trouble!"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/krharsh17/paytm-checksum-generator-nodejs"}),"Here’s")," the working sample code for future references."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-articles-sdks-apis-integrating-paytm-api-mdx-2a8da5373d2822be1d23.js.map