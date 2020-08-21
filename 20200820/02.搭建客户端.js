const http =require('http');
const url='http://localhost:1314';
//书写请求
const request = http.request(url,res=>{
    //res就是得到相应的内容
    //res.statuscode 是相应的状态码
    console.log(res.statusCode);
    let result='';
    //响应的data事件，用来消费读取的内容，每次传输64kb
    res.on('data',chunk=>{
        result+=chunk;
        console.log(result);
    })
    
    
})

//发送请求
request.end();