import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home    from './pages/Home'
import Resume  from './pages/Resume'
import Blog    from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/resume"  element={<Resume />} />
        <Route path="/blog"    element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
