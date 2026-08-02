'use client'

import BackButton from '@/components/shared/BackButton';
import { cn } from '@/lib/utils';
import React from 'react'

interface SharedProfileHeaderProps {
    title:string;
    actionButton?: React.ReactNode;
    className?:string;
}

export default function SharedProfileHeader({ title, actionButton, className }: SharedProfileHeaderProps) {
  return (
    <div className={cn('flex flex-row justify-start items-center',className)}>
        <BackButton />
        <h3 className='flex-1 font-semibold text-xl text-center'>{title}</h3>
        {actionButton}
    </div>
  )
}
