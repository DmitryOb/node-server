// this script may be installed like service

// npm install pm2 pm2-windows-startup -g

// pm2-startup install
// pm2 save
// pm2 start serv.js
// pm2 ls // список прописавшихся в авторан скриптов
let http = require('http');
let url = require('url');
const nodeCmd = require('node-cmd');

let server = http.createServer(function (request, response) {
    console.log('we got request');
    let queryData = url.parse(request.url, true).query;
    response.writeHead(200, {"Content-Type": "text/plain"});

    let run = queryData.run;
    switch (run) {
        case 'monitor':
            console.log('we recive' + run);
            nodeCmd.get(
                'displayswitch.exe/internal', 
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'tv':
            console.log('we recive' + run);
            nodeCmd.get(
                'displayswitch.exe/external', 
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'fifa19':
            console.log('we recive' + run);
            nodeCmd.get(
                `"D:\\FIFA 19\\FIFA19.exe"`, 
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'tvfifa':
            console.log('we recive' + run);
            nodeCmd.get(
                'displayswitch.exe/internal', 
                (err, data, stderr) => console.log(data)
             );
            nodeCmd.get(
                `"D:\\FIFA 19\\FIFA19.exe"`, 
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'poweroff':
            console.log('we recive' + run);
            nodeCmd.get(
                'shutdown.exe -s -t 00',
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'headphone':
            console.log('we recive' + run);
            nodeCmd.get(
                `D: && cd "D:\\_Distr_Programs\\Nircmd-x64(MonitorOff)" && nircmd setdefaultsounddevice "Dinamics" 1`,
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'lgtv':
            console.log('we recive' + run);
            nodeCmd.get(
                `D: && cd "D:\\_Distr_Programs\\Nircmd-x64(MonitorOff)" && nircmd setdefaultsounddevice "LGTV" 1`,
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        case 'dinamics':
            console.log('we recive' + run);
            nodeCmd.get(
                `D: && cd "D:\\_Distr_Programs\\Nircmd-x64(MonitorOff)" && nircmd setdefaultsounddevice "LGMON" 1`,
                (err, data, stderr) => console.log(data)
            );
            response.end();
            break;
        default:
            console.log('we recive default');
            response.end();
            break;
    }
});

server.listen(7777);