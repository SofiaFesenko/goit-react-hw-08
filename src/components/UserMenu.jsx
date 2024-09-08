import { useDispatch, useSelector } from "react-redux"
import { apiLogout } from "../redux/auth/operations"
import { selectAuthUser } from "../redux/auth/selectors"
import { NavLink } from "react-router-dom"
import clsx from "clsx"

import css from '../App.module.css'

function UserMenu() {
    const user = useSelector(selectAuthUser)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(apiLogout())
    }

    return (
      <>
      <NavLink to="/contacts" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Contacts</NavLink>
        <div>
            <span>hello {user.name}</span>
            <button type="button" onClick={onLogout}>Logout</button>
        </div>
      </>
    )
}

export default UserMenu