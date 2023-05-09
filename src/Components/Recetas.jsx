import { useEffect, useState } from "react"
import { Receta } from "./Receta"

export const Recetas = ({ url }) => {

    const [data, setData] = useState([])
       
    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await fetch( url )
            const { meals } = await respuesta.json()
            const newArr =[]
            meals.map( e =>  newArr.push([e.strMeal, e.strMealThumb, e.idMeal]) )
           setData( newArr )
        }
        obtenerDatos()
        
       
    }, [ url ])
    
    
    
            


    


  return (
    <div >
        <h1 className='text-6xl ml-4 font-bold mb-4' >Top trending:</h1>
        <div className='flex flex-wrap justify-center gap-4'>
            {
                data.map(e => {
                    return(
                        <Receta
                            key={ e[2]} 
                            imgUrl= { e[1] }
                            title= { e[0] }
                            id = { e[2] }                    
                        />
                    ) 
                })
                
            }
            
             
        </div>
    </div>
)
}
