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
  return <StatsCards loading={false} data={stats} />
}

interface StatsCardProps {
  data: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardProps){
  const{ data, loading } = props;

  return <div className='
    w-full
    pt-8
    gap-4
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
  '>
    <StatsCard
      title="Total Visits"
    />
  </div>
}