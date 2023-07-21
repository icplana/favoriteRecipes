import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { HomeLanding } from './pages/HomeLanding'
import { Footer } from './Components/Footer'
import { Category } from './pages/Category'
import { Favoritos } from './pages/Favoritos'
import { RecetaFull } from './pages/RecetaFull'
import { Resultados } from './pages/Resultados'

export const App = () => {
 
  return (
    <div className='flex flex-col min-h-screen justify-end'>

      <Header />
     <Routes>
        <Route path="/" element={ <HomeLanding /> }/>
        <Route path="category" element={ <Category />}/>
        <Route path="favoritos" element={ <Favoritos />}/>
        <Route path="recetaFull" element={ <RecetaFull />}/>
        <Route path="resultados" element={ <Resultados />}/>
      </Routes> 

      <Footer />
    </div>
  )
}
