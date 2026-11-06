import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseGrid from "../components/CourseGrid";
  
  const Category = () => {
      const { category } = useParams();
      const filtered = courses.filter((c) =>  c.category.toLowerCase() === category.toLowerCase());
      const title = filtered[0]?.category ?? category;    
        
      return (
        <>
        <section  className="hero">
            <p className="hero__eyebrow">Course Catalog</p>
            <h1 className="hero__title">{title} Courses</h1>
            <p className="hero__subtitle">{filtered.length} {filtered.length === 1 ? 'course' : 'courses'} found.</p>
        </section>
         <section className="section">
          {filtered.length > 0 ?   
             <CourseGrid courses={filtered} />  : <p className="empty"> No courses found in "{category}".</p>}
          </section>
        </>
      );
    }                   

export default Category;
