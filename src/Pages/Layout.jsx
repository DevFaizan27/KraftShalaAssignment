import React from 'react'
import NavBar from '../Components/NavBar'
import { useTheme } from '../ThemeContext'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
    const {isDarkMode}=useTheme();

    

  return (
    <div className={`min-h-[100vh] flex flex-col  font-serif font-medium ${isDarkMode?'bg-cyan-800 text-cyan-200':'bg-blue-200 text-blue-900'}`}>
        <NavBar/>
        <main className='flex-grow self-center mt-10 md:mt-14'>
            <Outlet/>
        </main>  
        <Footer/>  
    </div>
  )
}

export default Layout