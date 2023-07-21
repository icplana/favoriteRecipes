import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { onAddFavorite } from "../helpers/functions"


export const RecetaFull = () => {

  const [info, setInfo] = useState([])
  const { state } = useLocation()


  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+state)
      const { meals } = await respuesta.json()
      const ingredients = []
      for (const propiedad in meals[0]) {
        if (propiedad.startsWith('strIngredient') 
          && meals[0][propiedad] !== null 
          && meals[0][propiedad].length > 0 ) {
            ingredients.push((meals[0][propiedad]));
        }
      }
      const newArr = [ meals[0].idMeal, meals[0].strMeal, meals[0].strMealThumb, meals[0].strInstructions, ingredients ]
      setInfo(newArr)  

      }

    obtenerDatos()
    
  }, [])
  
 
  

  return (
    
    <div className='w-full max-w-screen-lg flex flex-col mx-auto bg-slate-100 p-3 rounded-md mt-20'>
      <h3 className="text-4xl my-4">{ info[1] }</h3>  
      <button
        datatype={ info[0] }
        datatypename ={ info[1] }  
        className="text-lg bg-red-300 font-semibold p-2 rounded w-fit mb-4"
        onClick={ onAddFavorite }
      >
        Add Favorites
      </button> 
      <img className="rounded-lg " src={ info[2] } alt="" />
      <ul className="  mt-4">
       <span className="text-2xl underline">Ingredientes:</span> 
        {
           !!info[4] ? info[4].map(e => (<li className="text-lg italic" key={e}>{e}</li>)) : ''
           
        }
      </ul>
      <p className="mt-5"><span className="text-2xl font-semibold">Instrucciones:</span> <br /><span className="text-lg">{ info[3] }</span></p>
    </div>
  )
}



