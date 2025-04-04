import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { ThemeProvider } from "@/components/theme-provider"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">  
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='create' element={<CreatePage/>}/>
      </Route>
    </Routes>
    <Toaster />
    </ThemeProvider>
    
  )
}

export default App