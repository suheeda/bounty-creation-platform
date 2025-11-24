import React from 'react'

export default function Input({label, error, ...props}){
  return (
    <label className='block'>
      <div className='text-sm font-medium mb-1'>{label}</div>
      <input className={'w-full p-2 border rounded ' + (error? 'border-red-500':'border-gray-200')} {...props} />
      {error && <div className='text-sm text-red-600 mt-1'>{error}</div>}
    </label>
  )
}
