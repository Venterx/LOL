import { NavLink } from "react-router-dom"
import logo from "../../assets/avtotorgLogo 1.svg"
import BlueButton from "../BlueButton/BlueButton.jsx"
import s from "./Header.module.css"

export default function Header() {
	return (
		<header className={s.header}>
			<div className={s.header__inner}>
				<div className={s.nav}>
					<NavLink to="/" className={`${s.nav__item} nav__item`}>О нас</NavLink>
					<NavLink to="/catalog" className={`${s.nav__item} nav__item`}>Каталог</NavLink>
					<NavLink to="/posts" className={`${s.nav__item} nav__item`}>Пользователи</NavLink>
					<NavLink to="/cart" className={`${s.nav__item} nav__item`}>Корзина</NavLink>
				</div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className={s.buttons}>
					<BlueButton value="Регистрация" type="btnBlack"></BlueButton>
					<BlueButton value="Вход" type="btnBlue"></BlueButton>
				</div>
			</div>
		</header>
	)
}
