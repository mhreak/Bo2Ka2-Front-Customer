import { Star } from 'lucide-react';
import React from 'react'

interface CommentItemProps {
    auther: string;
    role: string;
    content: string;
}

export default function CommentItem({ auther, role, content }: CommentItemProps) {
  return (
    <div className='border border-border rounded-3xl p-4 flex flex-row items-center gap-3'>
        <div className='rounded-full size-10 bg-black flex-center text-amber-800 font-black'>M</div>
        <div className='flex-1'>
            <h4 className='font-bold'>{auther}</h4>
            <p className='text-sm text-muted-foreground'>{role}</p>
            <p className='mt-4 text-text'>{content}</p>
        </div>
        <Star className='text-primary size-5' fill='currentColor'/>
    </div>
  )
}
