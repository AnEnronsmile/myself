/* 
    无论是搭建HTTP服务器 还是客户端，都必须引入HTTP模块

    node 的http模块
        搭建服务器
            接受请求
            响应客户端
        搭建客户端
            发送请求
            接受响应
*/

// 先引入模块
/* const http = require('http');
const fs = require('fs');
const path=require('path');
const filpath = path.resolve(__dirname,'./20200803/index.html')
const dir = path.resolve(__dirname)
// 创建服务
const sever = http.createServer((request,response)=>{
    console.log(request.url)
    if (request.url == '/') {
        fs.readFile(filpath,(err,data)=>{
            if (err) {
                console.log('文件读取失败'+err);
                return;
            } 
                // 返回响应内容
            response.end(data)
        })
    }else {
        fs.readFile(dir + request.url,(err,data)=>{
            if (err) {
                console.log('文件读取失败'+err);
                return;
            } 
                // 返回响应内容
            response.end(data)
        })
    }





})

// 设置服务器
const port = 1314;
const host = '192.168.16.53';//创建一个本机的服务器 也可以写127.0.0.1

// 启动服务器
sever.listen(port,host,(err)=>{
    if (err) {
        console.log('打开失败'+err);
        return;
    }
    console.log(`服务器启动成功 请访问 http://${host}:${port}`);
}) */