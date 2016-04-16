import * as express from 'express';
import * as serveStatic from 'serve-static';
import { Request, Response } from 'express';
import { router as ngRouter } from './ng';
const compression = require('compression');

const app = express();

const IS_DEV_ENV = process.env.NODE_ENV === 'dev';

// gzip support
app.use(compression());

app.use('/', serveStatic(PUBLIC_DIR));
app.use('/', ngRouter);

/**
 * 404 Not Found
 */
app.use((req: Request, res: Response, next: Function) => {
  const err: any = new Error('Not Found');
  err.status = 404;

  return next(err);
});

/**
 * Errors normalization
 */
app.use((err: any, req: Request, res: Response, next: Function) => {
  if (IS_DEV_ENV) {
    const status: number = err.status || 500;
    let message: string = err.message;
    let stack: string = err.stack;

    if (message.length > 100) {
      stack = message + (stack ? ('\n\n' + stack) : '');
      message = 'Server Error';
    }
    return next({ status, message, stack });
  } else {
    const newErr: any = new Error('Server Error');
    newErr.status = 500;
    return next(newErr);
  }
});

/**
 * Development error handler.
 * Print error message with a stacktrace.
 */
if (IS_DEV_ENV) {
  app.use((err: any, req: Request, res: Response, next: Function) => {
    return res.status(err.status).send(`
      <h1>${err.message}<h1>
      <h2>${err.status}</h2>
      <pre>${err.stack}</pre>
    `);
  });
}

export { app };
