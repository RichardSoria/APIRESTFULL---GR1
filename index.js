//Concepto Agnostico

// Rutas
const express = require('express') // Usar Express - COMMONJS

const app = express() // Inicializar Express

// Ruta /
app.get('/', (req,res)=>{res.send("Hola")})

// Ruta /franquicias
app.get('/franquicias', (req,res)=>{res.send("Información de franquicias")})

// Ruta /simple
app.get('/simple', (req,res)=>{res.send("Hamburguesa Simple")})

// Middle
app.use((req,res)=>{res.send("<h1>Page Not Found - 404</h1>")})

app.listen(3000)

console.log("Servidor - OK")