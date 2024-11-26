//  Router Principal de la aplicación
import { Route, Routes } from 'react-router'
import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui/components/Navbar'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={ <LoginPage /> } ></Route>

            <Route path='/*' element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute> 
          } />
          
        </Routes>
    </>
  )
}
