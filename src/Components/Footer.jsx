import React from 'react'
import { useTheme } from '../ThemeContext'

const Footer = () => {
  const { isDarkMode } = useTheme()
  return (
    <footer className={`w-full p-4 border-t-2 ${isDarkMode ? 'bg-cyan-900 text-cyan-200 border-cyan-200' : 'bg-blue-300 text-blue-900 border-blue-900'}`}>
      <div className="w-full flex items-center justify-center p-2">
        <h2 className="text-center">Developed by Faizan Hussain</h2>
      </div>
    </footer>
  )
}

export default Footer
