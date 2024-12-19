import NewsCard from '@/components/NewsCard'
import React from 'react'

export default function NewsCategory() {
  return (
    <div className='text-black'>
        <p>See All</p>

        <div className=" mt-6">
            <h1 className='uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8'>POLITICAL</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </div>
  )
}
