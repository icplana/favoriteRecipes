import React, { useEffect, useState } from 'react'

import { RecetaDelete } from './RecetaDelete'





export const Favoritos = () => {
  const [data, setData] = useState([])
  const favList = JSON.parse(localStorage.getItem('favoriteList'))||[]
  
  useEffect(() => {    
    let newArr = []
    const obtenerData = async () => {
      for( const elm of favList){
        try {
          const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+elm)
          const { meals } = await respuesta.json()
          newArr = ([...newArr,[meals[0].idMeal, meals[0].strMeal, meals[0].strMealThumb]])
        } catch (error) {
          console.log(error)
        }
      }
      
      setData(newArr)
    }
    
    
    obtenerData()
    console.log(data)
    
  }, [])




  return (
      <>
        {
          (data.length < 1) ? <h2 className='text-4xl mx-auto rounded-lg mt-16 text-gray-700 bg-gray-300 p-8 w-fit font-semibold'>You don't have any favorite yet!</h2> :<h3 className=' text-center text-3xl my-5 ml-5'>Your favorite recipes!</h3>
        }
        <div className='w-full mx-auto mt-5 max-w-screen-xl flex-wrap flex gap-5 justify-center'>
        
        {
          data.map( e => (
            <RecetaDelete
              key={ e[0] } 
              imgUrl={ e[2] }
              title={ e[1] }
              id={ e[0] }
            />
          ))
        }
      </div>
    </>
  )
}
