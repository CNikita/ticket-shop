import "./style.scss"
import { ReactComponent as LoginIcon } from '../images/login.svg';
import { ReactComponent as BurgerMenuIcon } from '../images/menu.svg';

export default function Header() {
  return (
    <header>
      <div className="ticket">
        <a href="#">БИЛЕТЫ И АБОНЕМЕНТЫ</a>
      </div>
      <nav className="nav-menu">
        <a href="#">Как купить?</a>
        <a href="#">Правила</a>
        <a href="#">Возврат билетов</a>
      </nav>
      <div className="menu">
        <div className="menu__login">
          <LoginIcon className="icon-login"/>
          <a href="#">Войти</a>
        </div>
        <BurgerMenuIcon className="menu__burger"/>
      </div>
    </header>
  )
}