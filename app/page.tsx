import CompanionCard from '@/components/CompanionCard'
import RecentSessions from '@/components/CompanionList'
import Cta from '@/components/CTA'
import React from 'react'

const page = () => {
  return (
    <div className="px-10 pb-20">
      {/* Header */}
      <h1 className="text-2xl underline mb-8">Popular Companions</h1>

      {/* Companion Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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

      {/* Sessions + CTA side by side */}
      <section className="flex flex-col md:flex-row gap-8">
        {/* Left: Recent Sessions (styled like original) */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <RecentSessions />
        </div>

        {/* Right: CTA Card */}
        <div className="flex-1">
          <div className="h-full bg-black p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <Cta />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
