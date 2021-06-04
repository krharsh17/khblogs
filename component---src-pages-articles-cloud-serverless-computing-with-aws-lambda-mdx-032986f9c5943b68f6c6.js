(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{lcJB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return i}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),o=n("94eH");var r={},s={_frontmatter:r},c=o.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://source.unsplash.com/rymh7EZPqRs/800x450",alt:"image"}))),Object(a.b)("p",null,"For when you need to run just a bunch of code on a server, why rent an entire machine?"),Object(a.b)("h2",null,"The concept of backend"),Object(a.b)("p",null,"When the client isn't really able to serve the computational needs, then a server is summoned. This happens usually in cases where -"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"There's some hidden backend logic to your product, which the client can not be trusted with, such as creating checksums for payments"),Object(a.b)("li",{parentName:"ol"},"Some heavy computations are required to be carried out, such as compressing an image uploaded to a bucket."),Object(a.b)("li",{parentName:"ol"},"Assets such as databases or file buckets have to be managed.")),Object(a.b)("p",null,"While standard servers can easily cater to all of these requirements, they still prove to be an overkill. Imagine running an entire virtual machine with a server environment just to generate a bunch of strings!"),Object(a.b)("h2",null,"Serverless to the rescue"),Object(a.b)("p",null,"This is where the concept of 'serverless' backends comes in. A serverless backend still runs on a server but allows you to shift your focus from managing the server to optimizing your code. This means that in a serverless environment, you are only accountable for the amount of time and resources your code expends. This is made possible by sharing a single server for a lot of such concise serverless backends. There are many cloud service providers which offer this amazing functionality. Here, I am going to throw some light at Lambda, the serverless computing solution offered by Amazon Web Services."),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://d2adhoc2vrfpqj.cloudfront.net/2020/02/1zBSAFh5KIA72dmf1j9vfZQ.jpeg",alt:"image"}))),Object(a.b)("h2",null,"AWS Lambda"),Object(a.b)("p",null,"AWS Lambda is a serverless backend service provided by Amazon Web Services which offers a variety of customizations and enhancements. All you need to do is to upload your code into Lambda, and it will take care of all processes, including deploying and scaling your code. It comes with a bunch of 'triggers' which help you to set a piece of code to be called on another AWS service's event.\nThis can come very handy when trying to create DevOps solutions, or post-submission data validation systems."),Object(a.b)("p",null,"The ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://aws.amazon.com/lambda/"}),"official website")," does a great job in listing out a variety of use cases for the service."),Object(a.b)("h2",null,"How does a Lambda function look?"),Object(a.b)("p",null,"Basically, a Lambda function consists of three major parts -"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Handler"),"- This is the entry point to your function. It generally is JSON-formatted, as Lambda functions accept and return JSON-formatted contents."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Runtime Environment")," - The runtime correlates with the language that you're going to use to write your Lambda function. It can be one of -",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"C#"),Object(a.b)("li",{parentName:"ul"},"Go"),Object(a.b)("li",{parentName:"ul"},"Java"),Object(a.b)("li",{parentName:"ul"},"Node.js"),Object(a.b)("li",{parentName:"ul"},"Python"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Trigger")," - The final requirement is a trigger, which invokes the function. This can be a file upload in S3, a change in a DynamoDB table or a similar event.")),Object(a.b)("h2",null,"How to set it up"),Object(a.b)("p",null,"AWS Lambda is a part of the AWS Starter Account too, which means that if you're a student, you can get it running without going through the hassle of creating a standard AWS account with billing details. I'm going to show how to set up a basic Lambda function in NodeJs runtime environment which takes in two numbers and carries out a few calculations on them."),Object(a.b)("p",null,"For an input as"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'{\n    "Number1": 20,\n    "Number2": 4,\n}\n')),Object(a.b)("p",null,"the function would respond with"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'{\n    "Number1": 20,\n    "Number2": 4,\n    "sum": 24,\n    "difference": 16,\n    "product": 80,\n    "quotient": 5\n}\n')),Object(a.b)("p",null,"Here we go -"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up for an ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"http://www.awseducate.com/registration?refid=FzizgiH5V6WOKkktaM4Gw68UhD3QzBbe"}),"AWS Educate Starter account")," or a standard AWS account."),Object(a.b)("li",{parentName:"ol"},"Log in to your AWS account and navigate to the ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://console.aws.amazon.com/lambda"}),"Lambda console"),". Click on ",Object(a.b)("strong",{parentName:"li"},"Create Function")," and choose ",Object(a.b)("strong",{parentName:"li"},"Author from Scratch")," so that you can start with a minimal boilerplate."),Object(a.b)("li",{parentName:"ol"},"Choose a name for your function, select the Nodejs runtime and define a role for your Lambda to use. Since any external resources or triggers aren't required currently, you don’t need special permissions, but this is where you would add a role with those permissions.\n",Object(a.b)("img",Object.assign({parentName:"li"},{src:"https://images.squarespace-cdn.com/content/v1/51814c87e4b0c1fda9c1fc50/1528476318667-8MPICO5FRBHLM1GCR37J/ke17ZwdGBToddI8pDm48kKac3fzUIoNsOpCaSnFC4LlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIctyutgiqlBJXEp0e4RXcwaJfw8_qAt-EA9ADpR3Fqj4/5-aws-lambda-create-function-nodejs.png?format=1000w",alt:"image"}))),Object(a.b)("li",{parentName:"ol"},"Instead of simply defining the function, AWS also allows use to define test events, which can directly be run against our Lambda function to test them. It is always advisable to create one. Choose ",Object(a.b)("strong",{parentName:"li"},"Configure tests")," from the ",Object(a.b)("strong",{parentName:"li"},"Select a test event")," dropdown.\n",Object(a.b)("img",Object.assign({parentName:"li"},{src:"https://images.squarespace-cdn.com/content/v1/51814c87e4b0c1fda9c1fc50/1528476285220-AIVZOBPSBVDCLUOMM0IT/ke17ZwdGBToddI8pDm48kFNkCUfixeyTM4sgdLyiGdXlfiSMXz2YNBs8ylwAJx2qrCLSIWAQvdC7iWmC9HNtRS7LAXuYD8bQXNLv8VHg-n6xbMnDxEhbxohDMA6PwfBFMobRUQOmPI622CwdwqRv-g/2-aws-lambda-test-events.png?format=500w",alt:"image"})),"\nAWS provides a great amount of templates. In the current scenario, you can use the Hello World template and modify it to meet the requirements\n",Object(a.b)("img",Object.assign({parentName:"li"},{src:"https://images.squarespace-cdn.com/content/v1/51814c87e4b0c1fda9c1fc50/1528476294618-KWNOON57HC9ET1BL38B8/ke17ZwdGBToddI8pDm48kJbqFnqLG7XLsE3kGEBt7DlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxlP6CollG5bHsXmMwRzux-mwwbd7EVkgFOZmGJ-V8u8mT-7p6I5fc9ajDLAMk4xEY/3-aws-lambda-test-events-config.png?format=1000w",alt:"image"})))),Object(a.b)("p",null,"Once the test is created, you can trigger it with the ",Object(a.b)("strong",{parentName:"p"},"Test")," button.\n5. Now add the code for your function"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'exports.handler = (event, context, callback) => {\n   var n1 = event.Number1;\n   var n2 = event.Number2;\n   var sum = n1 + n2;\n   var product = n1 * n2;\n   var difference = n1 - n2;\n   var quotient = n1 / n2;\n   callback(null, {\n       "Number1": n1,\n       "Number2": n2,\n       "sum": sum,\n       "product": product,\n       "difference": difference,\n       "quotient": quotient\n   });\n};\n')),Object(a.b)("p",null,"That's it! Now you can test your function by clicking on the ",Object(a.b)("strong",{parentName:"p"},"Test")," button."),Object(a.b)("hr",null),Object(a.b)("p",null,"So that was all about the introduction of an amazing AWS service. Make sure to check out the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-functions.html"}),"official AWS documentation")," to explore more possibilities with Lambda functions."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Thanks for reading!")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-articles-cloud-serverless-computing-with-aws-lambda-mdx-032986f9c5943b68f6c6.js.map