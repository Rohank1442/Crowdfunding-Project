import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className='flex flex-col items-center w-[150px]'>
        <p className='font-epilogue font-bold text-[30px]
        text-white p-3 bg-[#1c1c24] rounded-t-[10px] 
        w-full text-center truncate'>{value}</p>
        <p className='font-epilogue font-normal text-[20px] 
            text-white p-3 bg-[#28282e] rounded-b-[10px]
            w-full text-center
        '>{title}</p>
    </div>
  )
}

export default CountBox