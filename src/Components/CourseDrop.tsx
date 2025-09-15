import { useCourseStore } from '../Store/CourseStore.ts';

const CourseDrop = () => {
  const droppedCourses = useCourseStore((state) => state.droppedCourses);
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dropped Courses</h2>
      <div className="space-y-2">
        {droppedCourses.map((course) => (
          <div key={course.id} className="border p-2">
            <div>{course.nameTH}</div>
            <div className="text-sm text-gray-600">{course.nameEN}</div>
            <div className="text-sm">
              Credits: {course.credits} | Grade: {course.grade}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDrop;
