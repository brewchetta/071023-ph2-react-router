import { useLoaderData } from 'react-router-dom'

function CasePage() {

  const { caseObj } = useLoaderData()

  return (
    <div>
      <h2>{caseObj.name}</h2>
      <p>{caseObj.clues}</p>
    </div>
  )
}

export default CasePage
