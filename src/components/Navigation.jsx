import { NavLink } from "react-router-dom"
import css from '../App.module.css'
import clsx from "clsx"
import { useSelector } from "react-redux"
import { selectAuthIsLoggedIn } from "../redux/auth/selectors"

function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)

    return (
      <>
        <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Contacts</NavLink>}
      </>
    )
}

export default Navigation