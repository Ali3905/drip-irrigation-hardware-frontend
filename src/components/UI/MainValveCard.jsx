import { Switch } from '@mui/material'
import React from 'react'

const MainValveCard = () => {
  return (
    <div className='flex justify-between items-center px-[20px] h-[90px] border border-solid border-[color:var(--brown-color)] rounded-[10px] mt-[20px]'>
        <span className='flex flex-col gap-[10px]'>
            <p className='big_text'>Main Motor</p>
            <p className='medium_text text-[color:var(--brown-color)]'>Turn the main motor on or off</p>
        </span>
        <Switch />
    </div>
  )
}

export default MainValveCard