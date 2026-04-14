import React, { useState, useCallback } from 'react'
import { ToastContext } from './ToastContext'

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback(id => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback(
    (message, type = 'success', duration = 5000) => {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts(prev => [...prev, { id, message, type }])

      setTimeout(() => {
        removeToast(id)
      }, duration)
    },
    [removeToast]
  )

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}
