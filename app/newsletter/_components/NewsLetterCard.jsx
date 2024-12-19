import React from 'react'
import newsLetter_img from "@/assets/newsLetter_img.svg"
import Image from 'next/image'

export default function NewsLetterCard() {
  return (
    <div className='border p-6 flex flex-col gap-4 items-start'>
        <button className='bg-[#BB0024] px-4 py-2 rounded-md  text-white'>5X PER WEEK</button>
        <Image src={newsLetter_img} alt='News letter' className='w-full h-auto' />
        <h2 className='font-bold'>A roundup of ARTICLE 39’s best stories in your inbox.</h2>
    </div>
  )
}
