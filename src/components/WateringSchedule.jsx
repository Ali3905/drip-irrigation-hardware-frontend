import React from 'react'

const WateringSchedule = ({ waterings }) => {
  return (
    <div className='mt-[50px]'>
        <h2 className='big_text'>Watering Schedule</h2>
        {
            waterings.map((watering)=>{
                return <div className='py-4 flex flex-col gap-2'>
                    <p className='medium_text'>{watering.farm}</p>
                    <p className='text-[color:var(--brown-color)] medium_text' >Every day at {watering.time}</p>
                </div>
            })
        }
    </div>
  )
}

export default WateringSchedule