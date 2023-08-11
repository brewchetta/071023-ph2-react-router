import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import DetectiveListCard from './DetectiveListCard'

function DetectivePage() {

  // we use the loader data to get the individual detective
  const { detectiveObj } = useLoaderData()

  return (
    <div>
      <h2>{detectiveObj.name}</h2>
      <p>Ideally we'd put more here but for now I'm being lazy and just showing the card</p>
      <DetectiveListCard detectiveObj={detectiveObj} />
    </div>
  )
}

export default DetectivePage
