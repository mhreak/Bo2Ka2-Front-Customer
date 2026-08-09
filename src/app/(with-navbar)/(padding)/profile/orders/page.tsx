import React from 'react'
import SharedProfileHeader from '../_components/SharedProfileHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ActiveOrdersTab from './_components/ActiveOrdersTab'
import HistoryOrdersTab from './_components/HistoryOrdersTab'

export default function OrdersPage() {
  return (
    <div>
        <SharedProfileHeader title='سفارشات من' className='mb-5'/>
        <Tabs defaultValue={"active"}>
            <TabsList className={"mb-8 w-full"}>
                <TabsTrigger value="active">فعال</TabsTrigger>
                <TabsTrigger value="history">تاریخچه</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
                <ActiveOrdersTab />
            </TabsContent>
            <TabsContent value="history">
                <HistoryOrdersTab />
            </TabsContent>

        </Tabs>
    </div>
  )
}
