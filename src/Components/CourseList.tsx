import { useCourseStore } from '../Store/CourseStore.ts';

const CourseList = () => {
  const { courses, dropCourse, getGPA } = useCourseStore();
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Enrolled Courses (GPA: {getGPA().toFixed(2)})</h2>
      <div className="space-y-2">
        {courses.map((course) => (
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
    </div>
  );
};

export default CourseList;
