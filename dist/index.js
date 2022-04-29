"use strict";
// import next from 'next';
//
// const port = parseInt(process.env.PORT || '3000', 10);
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url!, true);
//     handle(req, res, parsedUrl);
//   }).listen(port);
//
//   // tslint:disable-next-line:no-console
//   console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const https = require('https');
const fs = require('fs');
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
(async () => {
    try {
        await app.prepare();
        const server = (0, express_1.default)();
        server.all('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(port, (err) => {
            if (err)
                throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
        const httpServer = http.createServer(server);
        const httpsServer = https.createServer({
            key: fs.readFileSync(__dirname + '/privatekey.key', 'utf8'),
            cert: fs.readFileSync(__dirname + '/certificate.cer', 'utf8'),
        }, server);
        httpServer.listen(80, () => {
            console.log('HTTP Server running on port 80');
        });
        httpsServer.listen(443, () => {
            console.log('HTTPS Server running on port 443');
        });
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
//# sourceMappingURL=index.js.map