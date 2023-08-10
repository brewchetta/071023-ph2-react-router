import { useState, useEffect } from 'react'
import DetectiveListCard from "./DetectiveListCard"

function DetectiveList() {

  const [detectives, setDetectives] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/detectives')
    .then( res => res.json() )
    .then( data => setDetectives(data) )
  }, [])

  const mappedCards = detectives.map(detectiveObj => (
    <DetectiveListCard key={detectiveObj.id} detectiveObj={detectiveObj} />
  ))

  return (
    <div className="detective-list">
      { mappedCards }
    </div>
  )
}

export default DetectiveList
