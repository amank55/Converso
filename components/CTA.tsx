'use client'

import Link from "next/link";
import Image from "next/image";

const Cta = () => {
    return (
      <div className="flex flex-col justify-between h-full text-white">
        <div>
          <div className="text-purple-400 font-semibold text-sm mb-2">Start learning your way.</div>
          <h2 className="text-3xl font-bold mb-3">Build and Personalize Learning Companion</h2>
          <p className="text-white text-sm mb-5">
            Pick a name, subject, voice, & personality — and start learning
            through voice conversations that feel natural and fun.
          </p>
  
          <Image
            src="/images/cta.svg"
            alt="cta"
            width={362}
            height={232}
            className="mb-4"
          />
        </div>
  
        <Link href="/companions/new">
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
            <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
            <span className="text-sm">Build a New Companion</span>
          </button>
        </Link>
      </div>
    )
  }
 export default Cta  