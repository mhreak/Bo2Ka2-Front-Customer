import { MoreHorizontal } from 'lucide-react';
import React from 'react'

export default function CampaignHeader() {
    return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-extrabold">
        هدایای گروه فعال
      </h1>
      <MoreHorizontal size={22} />

    </div>
  );
}
