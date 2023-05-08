import React from 'react'
import { Recetas } from './Components/Recetas'
import { Header } from './Components/Header'

export const App = () => {

  console.log(document.querySelector('#tipoBusqueda'))
  return (
    <>

      <Header />

      <body className='bg-gradient-to-b mx-auto from-white to-gray-200 h-screen max-w-screen-xl'>
          <Recetas />
        
      </body>

      <footer>

      </footer>

    </>
  )
}
