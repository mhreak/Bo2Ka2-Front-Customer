import Image from 'next/image'
import React from 'react'

export default function GiftReceiver() {
    return (
        <div className='space-y-5 w-full'>
            <div className='size-60 bg-fuchsia-500 rounded-2xl'></div>
            <h3 className="font-semibold text-lg text-right">جنسیت</h3>
            <div className='flex flex-row justify-start gap-4'>
                <div className='flex flex-col gap-3'>

                    <div className='relative size-12 bg-gradient rounded-lg overflow-visible'>
                        <Image src={"/icons/woman-icon.png"} alt="man-icon" width={64} height={64} className="absolute top-0 left-0 scale-150 object-contain" />
                    </div>
                    <p className="text-sm text-muted-foreground">خانم</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='relative size-12 bg-gradient rounded-lg'>
                        <Image src={"/icons/man-icon.png"} alt="man-icon" width={64} height={64} className="absolute top-0 left-0 scale-150 object-contain" />
                    </div>
                    <p className="text-sm text-muted-foreground">آقا</p>
                </div>
            </div>
        </div>
    )
}
