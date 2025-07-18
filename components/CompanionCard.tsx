import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
  }
  
const CompanionCard = ({
    id,
    name,
    topic,
    subject,
    duration,
    color,
}:CompanionCardProps) => {
  return (
    <article
      className="rounded-xl border border-gray-300 shadow-md p-6 flex flex-col gap-2 w-full max-w-[420px] min-h-[220px]"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          {subject}
        </div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark-filled.svg"
            alt="bookmark"
            width={16}
            height={16}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold leading-tight mb-1">{name}</h2>
      <p className="text-sm text-gray-700 mb-2">{topic}</p>
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={14}
          height={14}
        />
        <p className="text-sm text-gray-800">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full mt-auto">
        <button className="w-full bg-black text-white py-2 rounded-md font-semibold text-base">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
