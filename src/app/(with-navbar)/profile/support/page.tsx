import React from 'react'
import SharedProfileHeader from '../_components/SharedProfileHeader'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import TicketItem, { TicketItemType } from './_components/TicketItem'
import ContactUsSection from './_components/ContactUsSection'
import FAQSection from './_components/FAQSection'



const ticketMockData:TicketItemType[] = [
    {
        id:1,
        ticketNumber: "02263",
        title: "استعلام وضعیت ارسال با تاخیر",
        lastUpdateStr: "۲ ساعت پیش",
        statusStr: "باز"
    },
    {
        id:2,
        ticketNumber: "02263",
        title: "استعلام وضعیت ارسال با تاخیر",
        lastUpdateStr: "۲ ساعت پیش",
        statusStr: "باز"
    },
]

export default function SupportPage() {
  return (
    <div>
        <SharedProfileHeader title="پشتیبانی" actionButton={<Button variant={"accent"} size={'icon-lg'}><Plus /></Button>}/>
        <h4 className="text-lg mb-5 mt-8">تیکت ها</h4>
        {ticketMockData.map((ticket) => <TicketItem key={ticket.id} ticket={ticket}/>)}
        <ContactUsSection />
        <FAQSection />
    </div>
  )
}
