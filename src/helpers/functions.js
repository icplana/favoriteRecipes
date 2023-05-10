import { Link } from "react-router-dom"



export const onAddFavorite = (e) => {
  const id = e.target.getAttribute('datatype')
    const name = e.target.getAttribute('datatypename')
    const current = JSON.parse(localStorage.getItem('favoriteList')) || []

    if(current.includes(id)){
      alert(`${ name } ya se encuentra en tus favoritos`)
    }else{
      const newList = [ ...current, id ]
      localStorage.setItem('favoriteList', JSON.stringify(newList))
      alert(`${ name } añadido a favoritos`)
    }
  }


export const onDeleteFavorite = (e) => {
    const id = e.target.getAttribute('datatype')
    const name = e.target.getAttribute('datatypename')
    const current = JSON.parse(localStorage.getItem('favoriteList')) || []    
    const confirmacion = confirm(`Estas seguro que deseas eliminar ${ name } de favoritos?`)
    if(confirmacion && current.includes(id)){     
      const newList = current.filter(e => e !== id)
      localStorage.setItem('favoriteList', JSON.stringify(newList))
      e.target.parentElement.remove()
    }
  }

 


