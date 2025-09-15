import { useState } from 'react';
import { useCourseStore } from '../store/courseStore';

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [formData, setFormData] = useState({
    nameTH: '',
    nameEN: '',
    credits: 3,
    instructor: '',
    grade: 'A'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse(formData);
    setFormData({
      nameTH: '',
      nameEN: '',
      credits: 3,
      instructor: '',
      grade: 'A'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 mb-8 p-8 bg-white/10 rounded-xl backdrop-blur-sm border-2 border-maejo-gold shadow-2xl">
      <div className="space-y-4">
        <label className="block text-2xl font-bold text-maejo-gold">ชื่อวิชา (ไทย)</label>
        <input
          type="text"
          placeholder="กรุณากรอกชื่อวิชาภาษาไทย"
          value={formData.nameTH}
          onChange={(e) => setFormData({...formData, nameTH: e.target.value})}
          className="border-2 border-maejo-gold p-6 w-full text-2xl rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-4 focus:ring-maejo-light-gold focus:border-transparent"
        />
      </div>
      
      <div className="space-y-4">
        <label className="block text-2xl font-bold text-maejo-gold">Course Name (English)</label>
        <input
          type="text"
          placeholder="Enter course name in English"
          value={formData.nameEN}
          onChange={(e) => setFormData({...formData, nameEN: e.target.value})}
          className="border-2 border-maejo-gold p-6 w-full text-2xl rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-4 focus:ring-maejo-light-gold focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block text-2xl font-bold text-maejo-gold">Credits</label>
          <input
            type="number"
            placeholder="Credits"
            value={formData.credits}
            onChange={(e) => setFormData({...formData, credits: Number(e.target.value)})}
            className="border-2 border-maejo-gold p-6 w-full text-2xl rounded-xl bg-white/20 text-white focus:ring-4 focus:ring-maejo-light-gold focus:border-transparent"
          />
        </div>
        
        <div className="space-y-4">
          <label className="block text-2xl font-bold text-maejo-gold">Grade</label>
          <select
            value={formData.grade}
            onChange={(e) => setFormData({...formData, grade: e.target.value})}
            className="border-2 border-maejo-gold p-6 w-full text-2xl rounded-xl bg-white/20 text-white focus:ring-4 focus:ring-maejo-light-gold focus:border-transparent"
          >
            {['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'].map(grade => (
              <option key={grade} value={grade} className="bg-gray-800 text-2xl">{grade}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-2xl font-bold text-maejo-gold">Instructor</label>
        <input
          type="text"
          placeholder="Enter instructor name"
          value={formData.instructor}
          onChange={(e) => setFormData({...formData, instructor: e.target.value})}
          className="border-2 border-maejo-gold p-6 w-full text-2xl rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-4 focus:ring-maejo-light-gold focus:border-transparent"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-maejo-gold hover:bg-maejo-light-gold text-maejo-green text-3xl font-bold py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl mt-8 border-2 border-white/20 hover:scale-105"
      >
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
