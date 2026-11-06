import {Link} from 'react-router-dom'

const CourseCard = ({ course }) => {
  
      return (
        <Link to={`/courses/${course.slug}`} className="card">
          <div className="card__top">
            <span className={`badge badge--${course.category.toLowerCase()}`}>
                {course.category}
            </span>
          </div>
          <h2 className="card__title">{course.title}</h2>
          <p className="card__meta">{course.duration}</p>
          <p className="card__arrow">View course</p>
        </Link>
      ); 
    }         


export default CourseCard
