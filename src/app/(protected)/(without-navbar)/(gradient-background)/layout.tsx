import React from 'react'

export default function GradientBackgroundLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="bg-gradient-light h-full p-5">{children}</div>
  )
}
