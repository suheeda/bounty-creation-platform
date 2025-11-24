import React, { createContext, useContext, useState } from 'react'

const BountyContext = createContext(null)

export const useBounty = () => useContext(BountyContext)

export function BountyProvider({ children }){
  const [data, setData] = useState({
    title: '',
    description: '',
    projectTitle: '',
    type: 'Development',
    dominant_core: 'Social',
    mode: 'digital',
    location: '',
    reward: { currency: 'USD', amount: '', winners: 1 },
    timeline: { expiration_date: '', estimated_completion: { days: 0, hours: 0, minutes: 0 } },
    hasImpactCertificate: false,
    impactBriefMessage: '',
    sdgs: [],
    has_backer: false,
    backer: { name:'', logo:'', message:'' },
    terms_accepted: false
  })

  const update = (patch) => setData(prev => ({ ...prev, ...patch }))

  return (
    <BountyContext.Provider value={{ data, update, setData }}>
      {children}
    </BountyContext.Provider>
  )
}
