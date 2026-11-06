import { courses } from "../data/courses"; 
import CourseGrid from "../components/CourseGrid";

const Home = () => {
   return ( 
        <>
        <section  className="hero">
            <p className="hero__eyebrow">Course Catalog</p>
            <h1 className="hero__title">Learn to build for the web</h1>
            <p className="hero__subtitle">Pick a course below and start learning at your own pace.</p>
          </section>

          <section className="section">
              <div className="section__header">
                  <h2 className="section__title">All Courses <span className="section__count">{courses.length}</span></h2>
              </div>
              <CourseGrid courses={courses} /> 
          </section>
        </>
      );
};

export default Home;
