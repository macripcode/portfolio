import '../styles/header.css'

import { useContext, useState, useEffect } from 'react'
import { LanguageContext } from './LanguageContext'



function Header() {
  const [theme, setTheme] = useState('dark')  // por defecto modo oscuro
  const { lang, setLang } = useContext(LanguageContext)
 

  // Aplicar clase al body según tema
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // Cargar tema desde localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setTheme(savedTheme)
  }, [])

  // Cambiar idioma
  function handleLangChange(e) {
    setLang(e.target.value)

  }

  // Cambiar tema
  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: theme === 'dark' ? '#121212' : '#f0f0f0',
      color: theme === 'dark' ? '#f0f0f0' : '#121212',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="main-logo"><img  src="logo.svg" alt="" /></div>
      
      <nav>
        <a href="#hero" style={{margin: '0 1rem'}}>About Me</a>
        <a href="#projects" style={{margin: '0 1rem'}}>Project</a>
        <a href="#contact" style={{margin: '0 1rem'}}>Contact</a>
      </nav>
      
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <select value={lang} onChange={handleLangChange}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>

        <button onClick={toggleTheme} style={{
          padding: '0.3rem 0.8rem',
          borderRadius: '20px',
          border: 'none',
          cursor: 'pointer'
        }}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}

export default Header