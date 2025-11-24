import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Confirmation(){
  const navigate = useNavigate()
  const payload = sessionStorage.getItem('bounty_payload')
  return (
    <div className='min-h-screen flex items-center justify-center p-6'>
      <div className='max-w-2xl w-full bg-white p-6 rounded shadow'>
        <h2 className='text-xl font-semibold mb-4'>Bounty Created</h2>
        <p className='mb-4'>Your bounty has been created successfully. Click to view the result (JSON payload).</p>
        <div className='flex space-x-3'>
          <Button onClick={()=>navigate('/result')}>View Result</Button>
          <Button onClick={()=>{ sessionStorage.removeItem('bounty_payload'); navigate('/create/step1') }} className='bg-gray-200 text-black'>Create Another</Button>
        </div>
        <pre className='mt-4 p-3 bg-gray-50 rounded text-sm'>{payload || 'No payload found'}</pre>
      </div>
    </div>
  )
}
