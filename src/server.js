// const express = require('express')
import express from 'express';
import cors from 'cors';

import {PORT} from './config.js'
import logger from './middlewares/logger.js'

import noteRoute from './router/noteRoute.js'

const api = express()

api.use(cors())

// Middlewares
api.use(logger)
api.use(express.json());

api.options('/whoiam', (req, res) => {
    var origin = req.get('origin');
    console.log(origin)
    res.set('Access-Control-Allow-Origin', origin);
    res.send('ok');
});



api.get('/', (req, res)=>{   
    res.json({message: "Bem-vindo a API"})
})

api.use('/note', noteRoute)

api.post('/whoiam', (req, res) => {
    res.json({ headers: req.headers, ip: req.ip, hostname: req.hostname, subdomains: req.subdomains, origin: 'origin- '+req.get('origin') + req.origin, headerOrigin: req.headers.origin })
})

api.all('*', (req, res)=>{
    res.status(404).json({message: "Rota não encontrada!"})
})

api.post('/worker-test', (req, res)=>{
    console.log(req.body)
    res.json({message: "Rota de teste"})
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})