export async function getDetectivesLoader() {
    const response = await fetch('http://localhost:4000/detectives')
    const detectives = await response.json()
    return { detectives }
}

export async function getDetectiveByIdLoader({ params }) {
    const response = await fetch(`http://localhost:4000/detectives/${params.id}`)

    // if the response is not ok throw an error in the form of the response
    if (!response.ok) {
        throw response
    }

    // otherwise parse and return the detectiveObj
    const detectiveObj = await response.json()
    return { detectiveObj }
}

// ASYNC
// AWAIT