import React, { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, BeakerIcon } from '@heroicons/react/24/outline'
import { profileData } from '../data/profile'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'resume', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = href => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:glass-panel shadow-lg border-b border-gray-200 dark:border-slate-800/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
              aria-label="Lakshya Sharma Portfolio - Home"
            >
              {profileData.name.split(' ').map((word, index) => (
                <span key={index} className="mr-1">
                  {word}
                </span>
              ))}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-3 lg:space-x-6">
              {navigation.map(item => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${
                        isActive
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={profileData.qaPlaygroundUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 group"
            >
              <span className="absolute inset-0 rounded-lg ring-2 ring-emerald-400/40 animate-ping pointer-events-none group-hover:ring-emerald-300/60" />
              <BeakerIcon className="h-4 w-4 lg:h-5 lg:w-5 relative z-10" />
              <span className="relative z-10 whitespace-nowrap">QA Playground</span>
            </a>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-transparent dark:border-slate-700/50"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/30'
                          : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                )
              })}
              <li className="pt-2 pb-1">
                <a
                  href={profileData.qaPlaygroundUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-3 py-2.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BeakerIcon className="h-5 w-5" />
                  <span>Try QA Playground</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
