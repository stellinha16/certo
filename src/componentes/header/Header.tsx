import './Header.css'
import Link from './../linknav/LinkNav'
import topo from '../img/header.png'

export function Header(){
  return(
    <header className='header-header'>
      <div>
      <img className='header-img' src= {topo}/>
      </div>
      <nav>
        <ul>
          <li>
            <Link url="/" texto='Home'/>
          </li>
          <li>
          <Link url="/noticias" texto='Noticia'/>
          </li>
          <li>
          <Link url="/sobre" texto='Sobre'/>
          </li>
          <li>
          <Link url="/contato" texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header