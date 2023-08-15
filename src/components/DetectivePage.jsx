import DetectiveListCard from './DetectiveListCard'
import { useLoaderData } from 'react-router-dom'

function DetectivePage() {

  // we use the loader data to get the individual detective
  const { detectiveObj } = useLoaderData()

  return (
    <div>
      <h2>{detectiveObj.name}</h2>
      <DetectiveListCard detectiveObj={detectiveObj} />
    </div>
  )
}

export default DetectivePage
