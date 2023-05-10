import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export const Header = () => {
    
    const [searchType, setSearchType] = useState('nombre')
    const onSearchType = (e) => {
        setSearchType(e.target.value)
    }
    const [searchText, setSearchText] = useState('')
    const onSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const onShowCategories = () => document.querySelector('#listCat').hidden = false
    const onHideCategories = () => document.querySelector('#listCat').hidden = true


    const [data, setData] = useState([])
       
    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await fetch( 'https://www.themealdb.com/api/json/v1/1/categories.php' )
            const { categories } = await respuesta.json()
            const newArr =[]
            categories.map( e =>  newArr.push(e.strCategory) )
           setData( newArr )
        }
        obtenerDatos()
        
       
    }, [])

    const handleSubmit = (e) => { e.preventDefault()}

  return (
    <header className='flex justify-evenly py-4 bg-gradient-to-b from-white to-gray-200'>
        <nav className=''>
            <ul className='list-none flex gap-6'>
            <li 
                onMouseEnter={ onShowCategories }
                onMouseLeave={ onHideCategories }
                className="cursor-pointer"
            >Categorías
                <ul id="listCat" hidden={true} className="border rounded bg-white px-2 py-1">
                    {
                        data.map( e => (<li 
                            className="border-b hover:bg-slate-300 rounded" 
                            key={e}                            
                        ><Link to="/category" state={ e } >{e}</Link></li>))
                    }
                </ul>
            </li>
            

            <li className="cursor-pointer"><Link to="/favoritos">Mis favoritos</Link> </li>
            </ul>
        </nav>
        <form action="" className='' onSubmit={ handleSubmit }>
            <input onInput={onSearchText} type="text" id="textSearch" placeholder= "Buscador de recetas" className=' p-1 border mr-3 rounded' />
            <label htmlFor="" className='mr-2'>Buscar por:</label>
            <select onInput={onSearchType} name="TipoDeBusqueda" id="tipoBusqueda" className='mr-3'>
                <option value="nombre">Nombre</option>
                <option value="ingrediente">Ingrediente</option>
            </select>
            <Link 
                to='/resultados' 
                state ={ 
                        {
                            searchType,
                            searchText
                        }
                    } 
                 
                className='px-2 py-1 rounded border bg-blue-300'
            >
                Buscar
            </Link>
        </form>
    </header>
  )
}
