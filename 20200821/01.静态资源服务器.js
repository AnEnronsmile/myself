//静态资源服务器

/* 
    无论是搭建http服务器，还是客户端，都要引入http模块

    node的http模块
        - 可以搭建服务端
            - 接受请求
            - 响应客户端
        - 可以搭建客户端
            - 发送请求
            - 接受响应

*/
const http = require("http");
const fs = require('fs');
const path = require('path');

//创建一个http服务
//serve就是你创建的服务
const serve = http.createServer((request, response) => {

    //设置相应头 Content-Type 就是相应的文件格式和字符编码
    response.setHeader("Content-Type", "application/javascript;charset=utf-8")
    //获取路径
    const filePath = path.resolve(__dirname, './01.静态资源服务器.js');
    // 读取内容
    fs.readFile(filePath, (err, data) => {

        if (err) {
            console.log('读取失败' + err);
            return;
        }
        const conten = data.toString();
        //返回响应内容
        response.end(conten);
    })

})

//启动服务
const port = 2020; //创建端口号
const host = "localhost"; //创建一个本机的服务器 也可以写作 127.0.0.1

//启动服务 以及 确定域名和端口号
serve.listen(port, host, (err) => {
    // 如果错误  直接返回
    if (err) {
        console.log("服务器打开失败" + err);
        return;
    }
    console.log(`服务器启动成功 请访问 http://${host}:${port}`)
});