import { useCourseStore, type Course } from '../Store/CourseStore';

const CourseDrop = () => {
  const { droppedCourses, restoreCourse } = useCourseStore();

  return (
    <div className="space-y-4">
      {droppedCourses.map((course: Course) => (
        <div key={course.id} className="flex justify-between items-center p-4 bg-red-50 rounded">
          <div>
            <div>{course.nameTH}</div>
            <div className="text-sm text-gray-600">{course.nameEN}</div>
          </div>
          <button onClick={() => restoreCourse(course.id)} className="text-green-600">
            <i className="fas fa-undo"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseDrop;
