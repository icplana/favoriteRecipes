import { useEffect, useRef, useState } from "react"
import { Link, useNavigate, NavLink } from "react-router-dom"



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

    const navigate = useNavigate();
  
    const handleSubmit = (e) => { 
        e.preventDefault()
        navigate('/resultados', { state: { searchText, searchType }})
    }

    const mobileDropdown = useRef()
    const categoriesMobileDropdown = useRef()

    const showMobileDropdown = () => mobileDropdown.current.classList.remove('hidden')
    const hideMobileDropdown = () => mobileDropdown.current.classList.add('hidden')

    const toggleCategoriesMobile = () => categoriesMobileDropdown.current.classList.toggle('hidden')
    

  return (
    <header className='fixed top-0 w-screen  py-4 bg-gradient-to-b from-white to-gray-200'>
        
        {/* small screen */}
        <div>
            <button className="text-white md:hidden ml-2" onClick={ showMobileDropdown }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                <path  d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(0,0,0,1)"></path>
                </svg>
            </button>

            <div ref={ mobileDropdown } className="hidden pt-3 pl-3 text-2xl w-screen h-screen absolute top-0 bg-gradient-to-b from-white to-gray-200">
            
            <button className="block ms-auto pe-2 mt-2" onClick={ hideMobileDropdown }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45">
                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(0,0,0,1)"></path>
                </svg>
            </button>

            <nav className=''>
                <ul className='list-none gap-6'>
                <li onClick={ toggleCategoriesMobile }>
                    Categorías
                    <ul ref={ categoriesMobileDropdown } className="hidden border rounded bg-white px-2 py-1">
                        {
                            data.map( e => (<li 
                                className="border-b hover:bg-slate-300 rounded" 
                                key={e}                            
                            ><NavLink to="/category" onClick={ hideMobileDropdown } state={ e } >{e}</NavLink></li>))
                        }
                    </ul>
                </li>
                

                <li className="cursor-pointer"><NavLink to="/favoritos" onClick={ hideMobileDropdown } >Mis favoritos</NavLink> </li>
                </ul>
            </nav>

            </div>

        </div>


        {/* //big screen  */}
        <div className="hidden md:flex justify-evenly">
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
                            ><NavLink to="/category" state={ e } >{e}</NavLink></li>))
                        }
                    </ul>
                </li>
                

                <li className="cursor-pointer"><NavLink  to="/favoritos">Mis favoritos</NavLink> </li>
                </ul>
            </nav>
            <form action="" className='inline' onSubmit={ handleSubmit }>
                <input onInput={() => { onSearchText(); handleSubmit() }} type="text" id="textSearch" placeholder= "Buscador de recetas" className=' p-1 border mr-3 rounded' />
                <label htmlFor="" className='mr-2'>Buscar por:</label>
                <select onInput={() => { onSearchType(); handleSubmit() }} name="TipoDeBusqueda" id="tipoBusqueda" className='mr-3'>
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
           
        </div>
    </header>
  )
}
