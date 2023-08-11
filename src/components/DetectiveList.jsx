import DetectiveListCard from "./DetectiveListCard"
import { useLoaderData } from 'react-router-dom'

function DetectiveList() {

  // we are able to get our detectives thanks to our loader
  const { detectives } = useLoaderData()

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
