
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <header>
      <h1>Hongbo</h1>
      <Nav />
    </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
