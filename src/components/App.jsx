import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {

  return (
    <div className="App">

      <Header />

      {/* the Outlet will show any sub-routes like the about page, etc */}
      <Outlet />


    </div>
  );
}

export default App;
