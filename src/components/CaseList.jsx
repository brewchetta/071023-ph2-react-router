import { Link, useLoaderData } from 'react-router-dom'

function CaseList() {

  // replace this with data from the loader //
  const { casesArray } = useLoaderData()

  const mappedCards = casesArray.map(caseObj => (
    <div key={caseObj.id} className="detective-card">
      <h3>{caseObj.name}</h3>
      <p>{caseObj.clues}</p>
      <Link to={ `/cases/${caseObj.id}` }>Go To Case</Link>
    </div>
  ))

  return (
    <div className="detective-list">
      { mappedCards }
    </div>
  )
}

export default CaseList
