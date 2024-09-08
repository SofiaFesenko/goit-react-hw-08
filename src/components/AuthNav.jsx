import clsx from "clsx"
import css from '../App.module.css'
import { NavLink } from "react-router-dom"

function AuthNav() {
    return (
      <>
        <NavLink to="/login" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Login</NavLink> 
        <NavLink to="/register" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Register</NavLink>
      </>
    )
}

export default AuthNav