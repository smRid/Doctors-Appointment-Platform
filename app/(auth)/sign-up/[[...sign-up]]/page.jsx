import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center w-full">
      <SignUp />
    </div>
  )
}
