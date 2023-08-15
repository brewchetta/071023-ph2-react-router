import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="main-header">
      <nav>
        {/* Link is a lot like <a> except it's more react-router specific */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/registry">Detective Registry</Link>
        <Link to="/form">Register Detective</Link>
        <Link to="/cases">Cases</Link>
      </nav>

      <h1>caseBook</h1>

      <h2>Our Brightest Minds Are On The Case</h2>

    </header>
  )
}

export default Header
