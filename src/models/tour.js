const tourModel = {
    
    async getAllToursModel(){
        try {
            const peticion = await fetch('http://localhost:4000/tours')
            const tours = await peticion.json()
            return tours
        } catch (error) {
            console.log(error);
        }
    }


    ,

    async getTourByIdModel(tourId) {
        const response = await fetch(`http://localhost:4000/tours/${tourId}`);
        if (!response.ok) {
            return {error:"Tour no encontrado"}
        }
        const data = await response.json()
        return data
    },

    async createTourModel(newTour){
        // 1.- CONEXION BDD
        const url = "http://localhost:4000/tours"
        // 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"Content-Type":"application/json"}
        })
        // 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        // 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    }


    ,


    async updateTourModel(tourId,updatedTour){

           // 1.- CONEXION BDD
        const url = `http://localhost:4000/tours/${tourId}`
        // 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updatedTour),
            headers:{"Content-Type":"application/json"}
        })
        // 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        // 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    }

    ,




    async deleteTourModel(tourId){
        // 1.- CONEXION BDD
        const url = `http://localhost:4000/tours/${tourId}`
        // 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url,{
            method:"DELETE"
        })
        // 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        // 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    }

    



}

export default tourModel