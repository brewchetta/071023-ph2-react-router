function CasePage() {

  // replace the caseObj with data from the loader //
  const caseObj = {}

  return (
    <div>
      <h2>{caseObj.name}</h2>
      <p>{caseObj.clues}</p>
    </div>
  )
}

export default CasePage
