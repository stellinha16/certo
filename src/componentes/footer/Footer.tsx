import './Footer.css'
import Link from './../linknav/LinkNav'
import loguinho from '../img/loguinho.png';

export function Footer(){
  return(
    <footer className='footer-footer'>
        <div>
        <img className='logo-footer' src={loguinho} alt="" />
      </div>
     <ul className='Lista'>
    <li>
        <h3>Historico</h3>
    </li>
    <li>
        <Link url="/" texto='Ifms'/>
          </li>
          <li>
          <Link url="/" texto='Eurico'/>
          </li>
          <li>
          <Link url="/" texto='Juracy'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3> Ballet</h3>
    </li>
    <li>
        <Link url="/" texto='Apresentações'/>
          </li>
          <li>
          <Link url="/" texto='Medalhas'/>
          </li>
          <li>
          <Link url="/" texto='Viagens'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Sobre mim</h3>
    </li>
    <li>
        <Link url="/" texto='Familia'/>
          </li>
          <li>
          <Link url="/" texto='16y'/>
          </li>
          <li>
          <Link url="/" texto='Rede Sociais'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Termos</h3>
    </li>
    <li>
        <Link url="/" texto='Suporte'/>
          </li>
          <li>
          <Link url="/" texto='Cookies'/>
          </li>
          <li>
          <Link url="/" texto='Acessibilidade'/>
          </li>
    </ul>
    </footer>
  )
}

export default Footer