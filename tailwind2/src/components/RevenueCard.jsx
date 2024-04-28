import React from 'react'

function RevenueCard({
    title,
    orderCount,
    amount
}) {
  return (
    <div className='bg-white rounded shadow-md p-2'>
        <div>
            {title}
            ?
        </div>
        <div className=' flex justify-between '>
            <div className=' font-bold text-2xl'>
              ₹{amount}
            </div>
            <div className='flex underline text-blue-700 cursor-pointer'>
                {orderCount} Order(s)
                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default RevenueCard