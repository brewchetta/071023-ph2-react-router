export async function getDetectivesLoader() {
    const response = await fetch('http://localhost:4000/detectives')
    const detectives = await response.json()
    return { detectives }
}
