import express from 'express';
import 'dotenv/config';
import app from '../app';

const PORT: number = Number(process.env.PORT) || 8085;
app.listen(PORT, ()=> {console.log('Server run on PORT:', PORT);}); 