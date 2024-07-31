import { NavLink, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Register } from './pages/Register/Register'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'
import { Users } from './pages/Users/Users'
import { Profile } from './pages/Profile/Profile'
import { SearchMovie } from './components/SearchMovie/SearchMovie'
import MovieProfile from './components/SearchMovie/MovieProfile/MovieProfile'
import { AdminProfile } from './pages/AdminProfile/AdminProfile'
import { EditUser } from './pages/AdminProfile/EditUser/EditUser'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { AuthProvider } from './utils/AuthProvider'
import PrivateRoutes from './utils/PrivateRoutes'


function App() {
 

  return (
    <>
    
    <AuthProvider>
      {" "}
    <Routes>
     <Route path="/" element={<Layout />}>
       <Route path="/home" element={<Home />} />
       <Route path="users" element={<Users />} />

       <Route path="profile" element={<Profile />} />
       <Route path="register" element={<Register />} />
       <Route path="login" element={<Login />} />

       <Route element={<PrivateRoutes />}>
       {" "}
       <Route path="search-movie" element={<SearchMovie />} />
       </Route>
       
       <Route path="/movie/:id" element={<MovieProfile />} />
       <Route path="/admin-profile" element={<AdminProfile />} />
       <Route path="/edit-user/:id" element={<EditUser />} />
       <Route path="*" element={<PageNotFound />} /> 
     </Route>
   </Routes>
   </AuthProvider>
   
      
    </>
  )
}

export default App
