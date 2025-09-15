import { useCourseStore, type Course } from '../Store/CourseStore';

const CourseList = () => {
  const { courses, dropCourse, getGPA } = useCourseStore();
  
  return (
    <div className="space-y-4">
      <div className="text-right">
        <span className="font-bold">GPA: {getGPA()}</span>
      </div>
      {courses.map((course: Course) => (
        <div key={course.id} className="border p-2 flex justify-between items-center">
          <div>
            <div>{course.nameTH}</div>
            <div className="text-sm text-gray-600">{course.nameEN}</div>
            <div className="text-sm">
              Credits: {course.credits} | Grade: {course.grade}
            </div>
          </div>
          <button
            onClick={() => dropCourse(course.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Drop
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
