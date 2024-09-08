import { NavLink } from "react-router-dom"
import css from '../App.module.css'
import clsx from "clsx"

function Navigation() {

    return (
      <>
        <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>
      </>
    )
}

export default Navigation