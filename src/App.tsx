import './styles/index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import UsersPage from './pages/Users'
import UserDetailsPage from './pages/UserDetails'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/user-details/*' element={<UserDetailsPage />} />
          <Route path='/user-details/:id' element={<UserDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
