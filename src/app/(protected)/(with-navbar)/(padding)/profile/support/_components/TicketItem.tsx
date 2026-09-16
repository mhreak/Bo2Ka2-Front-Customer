import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react'
import React from 'react'


export interface TicketItemType {
    id:number,
    ticketNumber:string|number;
    title:string;
    lastUpdateStr:string;
    statusStr:string;
}

interface TicketItemProps {
    ticket: TicketItemType
}

export default function TicketItem({ticket}:TicketItemProps) {
  return (
    <div className='border border-border rounded-3xl p-5 mb-5 flex-between animate-fade-in'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-3'>
                <p className='text-text text-lg'>{`شماره تیکت: ${ticket.ticketNumber}`}</p>
                <Badge variant={"primaryLight"} className={"px-4"}>{ticket.statusStr}</Badge>
            </div>
            <p className='text-muted-foreground text-sm'>{ticket.title}</p>
            <p className='text-muted-foreground text-xs mt-8'>{`آخرین به روزرسانی ${ticket.lastUpdateStr}`}</p>
        </div>
        <ChevronLeft className="text-text" />
    </div>
  )
}
