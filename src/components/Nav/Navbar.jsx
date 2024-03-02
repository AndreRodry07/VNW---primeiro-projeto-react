import { useState } from 'react';
import Logo from '../../assets/images/logo.png'
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import './Navbar.css';

export default function Menu() {

  const [menuvisivel, setMenuvisivel] = useState(false);

  const AbriMenu = () => {
    setMenuvisivel(true);
  };

  const FechaMenu = () => {
    setMenuvisivel(false);
  };

  const menuItemClicado = (sectionId) => {
    FechaMenu();
    // Use smooth scrolling to navigate to the section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div className='nav-menu'>

      <div className='header-container'>
        <figure className='logo'>
        <img src={Logo} alt="image logo"/>
        </figure>
      
      <button onClick={AbriMenu} className="ligar-button">
      <FiAlignCenter />
      </button>
      </div>


      <nav className={`nav-container ${menuvisivel ? 'exibir' : ''}`}>

        <div className='btn-menu'>
          <button onClick={FechaMenu} className="fecha-button">
          <FiX   className='icon'/>
          </button>
        </div>

        <div className={`menu ${menuvisivel ? 'visivel' : ''}`}>
          
          <ul className='nav-list'>
            <li onClick={() => menuItemClicado('section1')} className='nav-item'><a href='#'>Produto</a></li>
            <li onClick={() => menuItemClicado('section2')} className='nav-item'><a href='#'>Garantia</a></li>
            <li onClick={() => menuItemClicado('footer-price')} className='nav-item'><a href='#'>Obter Preço</a></li>
          </ul>

        </div>


      </nav>


    </div>
  );
}
