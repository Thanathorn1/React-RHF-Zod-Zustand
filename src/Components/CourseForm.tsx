import { useState } from 'react';
import { useCourseStore } from '../Store/CourseStore.ts';

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [formData, setFormData] = useState({
    code: '',
    nameTH: '',
    nameEN: '',
    credits: 3,
    instructor: '',
    grade: 'A'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({
      code: formData.code,
      nameTH: formData.nameTH,
      nameEN: formData.nameEN,
      credits: Number(formData.credits),
      instructor: formData.instructor,
      grade: formData.grade
    });
    setFormData({
      code: '',
      nameTH: '',
      nameEN: '',
      credits: 3,
      instructor: '',
      grade: 'A'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mb-6 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
      <div className="space-y-2">
        <label className="block text-lg font-medium text-white">รหัสวิชา</label>
        <input
          type="text"
          placeholder="กรุณากรอกรหัสวิชา"
          value={formData.code}
          onChange={(e) => setFormData({...formData, code: e.target.value})}
          className="border p-4 w-full text-lg rounded-lg bg-white/20 text-white placeholder-gray-300"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-lg font-medium text-white">ชื่อวิชา (ไทย)</label>
        <input
          type="text"
          placeholder="กรุณากรอกชื่อวิชาภาษาไทย"
          value={formData.nameTH}
          onChange={(e) => setFormData({...formData, nameTH: e.target.value})}
          className="border p-4 w-full text-lg rounded-lg bg-white/20 text-white placeholder-gray-300"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-lg font-medium text-white">Course Name (English)</label>
        <input
          type="text"
          placeholder="Enter course name in English"
          value={formData.nameEN}
          onChange={(e) => setFormData({...formData, nameEN: e.target.value})}
          className="border p-4 w-full text-lg rounded-lg bg-white/20 text-white placeholder-gray-300"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Credits</label>
          <input
            type="number"
            placeholder="Credits"
            value={formData.credits}
            onChange={(e) => setFormData({...formData, credits: Number(e.target.value)})}
            className="border p-4 w-full text-lg rounded-lg bg-white/20 text-white"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-lg font-medium text-white">Grade</label>
          <select
            value={formData.grade}
            onChange={(e) => setFormData({...formData, grade: e.target.value})}
            className="border p-4 w-full text-lg rounded-lg bg-white/20 text-white"
          >
            {['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'].map(grade => (
              <option key={grade} value={grade} className="bg-gray-800">{grade}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-white">Instructor</label>
        <input
          type="text"
          placeholder="Enter instructor name"
          value={formData.instructor}
          onChange={(e) => setFormData({...formData, instructor: e.target.value})}
          className="border p-4 w-full text-lg rounded-lg bg-white/20 text-white placeholder-gray-300"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-maejo-gold hover:bg-maejo-light-gold text-maejo-green text-xl font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg mt-6"
      >
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
