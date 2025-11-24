import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'
import Button from '../../components/Button'
import Toggle from '../../components/Toggle'
import { useBounty } from '../../context/BountyContext'
import { validateStep } from '../../utils/validation'

export default function StepRewards({ setStep, step, setErrors, errors }){
  const { data, update } = useBounty()
  const navigate = useNavigate()

  const next = () => {
    const errs = validateStep(2, data)
    setErrors(errs)
    if(Object.keys(errs).length===0){
      setStep(3)
      navigate('/create/step3')
    }
  }
  const back = ()=> { setStep(1); navigate('/create/step1') }

  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Rewards & Timeline</h2>
      <div className='space-y-4'>
        <div className='p-4 border rounded'>
          <div className='text-sm font-semibold mb-2'>Reward</div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <Dropdown label='Currency' options={['USD','EUR','INR','GBP']} value={data.reward.currency} onChange={v=>update({ reward: { ...data.reward, currency: v }})} />
            <Input label='Total Reward Amount' type='number' min='0' placeholder='Amount' value={data.reward.amount} onChange={e=>update({ reward: { ...data.reward, amount: e.target.value } })} error={errors.amount}/>
            <Input label='Number of Winners' type='number' min='1' value={data.reward.winners} onChange={e=>update({ reward: { ...data.reward, winners: e.target.value } })} />
          </div>
        </div>

        <div className='p-4 border rounded'>
          <div className='text-sm font-semibold mb-2'>Timeline</div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <Input label='Expiration Date' type='datetime-local' value={data.timeline.expiration_date} onChange={e=>update({ timeline: { ...data.timeline, expiration_date: e.target.value } })} error={errors.expiration_date}/>
            <Input label='Estimated Days' type='number' min='0' value={data.timeline.estimated_completion.days} onChange={e=>update({ timeline: { ...data.timeline, estimated_completion: { ...data.timeline.estimated_completion, days: Number(e.target.value) } } })}/>
            <Input label='Estimated Hours' type='number' min='0' value={data.timeline.estimated_completion.hours} onChange={e=>update({ timeline: { ...data.timeline, estimated_completion: { ...data.timeline.estimated_completion, hours: Number(e.target.value) } } })}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-3'>
            <Input label='Estimated Minutes' type='number' min='0' value={data.timeline.estimated_completion.minutes} onChange={e=>update({ timeline: { ...data.timeline, estimated_completion: { ...data.timeline.estimated_completion, minutes: Number(e.target.value) } } })}/>
          </div>
        </div>

        <div className='p-4 border rounded'>
          <div className='text-sm font-semibold mb-2'>Impact Certificate</div>
          <div className='flex items-center justify-between'>
            <Toggle label='Has Impact Certificate?' checked={data.hasImpactCertificate} onChange={v=>update({ hasImpactCertificate: v })}/>
          </div>
          {data.hasImpactCertificate && (
            <div className='mt-3'>
              <Input label='Impact Brief' placeholder='Describe the impact certificate' value={data.impactBriefMessage} onChange={e=>update({ impactBriefMessage: e.target.value })} error={errors.impact}/>
            </div>
          )}
        </div>

      </div>

      <div className='mt-6 flex justify-between'>
        <Button onClick={back} className='bg-gray-200 text-black'>Back</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
