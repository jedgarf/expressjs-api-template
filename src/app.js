import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
const apicache = require("apicache");

// Routes
import indexRouter from './routes/index';
import corsProxyRouter from './routes/corsProxyRouter';

// Routes V1
import authRouter from './routes/v1/authRouter';
import settingsRouter from './routes/v1/settingsRouter';
import mailerRoutes from './routes/v1/mailerRouter';

const settings = require("./config/settings.config");

const path = require('path');
const compression = require('compression');
const helmet = require("helmet");
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

const corsOptions = {
  // origin: [
  //     'https://allhqflix.com',
  //     'https://www.allhqflix.com',
  //     'https://myfilmdream.com',
  //     'https://www.myfilmdream.com',
  //     'http://192.168.1.127:3000',
  // ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(compression());
app.use(helmet());
app.use(logger('dev'));

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: {"message": 'Too many request from this IP, please try again after 15 minutes'},
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
// app.use(limiter);
// Apply the rate limiting middleware to API calls only
app.use('/v1', limiter);

//configure apicache 
let cache = apicache.middleware;
  
//caching all routes
app.use(cache(`${settings.apicache_min} minutes`));

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Register Routes
app.use('/', indexRouter);
app.use('/utilities', corsProxyRouter);

// version 1
app.use('/v1', authRouter);
app.use('/v1', settingsRouter);
app.use('/v1', mailerRoutes);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

export default app;