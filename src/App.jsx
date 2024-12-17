import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './styles/App.css'
import Socmedia from './components/Socmedia'
import Header from './components/Header'
import Services from './pages/Services'
import Articles from './pages/Articles'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

    return (<>
        <div style={{backgroundImage: 'linear-gradient(#11005b, #070026)', height: '100%', width: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 0}}/>
        <Socmedia />

        <Router>
            <div style={{zIndex: 9}} className='container'>
                <Header />
                <Routes>
                    <Route path="/articles" element={<Articles />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/" element={<Services />}/>
                </Routes>
            </div>
        </Router>
    </>)
}

export default App
