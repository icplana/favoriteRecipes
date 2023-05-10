import { Link } from "react-router-dom"
import { onAddFavorite } from "../helpers/functions"

export const Receta = ({ imgUrl, title, id }) => {


  

  return (
    <div className='w-96 border rounded-lg overflow-hidden mb-5'>
        <img src={ imgUrl } alt="" />
        <h3 className=" text-3xl mb-2">{ title }</h3>
        <button
          datatype={ id }
          datatypename ={ title }  
          className="font-semibold rounded border px-2 py-1 bg-red-300 mb-2"
          onClick={ onAddFavorite }
        >
          Add favorite
        </button>
        <br />
        <button className="border rounded px-2 py-1 bg-blue-300"><Link to='/recetaFull' state = { id }>See full recipe</Link></button>

    </div>
  )
}
