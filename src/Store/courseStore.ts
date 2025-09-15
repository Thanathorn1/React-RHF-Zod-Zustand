import { create } from 'zustand';

interface Course {
  id: string;
  nameTH: string;
  nameEN: string;
  credits: number;
  instructor: string;
  grade: string;
}

interface CourseState {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Omit<Course, "id">) => void;
  dropCourse: (courseId: string) => void;
  getGPA: () => number;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { ...course, id: Date.now().toString() }],
    })),
  dropCourse: (courseId) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === courseId);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== courseId),
        droppedCourses: [...state.droppedCourses, course],
      };
    }),
  getGPA: () => {
    const { courses } = get();
    const gradePoints: { [key: string]: number } = {
      'A': 4, 'B+': 3.5, 'B': 3, 'C+': 2.5, 
      'C': 2, 'D+': 1.5, 'D': 1, 'F': 0
    };
    
    const totalPoints = courses.reduce((acc, course) => 
      acc + (gradePoints[course.grade] || 0) * course.credits, 0);
    const totalCredits = courses.reduce((acc, course) => 
      acc + course.credits, 0);
    
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));
