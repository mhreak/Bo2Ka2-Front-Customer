import React from 'react'

interface SettingItemProps {
    icon: React.ReactNode;
    title:string;
    children:React.ReactNode;
}

export default function SettingItem({icon, title, children}:SettingItemProps) {
  return (
    <div className='border border-border rounded-3xl p-4 flex flex-row justify-start items-center gap-4 mb-3'>
        {icon}
        <div className='flex-1 text-muted-foreground'>{title}</div>
        <span className='text-muted-foreground'>

        {children}
        </span>
    </div>
  )
}
