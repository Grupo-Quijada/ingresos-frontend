import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { HelpPage } from '../pages/HelpPage'

export const AppRouter = () => {


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/help' element={<HelpPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}