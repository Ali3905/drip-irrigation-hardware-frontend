import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-[40px] py-[20px] border-b border-solid'>
        <img src='/logo.png' alt='logo' />
        <ul className='flex items-center gap-[36px] small_text'>
            <li className='p-[10px]'>Dashboard</li>
            <li className='p-[10px]'>Sensors</li>
            <li className='p-[10px]'>Valves</li>
            <li className='p-[10px]'>History</li>
            <li className='p-[10px]'>Settings</li>
            <li className='rounded-[50px] bg-[color:var(--green-color)] px-[20px] py-[10px] text-[color:var(--white-color)] '>New</li>
            <img src="/profile.png" alt="profile" className='w-[40px] h-[40px]' />
        </ul>
    </nav>
  )
}

export default Navbar