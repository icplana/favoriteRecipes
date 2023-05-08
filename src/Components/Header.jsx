

export const Header = () => {
  return (
    <header className='flex justify-evenly py-4 bg-gradient-to-b from-white to-gray-200'>
        <nav className=''>
            <ul className='list-none flex gap-2'>
            <li>Categorías</li>
            <li>Mis favoritos</li>
            </ul>
        </nav>
        <form action="" className=''>
            <input type="text" placeholder= "Buscador de recetas" className=' p-1 border mr-3 rounded' />
            <label htmlFor="" className='mr-2'>Buscar por:</label>
            <select name="TipoDeBusqueda" id="tipoBusqueda" className='mr-3'>
                <option value="nombre">Nombre</option>
                <option value="categoria">Categoria</option>
                <option value="ingrediente">Ingrediente</option>
            </select>
            <button type="submit" className='px-2 py-1 rounded border bg-blue-300'>Buscar</button>
        </form>
    </header>
  )
}
