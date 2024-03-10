import './Header.css'
const logo = 'https://www.pngkey.com/png/full/89-896782_gamer-png.png'


const Header = () => {
  return (
    <div className='head'>
      <img className="logo" src={logo} alt=" Logo" />
      <div >
      <h6 className="title1">  BIENVENIDO A LA DIMENSION GAMER ...</h6> 
      <div className="Navbar"> 
        <li className='li'> <a href='#'>Inicio</a></li>
        <li className='li'> <a href='#'>Clubes</a></li>
        <li className='li'> <a href='#'>Perfil</a></li>
      </div>
      </div>
    </div>
  )
}

export default Header
