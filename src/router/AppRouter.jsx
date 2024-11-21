//  Router Principal de la aplicación
import { Navigate, Route, Routes } from 'react-router'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DCPage } from '../heroes/pages/DCPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui/components/Navbar'

export const AppRouter = () => {
  return (
    <>

        <Navbar />
        <Routes>

            <Route path='marvel' element={ <MarvelPage /> } ></Route>
            <Route path='dc' element={ <DCPage /> } ></Route>

            <Route path='login' element={ <LoginPage /> } ></Route>

            <Route path='/' element={ <Navigate to='/marvel' /> } ></Route>

        </Routes>
    </>
  )
}
