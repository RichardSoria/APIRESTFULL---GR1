//Concepto Agnostico

// Rutas
const express = require('express') // Usar Express - COMMONJS

const app = express() // Inicializar Express

// Todas las solicitudes van a ser por json
app.use(express.json()) 

/*// Ruta / es un recurso que un servidor debe procesar atraves de un ente
app.get('/', (req,res)=>{res.send("Hola")})

// Ruta /franquicias
app.get('/franquicias', (req,res)=>{res.send("Información de franquicias")})

// Ruta /simple
app.get('/simple', (req,res)=>{res.send("Hamburguesa Simple")})

app.get('/simple', (req,res)=>{res.send("Hamburguesa Simple")})

// FORMAS EN LA QUE HAGA ALGO UN SERVIDOR

// Cliente REST permite visualizar todo el flujo de la petición
// Ruta /registrar
app.post('/registrar', (req,res)=>{
    const {email, password} =req.body
    email === "richard@hotmail.com" ? res.send("User Register") : res.send("Bad credentials")
    console.log(req.body)
})

// Se va aser un pedido através de los params
// La ruta devulve un recurso

// RUTA /products/:id               http://localhost:3000/products/99
app.get('/products/:id',(req,res)=>{
    const {id} = req.params

    const products = [
        {
            id:56,
            title:"Laptop",
            price:5000
        },
        {
            id:77,
            title:"Play 5",
            price:800
        }
    ]
    // Casting +
    const response = products.find((product)=>product.id === +id)

    response ? res.send(response) : res.send("Product not found")
})


// Ruta /search
app.get('/search',(req,res)=>{

    // Destructuración
    const {orden} = req.query

    // Construcción de un objeto
    const responses = {
        pollo:"Pollo del Hornero",
        milanesa:"Milanesa de pollo"
    }

    // Acceder a la propiedad del objeto 
    const response = responses[orden] || "No existe"

    res.send(response)
})*/

/*// TEXTO
// Ruta /
app.get("/",(req,res)=>{
    res.send('Landing Page de bienvenida')
})

// JSON
// Ruta /dashboard
app.get("/dashboard",(req,res)=>{
    const user = {
        name:"Byron",
        rol:"Admin"
    }
    res.send(user)
})

// IMAGEN
// Ruta /user/profile
app.get("/user/profile",(req,res)=>{
    res.sendFile('./R.jpg',{
        // Otorga el path del proyecto
        root:__dirname
    })
})

// Archvio
// Ruta /user/settings
app.get("/user/settings",(req,res)=>{
    res.sendFile('./PRUEBA-1-GR1.pdf',{
        // Otorga el path del proyecto
        root:__dirname
    })
})

// Página HTML
// RUTA /404
app.get('/mouse',(req,res)=>{
    res.send('<h1>Page Not Found - 404</h1><button>Back to homepage</button>')
})*/

// MIDDLEWARE INTERMIDIARIO QUE VA A INTERCEPTAR TODAS LAS SOLICITUDES QUE INGRESEN AL SERVIDOR
app.use((req,res,next)=>{
    const {token} = req.body
    const response = token === "123" ? true : false
    response ? next() : res.status(401).json({msg:"Invalid Token"})
})

// RUTAS
app.get("/gifs",(req,res)=>{
    res.send("Lista de gifs")
})


//app.use((req,res)=>{res.send("<h1>Page Not Found - 404</h1>")})

app.listen(3000)

console.log("Servidor - OK")