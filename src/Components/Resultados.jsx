import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Recetas } from "./Recetas"


export const Resultados = () => {
const { state } = useLocation()
const { searchType, searchText } = state
let url


if (searchType === 'nombre'){
    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchText
}
if (searchType === 'ingredient'){
    url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + searchText
}

   

    

  return (
    <div>
        <Recetas 
            name ="Resultados:"
            url = { url } 
         />
    </div>
  )
}
