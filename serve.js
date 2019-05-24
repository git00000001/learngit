var fs = require('fs');
var http = require('http');
var url = require('url');
//创建一个服务器
console.log("服务启动");
http.createServer(function (req, res) {
    if (req.url != "/favicon.ico") {
        var urlObj = url.parse(req.url, true, false);     
        if (urlObj.pathname == "/") {
            urlObj.pathname = 'index.html'
        }else if(urlObj.pathname.includes('res')){
            urlObj.pathname = './'+urlObj.pathname
        }else{
            urlObj.pathname = urlObj.pathname.replace('/','')
        }
        console.log(urlObj.pathname)
        fs.readFile(urlObj.pathname, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.end(data);
        });
    }
}).listen(8081);