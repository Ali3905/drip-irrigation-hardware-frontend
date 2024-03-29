import React from 'react'

const Tags = ({ tags }) => {
  return (
    <div className='flex gap-[12px]'>
        {
            tags?.map((tag, i)=>{
                return <p className='bg-[color:var(--light-brown-color)] small_text px-[16px] py-[8px] rounded-[20px]' key={i} >{tag}</p>
            })
        }
    </div>
  )
}

export default Tags