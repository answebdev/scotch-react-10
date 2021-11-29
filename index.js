import express from 'express';
import * as path from 'path';

const app = express();

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', '200.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
