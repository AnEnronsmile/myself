////静态资源服务器



const http = require("http");
const fs = require('fs');
const path = require('path');

//手动封装一个promise
function readPromise (filePath) {
    return new Promise((resolve,rejects)=>{
        fs.readFile(filePath,(err,data)=>{
            if (err) {
                rejects(err);
                return;
            }
            const fileContent = data.toString();
            resolve(fileContent);
        })
    })
}
//创建一个http服务
//serve就是你创建的服务
const serve = http.createServer((request, response) => {

    //设置相应头 Content-Type 就是相应的文件格式和字符编码
    response.setHeader("Content-Type", "application/javascript;charset=utf-8")
    //获取路径
    const filePath = path.resolve(__dirname, './0.静态资源服务器.js');
    readPromise(filePath)
    .then(data=>{
        // 设置响应状态码
        response.statusCode=200;
        //响应内容
        response.end(data)

    }).catch(err=>{
        console.log('读取文件失败'+err);
        // 设置响应状态码
        response.statusCode = 404;
        // 响应内容
        response.end('文件加载失败')
    })
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
