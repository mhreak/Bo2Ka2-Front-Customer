import { cn } from '@/lib/utils';
import React from 'react'
import AddressMapSection from './AddressMapSection';

interface AddressSectinProps {
    className?:string;
    children: React.ReactNode
}

export default function AddressSection({className, children}:AddressSectinProps) {
  return (
    <div className={cn("border border-border rounded-3xl p-5", className)}>
        <AddressMapSection />
        {children}
    </div>
  )
}
