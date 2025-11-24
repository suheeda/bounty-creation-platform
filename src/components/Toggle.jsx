import React from 'react'

export default function Toggle({label, checked, onChange}){
  return (
    <div className='flex items-center space-x-3'>
      <div className='text-sm'>{label}</div>
      <button type='button' onClick={()=>onChange(!checked)} className={'w-12 h-6 rounded-full p-1 transition ' + (checked? 'bg-sky-500':'bg-gray-300')}>
        <div className={'bg-white w-4 h-4 rounded-full shadow transform ' + (checked? 'translate-x-6':'translate-x-0')}></div>
      </button>
    </div>
  )
}
