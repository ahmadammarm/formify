import { GetFormStats } from '@/actions/form'
import React from 'react'

export default function Home() {
  return
    <div className='container pt-4'>
      Hello
    </div>
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCard loading={false} data={stats} />
}
