import React from 'react'

export default function Button({children, className='', ...props}){
  return (
    <button className={'px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 disabled:opacity-60 ' + className} {...props}>{children}</button>
  )
}
