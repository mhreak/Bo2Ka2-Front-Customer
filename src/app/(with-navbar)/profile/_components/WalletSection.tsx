'use client';
import { Button } from '@/components/ui/button'
import { toPersianDigits } from '@/utils/numberConversions';


interface WalletSectionProps {
  balance: number;
  onUpgradeClick: () => void;
}

export default function WalletSection({balance, onUpgradeClick}:WalletSectionProps) {
  return (
    <div className='bg-secondary p-8 rounded-3xl flex-between'>
        <div className=''>
            <p className='text-muted-foreground mb-2'>کل موجودی کیف پول</p>
            <h2 className='text-secondary-foreground font-extrabold text-3xl'>{toPersianDigits(balance.toLocaleString())} تومان</h2>
        </div>
        <div>
            <Button variant={"accent"} size="sm" className={"rounded-lg"} onClick={onUpgradeClick}>ارتقا</Button>
        </div>
    </div>
  )
}
