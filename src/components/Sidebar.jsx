import React from 'react'

export default function Sidebar({step, go}) {
  const items = ['Basics','Rewards','Backer']
  return (
    <div className='w-56 p-4 bg-white rounded-lg shadow-sm'>
      <h3 className='font-bold text-lg mb-4'>Create Bounty</h3>
      <ul className='space-y-2'>
        {items.map((it, i)=>(
          <li key={it}
            className={'p-2 rounded flex items-center justify-between cursor-pointer ' + (step===i+1? 'bg-sky-50 border border-sky-200':'hover:bg-gray-50')}
            onClick={()=>go(i+1)}
          >
            <div>
              <div className='text-sm font-medium'>{it}</div>
              <div className='text-xs text-slate-500'>Step {i+1}</div>
            </div>
            <div className={'h-6 w-6 rounded-full flex items-center justify-center text-xs ' + (step===i+1? 'bg-sky-500 text-white':'bg-gray-200 text-gray-700')}>{i+1}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
