import React from 'react'
import SharedProfileHeader from '../_components/SharedProfileHeader'
import SettingItem from './_components/SettingItem'
import { ChevronLeft, Globe, Moon, BellRing, SquareArrowOutUpRight } from 'lucide-react'
import { Switch } from '@/components/ui/switch'


export default function SettingPage() {
  return (
    <div>
      <SharedProfileHeader title='تنظیمات' className='mb-8'/>
      <h4 className="text-lg mb-5">ظاهر</h4>
      <SettingItem icon={<Moon />} title='زمینه تاریک'>
        <Switch />
      </SettingItem>
      <h4 className="text-lg mb-5 mt-8">ترجیحات</h4>
      <SettingItem icon={<Globe />} title='زبان'>
        <div className='flex gap-2 text-muted-foreground'> 
          <span>فارسی</span>
          <ChevronLeft />
        </div>
      </SettingItem>
      <SettingItem icon={<BellRing />} title='اعلانات'>
        <Switch />
      </SettingItem>
      <h4 className="text-lg mb-5 mt-8">حقوقی و اطلاعات</h4>
      <SettingItem icon={<Globe />} title='شرایط و خدمات'>
        <SquareArrowOutUpRight />
      </SettingItem>
      <SettingItem icon={<BellRing />} title='سیاست حفظ حریم خصوصی'>
        <SquareArrowOutUpRight />
      </SettingItem>
      <SettingItem icon={<BellRing />} title='نسخه برنامه'>
        {"v2.4.0"} 
      </SettingItem>
    </div>
  )
}
