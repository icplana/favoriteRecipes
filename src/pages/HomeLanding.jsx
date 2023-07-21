
import { Recetas } from "../Components/Recetas"


export const HomeLanding = () => {
 
  return (
    <div className='bg-gradient-to-b mx-auto from-white to-gray-200 max-w-screen-xl min-h-screen mt-20'>
          <Recetas 
            url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian'          
          />
        
      </div>
  )
}
