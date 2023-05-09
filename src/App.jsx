import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { HomeLanding } from './Components/HomeLanding'
import { Footer } from './Components/Footer'
import { Category } from './Components/Category'
import { Favoritos } from './Components/Favoritos'
import { RecetaFull } from './Components/RecetaFull'

export const App = () => {
 
  return (
    <>

      <Header />
     <Routes>
        <Route path="/" element={ <HomeLanding /> }/>
        <Route path="category" element={ <Category />}/>
        <Route path="favoritos" element={ <Favoritos />}/>
        <Route path="recetaFull" element={ <RecetaFull />}/>
      </Routes> 

      <Footer />
    </>
  )
}
