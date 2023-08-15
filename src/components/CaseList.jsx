function CaseList() {

  // replace this with data from the loader //
  const cases = []

  const mappedCards = cases.map(case => (
    <div className="detective-card">
      <h3>{case.name}</h3>
      <p>{case.clues}</p>
    </div>
  ))

  return (
    <div className="detective-list">
      { mappedCards }
    </div>
  )
}

export default CaseList
