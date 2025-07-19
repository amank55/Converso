import CompanionCard from '@/components/CompanionCard'
import RecentSessions from '@/components/CompanionList'
import Cta from '@/components/CTA'
import React from 'react'

const page = () => {
  return (
   <div>
    <h1 className='text-2xl  px-10'>Popular Companions</h1>
     
     <section className='home-section px-8 gap-8'>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Mathematics"
          duration={30}
          color="#e5d0ff"
        />

       <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>
     </section>


     <section className='home-section'>
       <RecentSessions />
       <Cta />             
   
     </section>
    
   </div>
  )
}

export default page