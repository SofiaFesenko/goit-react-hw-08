import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contacts/operations'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'

import RestrictedRoute from './components/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute'
import { apiRefreshUser } from './redux/auth/operations'
import { selectAuthIsRefreshing } from './redux/auth/selectors'
import Layout from './components/Layout'


function App() {
  const isRefreshing = useSelector(selectAuthIsRefreshing)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiRefreshUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  if (isRefreshing) {
    return <p>wait</p>
  }

  return (
    <>
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
      </Routes> 
    </Layout>
           
    </>
  )
}

export default App
