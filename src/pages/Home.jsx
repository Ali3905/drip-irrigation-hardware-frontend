import React from 'react'
import Tags from '../components/UI/Tags'
import WateringSchedule from '../components/WateringSchedule'
import Valves from '../components/Valves'
import MainValveCard from '../components/UI/MainValveCard'

const Home = () => {
    const waterings = [{
        farm : "Front Yard",
        time : "6:00 AM"
    }, {
        farm : "Back Yard",
        time : "6:00 AM"
    }, {
        farm : "Side Yard",
        time : "6:00 AM"
    },]

    const valves = [{
        name : "Front Yard",
        zone : "1",
        type : false,
        status : "Running",
    }, {
        name : "Back Yard",
        zone : "2",
        type : false,
        status : "Idle",
    }, {
        name : "Side Yard",
        zone : "3",
        type : false,
        status : "Running",
    }]

  return (
    <div className='max-w-[1300px] mx-auto flex flex-col'>
        <h1 className='extra_big_text py-[10px]'>Dashboard</h1>
        <Tags tags={["Summary", "Watering Schedule", "Valves"]} />
        <WateringSchedule waterings={waterings} />
        <Valves valves={valves} />
        <MainValveCard />
        <div className='h-[500px]'></div>
    </div>
  )
}

export default Home