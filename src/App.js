import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

function App() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;