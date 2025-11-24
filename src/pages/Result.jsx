import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Result(){
  const navigate = useNavigate()
  const payload = sessionStorage.getItem('bounty_payload')
  return (
    <div className='min-h-screen flex items-start justify-center p-6'>
      <div className='max-w-4xl w-full bg-white p-6 rounded shadow'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Bounty Payload</h2>
          <div>
            <Button onClick={()=>navigate('/create/step1')} className='bg-gray-200 text-black mr-2'>Create New</Button>
            <Button onClick={()=>{ navigator.clipboard?.writeText(payload || ''); alert('Copied to clipboard') }}>Copy JSON</Button>
          </div>
        </div>
        <pre className='bg-gray-50 p-4 rounded overflow-auto' style={{maxHeight: '60vh'}}>{payload || 'No payload available'}</pre>
      </div>
    </div>
  )
}
