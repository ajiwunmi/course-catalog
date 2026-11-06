import {Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="navbar__logo"><span>TJ</span> Courses Catalog</Link>
        <div className="navbar__links">
            <NavLink to="/" end className="navbar__link">All Courses</NavLink>
            <NavLink to="/category/Beginner" className="navbar__link">Beginner</NavLink>
            <NavLink to="/category/Intermediate" className="navbar__link">Intermediate</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
