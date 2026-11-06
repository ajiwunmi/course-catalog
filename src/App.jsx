import {Routes, Route} from  'react-router-dom'
import Home  from './pages/Home'
import Category  from './pages/Category'
import CourseDetail  from './pages/CourseDetail'
import NotFound  from './pages/NotFound'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar/>
    <main className="container">    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category/:category" element={<Category/>} />
            <Route path="/courses/:slug" element={<CourseDetail/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </main>
    </>
  )
}

export default App
