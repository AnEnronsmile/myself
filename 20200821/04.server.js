////静态资源服务器



const http = require("http");
const fs = require('fs');
const path = require('path');
const {
    promisify
} = require("util");

const readFile = promisify(fs.readFile);
//创建一个http服务
//serve就是你创建的服务
const serve = http.createServer(async (request, response) => {
    try{
        // 获取读取的文件路径
        const filePath = path.resolve(__dirname,'./02.server.js');
        // 返回promise对象的readFile方法，书写await等待promise返回值
        const data = await readFile(filePath);
        // 如果promise返回成功状态，则继续向下执行
        //在响应头设置相应内容的contentType 
        response.setHeader("Content-Type", "application/javascript;charset=utf-8");
        //设置响应状态
        response.statusCode=200;
        // 设置响应内容
        response.end(data);

    }catch(err) { 
        console.log('读取文件失败'+err);
        // 让用户介绍404错误
        response.statusCode=404;
        response.end('文件加载失败')
    }
   
})

//启动服务
const port = 2020; //创建端口号
const host = "localhost"; //创建一个本机的服务器 也可以写作 127.0.0.1

// 启动服务 以及 确定域名和端口号
serve.listen(port, host, err => {
    // 如果错误  直接返回
    if (err) {
        console.log("服务器打开失败" + err);
        return;
    }
    console.log(`服务器启动成功 请访问 http://${host}:${port}`);
})
/* 

*/