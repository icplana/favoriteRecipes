import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Recetas } from './Recetas'

export const Category = () => {
  const [category, setCategory] = useState()
  let { state } = useLocation()
   useEffect(() => {
     setCategory(state)
     

     return () => {
       
     }
   }, [state])
   
  
  return (
    <div className='bg-gradient-to-b mx-auto from-white to-gray-200 max-w-screen-xl'>
          <Recetas 
            url = {`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`}       
          />
        
      </div>
  )
}