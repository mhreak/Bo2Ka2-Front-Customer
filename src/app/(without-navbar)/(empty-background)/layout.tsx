import React from 'react'

export default function EmptyBackgroundLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-full p-5'>{children}</div>
  )
}
