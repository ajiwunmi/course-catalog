  import { useParams, useNavigate, Link } from "react-router-dom";                                                                 
    import { courses } from "../data/courses";                                                                                       
                                                                                                                                     
    export default function CourseDetail() {                                                                                         
      const { slug } = useParams();                                                                                                  
      const navigate = useNavigate();                                                                                                
      const course = courses.find((c) => c.slug === slug);                                                                           
                                                                                                                                     
      if (!course) {                                                                                                                 
        return (                                                                                                                     
          <div className="not-found">     
            <p className="not-found__cold">404</p>                                                                                                                    
            <h2 className="not-found__title">Course not found</h2>                                                                                                
            <p className="not-found__text">We couldn't find a course called "{slug}".</p>                                                                        
            <Link to="/" className="not-found__btn">Back to all courses</Link>                                                                                   
          </div>                                                                                                                        
        );                                                                                                                           
      }                                                                                                                              
                                                                                                                                     
      return (                                                                                                                       
        <article className="detail">                                                                                                                    
          <button type="button" className="back-btn" onClick={() => navigate(-1)}>← Back</button>                                                                       
          <div className="detail__eyebrow">
              <span  className={`badge badge--${course.category.toLowerCase()}`}>{course.category}</span>                                                                           
          </div>
          <h1 className="detail__title">{course.title}</h1>                                                                                                    
          <p className="detail__duration">{course.duration}</p>                                                                       
          <p className="detail__desc">{course.description}</p>                                                                                                
          <h2 className="topics__title">What you'll learn</h2>                                                                                                 
          <ul  className="topics__list">                                                                                                                       
            {course.topics.map((t) => <li className="topics__item"  key={t}>{t}</li>)}                                                                         
          </ul>                                                                                                                      
        </article>                                                                                                                   
      );                                                                                                                             
    }   
