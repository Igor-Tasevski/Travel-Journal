import { useState } from 'react'
import globe from './assets/globe.png'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Entry from './Components/Entry.jsx'
import data from './data.js'

function App() {

  const entryElements = data.map((entry) => {

    return (

      <Entry
        key = {entry.id}
       // img={entry.img}
        //title={entry.title}
        //country={entry.country}
       // googleMapsLink = {entry.googleMapsLink}
        //dates = {entry.dates}
        //text = {entry.text}
        entry = {entry}
      />
    )


  })



  return (
    <>


      <Header />
    {entryElements}


    </>
  )
}

export default App
