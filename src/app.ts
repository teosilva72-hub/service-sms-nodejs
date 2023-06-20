import express from 'express';
import 'dotenv/config';
import cors from 'cors'; 
import path from 'path';
import morgan from 'morgan';
import './config/db/mysql';
import routes from './api/router/allRoutes';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json({ limit: '200mb' }));
app.use("/public", express.static(path.resolve(__dirname, "public")));
app.use(express.static("public"))
app.use(morgan('combined'));
app.use('/', routes);

export default app;