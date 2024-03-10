import './Header.css'
const logo = 'src/assets/89-896782_gamer-png.png'


const Header = () => {
  return (
    <div className='head'>
      <img className="logo" src={logo} alt=" Logo" /> 
      <div className="Navbar"> 
        <li className='li'> <a href='#'>Inicio</a></li>
        <li className='li'> <a href='#'>Clubes</a></li>
        <li className='li'> <a href='#'>Perfil</a></li>
      </div>
    </div>
  )
}

export default Header
