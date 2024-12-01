import React from 'react'

const CardSkeleton = () => {
  return (
    <div data-testid="card-skeleton" className='animate-pulse border flex flex-col gap-3'>
      <div className='w-full h-[200px] bg-gray-300 rounded-md'></div>
      <div className='flex flex-col gap-5'>
        <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
        <div className='w-full h-4 bg-gray-300 rounded-md'></div>
        <div className='w-3/5 h-4 bg-gray-300 rounded-md'></div>
        <div className='w-4/5 h-4 bg-gray-300 rounded-md'></div>
        <div className='flex gap-2'>
          <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
          <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
          <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
          <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton