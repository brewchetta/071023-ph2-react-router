import { useNavigate } from 'react-router-dom'
import placeholder from '../assets/detective-placeholder.png'

function DetectiveListCard({ detectiveObj }) {

  // the navigate can send us to another route pretty easily
  const navigate = useNavigate()

  return (
    <div className="detective-card" onClick={ () => navigate(`/registry/${detectiveObj.id}`) }>
      {/* the onClick will trigger our navigate function */}
      <img src={detectiveObj.img_url || placeholder} alt={detectiveObj.name} />
      <h3>{ detectiveObj.name }</h3>
      <p>{ detectiveObj.bad_habits }</p>
    </div>
  )

}

export default DetectiveListCard
