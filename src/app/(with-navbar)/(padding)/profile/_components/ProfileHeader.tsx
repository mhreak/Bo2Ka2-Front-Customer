import { Button } from '@/components/ui/button'
import { Menu, ShoppingBag } from 'lucide-react'
import React from 'react'

export default function ProfileHeader() {
  return (
    <div className="flex flex-row justify-start items-center">
        <Button variant={"outline"} size={"icon-lg"}><ShoppingBag /></Button>
        <div className='flex-1 text-xl font-semibold text-center'>پروفایل</div>
        <Button variant={"outline"} size={"icon-lg"}><Menu /></Button>
    </div>
  )
}
