const http = require('http');
const https = require('https');
const fs = require('fs');

import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on host:${port} - env ${process.env.NODE_ENV}`);
    });

    const httpServer = http.createServer(server);
    const httpsServer = https.createServer(
      {
        key: fs.readFileSync(__dirname + '/privatekey.key', 'utf8'),
        cert: fs.readFileSync(__dirname + '/certificate.cer', 'utf8'),
        ca: fs.readFileSync(__dirname + '/ca.cer', 'utf8'),
      },
      server,
    );

    httpServer.listen(443, () => {
      console.log('HTTP Server running on port 443');
    });

    httpsServer.listen(80, () => {
      console.log('HTTPS Server running on port 80');
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
