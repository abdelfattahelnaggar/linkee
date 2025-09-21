import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedAuthRoute({children}) {
    const isLoggedIn = localStorage.getItem("token");
  return (
    <div>
        {isLoggedIn ? <Navigate to="/" /> : children}
    </div>
  )
}
