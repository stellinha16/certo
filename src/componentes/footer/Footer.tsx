import './Footer.css'
import Link from './../link/Link'
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
        <Link texto='Ifms'/>
          </li>
          <li>
          <Link texto='Eurico'/>
          </li>
          <li>
          <Link texto='Juracy'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3> Ballet</h3>
    </li>
    <li>
        <Link texto='Apresentações'/>
          </li>
          <li>
          <Link texto='Medalhas'/>
          </li>
          <li>
          <Link texto='Viagens'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Sobre mim</h3>
    </li>
    <li>
        <Link texto='Familia'/>
          </li>
          <li>
          <Link texto='16y'/>
          </li>
          <li>
          <Link texto='Rede Sociais'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Termos</h3>
    </li>
    <li>
        <Link texto='Suporte'/>
          </li>
          <li>
          <Link texto='Cookies'/>
          </li>
          <li>
          <Link texto='Acessibilidade'/>
          </li>
    </ul>
    </footer>
  )
}

export default Footer