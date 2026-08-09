import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function EditAccountAvatarSection() {
  return (
    <div className='my-10 flex flex-col items-center justify-center'>
        <div className='relative mb-8'>

        <Image src={"/samples/sample-avatar-3.jpg"} alt='sample-avatar' className='rounded-full' width={92} height={92}/>
            <Button variant={"gradient"} size={"icon-lg"} className={"absolute -bottom-2 right-0"}>
                <Camera />
            </Button>
        </div>
        <h3 className='font-semibold text-lg'>{"اشکان طهماسبی"}</h3>
        
        
    </div>
  )
}
