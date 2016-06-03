var https = require('https');
var net = require('net');
var url = require('url');
var fs = require('fs');

var options = {
	key: fs.readFileSync('./sslforfree/PrivateKey.key'),
    cert: fs.readFileSync('./sslforfree/hiosu_com.crt'),
    ca: [
    	fs.readFileSync('./sslforfree/COMODORSADomainValidationSecureServerCA.crt'),
    	fs.readFileSync('./sslforfree/COMODORSAAddTrustCA.crt'),
    	fs.readFileSync('./sslforfree/AddTrustExternalCARoot.crt')
    ]
};

https.createServer(options,function(req,res){
	console.log("IP: "+req.connection.remoteAddress);
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end("ok");
}).listen(443,"192.168.1.3");
