import CourseCard from './CourseCard'

const CourseGrid = ({ courses }) => {
   return (
        <div className="grid">
          {courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      );
}

export default CourseGrid
