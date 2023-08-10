import placeholder from '../assets/detective-placeholder.png'

function DetectiveListCard({ detectiveObj }) {

  return (
    <div className="detective-card">
      <img src={detectiveObj.img_url || placeholder} alt={detectiveObj.name} />
      <h3>{ detectiveObj.name }</h3>
      <p>{ detectiveObj.bad_habits }</p>
    </div>
  )

}

export default DetectiveListCard
