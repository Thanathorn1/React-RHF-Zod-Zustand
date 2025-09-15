import { useForm } from 'react-hook-form';
import { useCourseStore, type Course } from '../Store/CourseStore';

type CourseFormData = Omit<Course, 'id'>;

const CourseForm = () => {
  const { register, handleSubmit, reset } = useForm<CourseFormData>();
  const addCourse = useCourseStore(state => state.addCourse);

  const onSubmit = (data: CourseFormData) => {
    addCourse(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Course Code</label>
          <input
            {...register('code')}
            type="text"
            className="w-full p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Thai Name</label>
          <input
            {...register('nameTH')}
            type="text"
            className="w-full p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">English Name</label>
          <input
            {...register('nameEN')}
            type="text"
            className="w-full p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Credits</label>
          <input
            {...register('credits', { valueAsNumber: true })}
            type="number"
            className="w-full p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Instructor</label>
          <input
            {...register('instructor')}
            type="text"
            className="w-full p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Grade</label>
          <select {...register('grade')} className="w-full p-2 rounded">
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </div>
      </div>

      <button type="submit" className="maejo-button w-full">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
