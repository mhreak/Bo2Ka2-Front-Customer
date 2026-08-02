import { Switch } from '@/components/ui/switch';
import { on } from 'events';
import React from 'react'

interface PayMethodItemProps {
    icon?: React.ReactNode;
    title:string;
    description:string;
    value:boolean;
    onChange:(val:boolean) => void;
}

export default function PayMethodItem({icon,title,description, value, onChange}:PayMethodItemProps) {
  return (
    <div className='border border-border rounded-3xl p-6 flex flex-row justify-start items-center gap-4'>
        {icon && <div>{icon}</div>}
        <div className='flex-1'>
            <h4 className='font-medium text-xl'>{title}</h4>
            <p className='text-muted-foreground text-md'>{description}</p>
        </div>
        <Switch checked={value} onCheckedChange={(val) => onChange(val)}/>
    </div>
  )
}
