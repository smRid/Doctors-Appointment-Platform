import React from 'react'

export default function SignInLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  )
}