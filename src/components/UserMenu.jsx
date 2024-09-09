import { useDispatch, useSelector } from "react-redux"
import { apiLogout } from "../redux/auth/operations"
import { selectAuthUser } from "../redux/auth/selectors"


function UserMenu() {
    const user = useSelector(selectAuthUser)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(apiLogout())
    }

    return (
      <>
      
        <div>
            <span>hello {user.name}</span>
            <button type="button" onClick={onLogout}>Logout</button>
        </div>
      </>
    )
}

export default UserMenu