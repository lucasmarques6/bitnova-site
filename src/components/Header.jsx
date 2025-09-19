import { Link } from 'react-router-dom'
import './styleEstatico.css'

const Header = () => {

  return (
    <header>
      <nav>
        <div className="nav-container">
          <Link to='/' className='logo-link'>
            {/* <img src={logo} alt="Bitnova Logo" className="nav-logo" /> */}
            <div className="logo-text-container">
              <span className="logo-text-main">Bit</span>
              <span className="logo-text-accent">nova</span>
              <div className="logo-elements">
                <span className="logo-dot"></span>
                <span className="logo-dot"></span>
                <span className="logo-dot"></span>
              </div>
            </div>
          </Link>
          <ul>
              <li><Link to='/' className='link'>Inicio</Link></li>
              <li><Link to='/nosotros' className='link'>Sobre nosotros</Link></li>
              <li><Link to='/servicios' className='link'>Servicios</Link></li>
              <li><Link to='/contacto' className='link'>Contacto</Link></li> 
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

