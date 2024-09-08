import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from './redux/contacts/operations'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'

import RestrictedRoute from './components/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute'
import { apiRefreshUser } from './redux/auth/operations'
import AppBar from './components/AppBar'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiRefreshUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
    <AppBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
      </Routes>      
    </>
  )
}



export default App
