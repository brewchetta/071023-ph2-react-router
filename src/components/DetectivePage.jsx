import { useState, useEffect } from 'react'
import DetectiveListCard from './DetectiveListCard'

function DetectivePage() {

  const [detectiveObj, setDetectiveObj] = useState({})

  useEffect(() => {
    fetch('http://localhost:4000/detectives/1')
    .then(res => res.json())
    .then(detectiveObj => setDetectiveObj(detectiveObj))
  }, [])

  return (
    <div>
      <h2>{detectiveObj.name}</h2>
      <p>Ideally we'd put more here but for now I'm being lazy and just showing the card</p>
      <DetectiveListCard detectiveObj={detectiveObj} />
    </div>
  )
}

export default DetectivePage
