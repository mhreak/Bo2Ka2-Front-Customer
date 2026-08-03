import React from 'react'
import SharedProfileHeader from '../_components/SharedProfileHeader'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import TicketItem from './_components/TicketItem'



const ticketMockData = [
    {
        id:1,
        ticketNumber: "02263",
        title: "استعلام وضعیت ارسال با تاخیر",
        lastUpdateStr: "۲ ساعت پیش"
    },
    {
        id:2,
        ticketNumber: "02263",
        title: "استعلام وضعیت ارسال با تاخیر",
        lastUpdateStr: "۲ ساعت پیش"
    },
]

export default function SupportPage() {
  return (
    <div>
        <SharedProfileHeader title="پشتیبانی" actionButton={<Button variant={"accent"} size={'icon-lg'}><Plus /></Button>}/>
        <h4 className="text-lg mb-5 mt-8">تیکت ها</h4>
        {ticketMockData.map((ticket) => <TicketItem ticket={ticket}/>)}
    </div>
  )
}
