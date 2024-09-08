import { useSelector } from 'react-redux'
import css from '../App.module.css'
import { selectAuthIsLoggedIn } from '../redux/auth/selectors'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import AuthNav from './AuthNav'


function AppBar() {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn)

    return (
        <div className={css.linkblock}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    )
}

export default AppBar