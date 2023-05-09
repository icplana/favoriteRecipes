


export const onAddFavorite = (id) => {
    const current = JSON.parse(localStorage.getItem('favoriteList')) || []

    if(current.includes(id)){}else{
      const newList = [ ...current, id ]
      localStorage.setItem('favoriteList', JSON.stringify(newList))
    }
  }


export const onDeleteFavorite = (id) => {
    const current = JSON.parse(localStorage.getItem('favoriteList')) || []

    if(current.includes(id)){
      const newList = current.filter(e => e !== id)
      localStorage.setItem('favoriteList', JSON.stringify(newList))
    }
  }

  export const deleteFather = (e) => {
    e.target.parentElement.remove()
  }