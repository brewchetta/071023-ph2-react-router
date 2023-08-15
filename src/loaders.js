export async function getDetectivesLoader() {
    const response = await fetch('http://localhost:4000/detectives')
    const detectives = await response.json()
    return { detectives }
}

export async function getCasesLoader() {
    const response = await fetch('http://localhost:4000/cases')
    const casesArray = await response.json()
    return { casesArray }
}

export async function singleDetectiveLoader({ params }) {
    const response = await fetch(`http://localhost:4000/detectives/${params.id}`)
    const detectiveObj = await response.json()
    return { detectiveObj }
}

export async function getClues({ params }) {
    const response = await fetch(`http://localhost:4000/cases/${params.id}`)
    const caseObj = await response.json()
    return { caseObj }
}