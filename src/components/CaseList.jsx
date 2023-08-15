function CaseList() {

  // replace this with data from the loader //
  const cases = []

  const mappedCards = cases.map(case => (
    <div className="detective-card">
      <h3>{case.name}</h3>
      <p>{case.clues}</p>
      <Link to={ `/cases/${case.id}` }>Go To Case</Link>
    </div>
  ))

  return (
    <div className="detective-list">
      { mappedCards }
    </div>
  )
}

export default CaseList
