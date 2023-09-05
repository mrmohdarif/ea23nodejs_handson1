const http = require('http')
const data=require('./dummy')
const app = http.createServer((req, res) => {
    const url = req.url
    if (url == '/nodejs') {
        body_data=JSON.stringify(data)
        res.end(body_data)
    }
    else if('/')
    {
      
        res.write("<html>")
        res.write("<head><title>Hi !! i am mohd arif how are u javascript</title></head>")
        res.write("<body><h1>what is Node JS!! me</h1><p>NodeJS is the runtime environment, which can execute the javascript code on any platform. It is widely used to create and run web application servers because of its salient features. During production, several times we need to send the resources or some type of information as a response, and javascript object notation (JSON) syntax is widely used to send data also it is used for communication between any two applications. In this article, we are going to see how we can send information to the user as JSON through a node.js server. NodeJS contains an inbuilt HTTP module, it is used to transfer data over the HTTP protocol and supports many features that are useful for any web application.</p><h2>Fast and scalable: Node.js is built on the V8 JavaScript engine, which is known for its speed and efficiency. It is designed to handle a large number of concurrent connections and can handle high traffic volumes without sacrificing performance.</h2><h3>Non-blocking I/O: Node.js uses an event-driven, non-blocking I/O model, which means that it can handle multiple requests simultaneously without blocking the execution of other requests. This makes it highly efficient for handling real-time applications and streaming data</h3></body>")
        res.write("</html>")
        res.end()
    }
    else
    {
        res.write("<html>")
        res.write("<head><title>Hi !! i am mohd arif how are i am node js</title></head>")
        res.write("<body><h1>Node JS!!</h1> default routing</body>")
        res.write("</html>")
        res.end()
    }

}) 

app.listen(9000, () => {
    console.log('you are runnig on 9000')
})
