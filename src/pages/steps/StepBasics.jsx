import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Dropdown from '../../components/Dropdown'
import Button from '../../components/Button'
import { useBounty } from '../../context/BountyContext'
import { validateStep } from '../../utils/validation'

export default function StepBasics({ setStep, step, setErrors, errors }){
  const { data, update } = useBounty()
  const navigate = useNavigate()

  const next = () => {
    const errs = validateStep(1, data)
    setErrors(errs)
    if(Object.keys(errs).length===0){
      setStep(2)
      navigate('/create/step2')
    }
  }

  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Basics</h2>
      <div className='space-y-4'>
        <Input label='Bounty Title' placeholder='Enter title' value={data.title} onChange={e=>update({ title: e.target.value })} maxLength={40} error={errors.title}/>
        <Textarea label='Bounty Description' placeholder='Describe the bounty' value={data.description} onChange={e=>update({ description: e.target.value })} error={errors.description}/>
        <Input label='Project Title (optional)' placeholder='Project title' value={data.projectTitle} onChange={e=>update({ projectTitle: e.target.value })} />
        <Dropdown label='Bounty Type' options={['Content','Design','Development','Marketing','Other']} value={data.type} onChange={v=>update({ type: v })} />
        <Dropdown label='Dominant Impact Core' options={['Water','Earth','Social','Energy']} value={data.dominant_core} onChange={v=>update({ dominant_core: v })} />
        <div className='flex items-center space-x-4'>
          <label className='block'>
            <div className='text-sm font-medium mb-1'>Bounty Mode</div>
            <div className='flex space-x-3'>
              <label className={'px-3 py-2 border rounded cursor-pointer ' + (data.mode==='digital'?'bg-sky-50 border-sky-300':'') }>
                <input type='radio' name='mode' checked={data.mode==='digital'} onChange={()=>update({ mode: 'digital' })} /> Digital
              </label>
              <label className={'px-3 py-2 border rounded cursor-pointer ' + (data.mode==='physical'?'bg-sky-50 border-sky-300':'') }>
                <input type='radio' name='mode' checked={data.mode==='physical'} onChange={()=>update({ mode: 'physical' })} /> Physical
              </label>
            </div>
            {errors.location && <div className='text-sm text-red-600 mt-1'>{errors.location}</div>}
          </label>
        </div>
        {data.mode==='physical' && <Input label='Location' placeholder='Where is this bounty based?' value={data.location} onChange={e=>update({ location: e.target.value })} error={errors.location}/>}
      </div>

      <div className='mt-6 flex justify-between'>
        <div/>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
