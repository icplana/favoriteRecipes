import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Recetas } from '../Components/Recetas'

export const Category = () => {
  const [category, setCategory] = useState()
  let { state } = useLocation()
   useEffect(() => {
     setCategory(state)
     

     return () => {
       
     }
   }, [state])
   
  
  return (
    <div className='bg-gradient-to-b mt-20 mx-auto from-white to-gray-200 max-w-screen-xl'>
          <Recetas
            name={ category + ' recipes' } 
            url = {`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`}       
          />
        
      </div>
  )
}
