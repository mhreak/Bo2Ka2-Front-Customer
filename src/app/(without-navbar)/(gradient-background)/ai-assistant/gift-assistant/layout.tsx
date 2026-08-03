'use client'

import BackButton from '@/components/shared/BackButton'
import React from 'react'

export default function GiftAssistantLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='flex flex-row mb-7'>
                <BackButton />
                <div className="text-center flex-center w-full">
                    <div>

                    <h3 className='text-xl font-semibold'>دستیار هدیه هوش مصنوعی</h3>
                    <p className='text-xs text-muted-foreground'>بیایید با هم هدیه مناسب را پیدا کنیم.</p>
                    </div>
                </div>
                </div>
                {children}
        </>
    )
}
