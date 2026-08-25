import dynamic from 'next/dynamic';
import React from 'react'

const NeshanMapPreview = dynamic(
  () => import("@/components/NeshanMapPreview"),
  {
    ssr: false,
  }
);

export default function AddressMapSection() {
  return (
    <div className='rounded-3xl w-full h-40'>
        <NeshanMapPreview />
    </div>
  )
}
