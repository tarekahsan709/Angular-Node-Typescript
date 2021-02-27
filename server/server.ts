import cookieParser = require('cookie-parser');
import dotenv = require('dotenv');
import express = require('express');
import morgan = require('morgan');
import passport = require('passport');
import path = require('path');

import db = require('./config/mongo');
import { UserRoutes } from './routes/userRoutes';
import { logger } from './util/logger';
import { API_BASE_URL, Enviroment } from './config/secrets';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configApp();
    this.initApp();
  }

  private configApp(): void {
    dotenv.config();
    db.connectDatabase();
    require('./config/passport')(passport);
  }

  private initApp(): void {
    this.initExpressMiddleware();
    this.initCustomMiddleware();
    this.initRoutes();
  }

  private initExpressMiddleware(): void {
    // FIXME: Move magic number to constant
    this.app.set('port', process.env.PORT || 3000);
    this.app.use('/', express.static(path.join(__dirname, '../public')));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());

    if (process.env.NODE_ENV !== Enviroment.Test) {
      this.app.use(morgan('dev'));
    }
    // FIXME: Move exception to named enum
    process.on('uncaughtException', (err) => {
      if (err) {
        logger.error(err.stack);
      }
    });
  }

  private initCustomMiddleware(): void {
    if (process.platform === 'win32') {
      require('readline')
        .createInterface({
          input: process.stdin,
          output: process.stdout,
        })
        .on('SIGINT', () => {
          logger.info('SIGINT: Closing MongoDB connection');
          db.disconnectDatabase();
        });
    }

    process.on('SIGINT', () => {
      logger.info('SIGINT: Closing MongoDB connection');
      db.disconnectDatabase();
    });
  }

  private initRoutes(): void {
    this.app.use(`${API_BASE_URL}users`, new UserRoutes().router);
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      logger.info('API is running at http://localhost:' + this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();

module.exports = server.app;
