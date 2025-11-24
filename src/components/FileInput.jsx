import React from 'react'

export default function FileInput({label, value, onChange, error}) {
  return (
    <label className='block'>
      <div className='text-sm font-medium mb-1'>{label}</div>
      <input type='text' placeholder='Enter image URL or upload later' className={'w-full p-2 border rounded ' + (error? 'border-red-500':'border-gray-200')} value={value} onChange={e=>onChange(e.target.value)} />
      {error && <div className='text-sm text-red-600 mt-1'>{error}</div>}
    </label>
  )
}
