import React, {useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import StepBasics from './steps/StepBasics'
import StepRewards from './steps/StepRewards'
import StepBacker from './steps/StepBacker'
import { useBounty } from '../context/BountyContext'
import { validateStep } from '../utils/validation'

export default function WizardPage(){
  const navigate = useNavigate()
  const { data } = useBounty()
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    // navigate to current step route on mount
    navigate('/create/step1', { replace: true })
  }, [])

  const go = (s) => {
    // allow navigation to previous freely, to future only if validated
    if(s <= step) { setStep(s); navigate('/create/step'+s); return }
    const errs = validateStep(step, data)
    if(Object.keys(errs).length === 0){
      setStep(s); navigate('/create/step'+s)
    } else {
      setErrors(errs)
      alert('Please fix errors before proceeding.')
    }
  }

  return (
    <div className='min-h-screen p-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='md:col-span-1'>
          <Sidebar step={step} go={go}/>
        </div>
        <div className='md:col-span-3'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <Routes>
              <Route path='/' element={<StepBasics setStep={setStep} step={step} setErrors={setErrors} errors={errors}/>}/>
              <Route path='step1' element={<StepBasics setStep={setStep} step={step} setErrors={setErrors} errors={errors}/>}/>
              <Route path='step2' element={<StepRewards setStep={setStep} step={step} setErrors={setErrors} errors={errors}/>}/>
              <Route path='step3' element={<StepBacker setStep={setStep} step={step} setErrors={setErrors} errors={errors}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
