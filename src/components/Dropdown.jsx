import React from 'react'

export default function Dropdown({label, options, value, onChange, error}){
  return (
    <label className='block'>
      <div className='text-sm font-medium mb-1'>{label}</div>
      <select className={'w-full p-2 border rounded ' + (error? 'border-red-500':'border-gray-200')} value={value} onChange={e=>onChange(e.target.value)}>
        {options.map(o=> <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <div className='text-sm text-red-600 mt-1'>{error}</div>}
    </label>
  )
}
