// Requerir módulos
import express from 'express'

import routerTour from './routers/tour_routes.js'
import routerUser from './routers/user_routes.js'


// INCIALIZACIONES
const app = express()


// VARIABLES
app.set('port',process.env.port || 3000)


// MIDDLEWARES
app.use(express.json())




// RUTA PRINCIPAL
app.get('/',(req,res)=>{
    res.send("OK")
})

// RUTAS PARA EL TOUR
app.use('/api',routerTour)

// RUTAS PARA EL USER
app.use('/api',routerUser)

// RUTAS PARA EL BOOKING



// Exportar la instancia de app
export default app

