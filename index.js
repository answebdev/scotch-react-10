import express from 'express';

const app = express();

app.get('/', (_, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, 'build', '200.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
