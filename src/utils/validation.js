export function validateStep(step, data){
  const errors = {}
  if(step === 1){
    if(!data.title || data.title.trim()==='') errors.title = 'Title is required'
    else if(data.title.length > 40) errors.title = 'Max 40 characters'
    if(!data.description || data.description.trim()==='') errors.description = 'Description is required'
    if(!['Content','Design','Development','Marketing','Other'].includes(data.type)) errors.type = 'Select type'
    if(data.mode === 'physical' && (!data.location || data.location.trim()==='')) errors.location = 'Location required for physical mode'
  }
  if(step === 2){
    if(!data.reward || Number(data.reward.amount) <= 0) errors.amount = 'Amount must be greater than 0'
    if(!data.timeline || !data.timeline.expiration_date) errors.expiration_date = 'Expiration date required'
    if(data.hasImpactCertificate && (!data.impactBriefMessage || data.impactBriefMessage.trim()==='')) errors.impact = 'Impact brief is required'
  }
  if(step === 3){
    if(!data.terms_accepted) errors.terms_accepted = 'You must accept terms'
    if(data.has_backer){
      if(!data.backer.name || data.backer.name.trim()==='') errors.backer_name = 'Backer name required'
      if(!data.backer.logo || data.backer.logo.trim()==='') errors.backer_logo = 'Backer logo required'
    }
  }
  return errors
}
