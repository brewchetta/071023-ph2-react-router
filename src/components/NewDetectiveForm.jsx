import { useState } from 'react'

function NewDetectiveForm() {

  const [name, setName] = useState('')
  const [habits, setHabits] = useState('')

  const handleChangeName = e => setName(e.target.value)
  const handleChangeHabits = e => setHabits(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()

    const OPTIONS = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, bad_habits: habits })
    }

    fetch('http://localhost:4000/detectives', OPTIONS)
    .then( res => res.json() )
    .then( newDetective => console.log(newDetective) )
  }

  return (

    <div className="new-detective-page">

      <form onSubmit={handleSubmit} className="detective-form">

        <h2>Register Your New Investigator</h2>

        <label htmlFor="name">Investigator Name:</label>
        <input type="text"
          name="name"
          onChange={handleChangeName}
          value={name}
          placeholder='write the name here'
        />

        <br/>

        <label htmlFor="habits">Investigator Bad Habits:</label>
        <input type="text"
          name="habits"
          onChange={handleChangeHabits}
          value={habits}
          placeholder="bad habits here"
        />

        <br/>

        <input
          type="submit"
          value="Register Private Eye"
        />

      </form>

      <img style={{filter: "invert(1)"}} src="https://cdn1.iconfinder.com/data/icons/the-eyes-have-it/100/Eye_03-512.png" alt={"private eyes"} />

    </div>

  )
}

export default NewDetectiveForm
