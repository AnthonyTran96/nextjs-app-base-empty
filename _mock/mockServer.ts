import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import mockConfig from './config';

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: '*'
  })
);

app.use(express.json());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

mockConfig.forEach((config) => {
  app[config.method](config.url, async (req: Request, res: Response) => {
    // Delay
    if (config.delay && config.delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, config.delay));
    }

    const { body, query, params } = req;
    const result = config.handler(body, query, params);
    res.status(config.status || 200).send(result);
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'API not found' });
});

app.listen(PORT, () => {
  console.log(`Mock Server is running at http://localhost:${PORT}`);
});
