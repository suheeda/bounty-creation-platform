import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import FileInput from '../../components/FileInput'
import Button from '../../components/Button'
import Toggle from '../../components/Toggle'
import { useBounty } from '../../context/BountyContext'
import { validateStep } from '../../utils/validation'

export default function StepBacker({ setStep, step, setErrors, errors }){
  const { data, update } = useBounty()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  const back = ()=> { setStep(2); navigate('/create/step2') }

  const submit = () => {
    const errs = validateStep(3, data)
    setErrors(errs)
    if(Object.keys(errs).length > 0) return
    // simulate server
    setSubmitting(true)
    setTimeout(()=>{
      // prepare payload matching required format
      const payload = {
        title: data.title,
        description: data.description,
        projectTitle: data.projectTitle,
        type: data.type,
        dominant_core: data.dominant_core,
        mode: data.mode,
        location: data.mode==='physical'? data.location: undefined,
        reward: { currency: data.reward.currency, amount: Number(data.reward.amount), winners: Number(data.reward.winners) },
        timeline: {
          expiration_date: data.timeline.expiration_date? new Date(data.timeline.expiration_date).toISOString() : null,
          estimated_completion: data.timeline.estimated_completion
        },
        hasImpactCertificate: data.hasImpactCertificate,
        impactBriefMessage: data.hasImpactCertificate? data.impactBriefMessage: undefined,
        has_backer: data.has_backer,
        backer: data.has_backer? data.backer: undefined,
        terms_accepted: data.terms_accepted
      }
      // store the payload in sessionStorage for result page
      sessionStorage.setItem('bounty_payload', JSON.stringify(payload, null, 2))
      setSubmitting(false)
      navigate('/confirmation')
    }, 1200)
  }

  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Backer & Terms</h2>
      <div className='space-y-4'>
        <div className='p-4 border rounded'>
          <div className='text-sm font-semibold mb-2'>Backer</div>
          <div className='flex items-center justify-between'>
            <Toggle label='Has Backer?' checked={data.has_backer} onChange={v=>update({ has_backer: v })}/>
          </div>
          {data.has_backer && (
            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-3'>
              <Input label='Backer Name' value={data.backer.name} onChange={e=>update({ backer: { ...data.backer, name: e.target.value } })} error={errors.backer_name}/>
              <FileInput label='Backer Logo (URL)' value={data.backer.logo} onChange={v=>update({ backer: { ...data.backer, logo: v } })} error={errors.backer_logo}/>
              <Input label='Backer Message (optional)' value={data.backer.message} onChange={e=>update({ backer: { ...data.backer, message: e.target.value } })} />
            </div>
          )}
        </div>

        <div className='p-4 border rounded'>
          <div className='text-sm font-semibold mb-2'>Terms & Conditions</div>
          <div className='flex items-start space-x-3'>
            <input type='checkbox' checked={data.terms_accepted} onChange={e=>update({ terms_accepted: e.target.checked })} />
            <div>
              <div>I accept the terms and conditions</div>
              {errors.terms_accepted && <div className='text-sm text-red-600'>{errors.terms_accepted}</div>}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex justify-between'>
        <Button onClick={back} className='bg-gray-200 text-black'>Back</Button>
        <Button onClick={submit} disabled={submitting}>{submitting? 'Creating...':'Create Bounty'}</Button>
      </div>
    </div>
  )
}
