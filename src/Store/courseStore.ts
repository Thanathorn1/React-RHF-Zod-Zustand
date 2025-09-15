import { create } from 'zustand';

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  grade?: string;
}

interface CourseStore {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => void;
  dropCourse: (id: string) => void;
  restoreCourse: (id: string) => void;
  updateGrade: (id: string, grade: string) => void;
  calculateGPA: () => number;
}

const gradePoints: Record<string, number> = {
  A: 4.0,
  'B+': 3.5,
  B: 3.0,
  'C+': 2.5,
  C: 2.0,
  'D+': 1.5,
  D: 1.0,
  F: 0,
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  droppedCourses: [],

  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { ...course, id: Math.random().toString() }],
    })),

  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        droppedCourses: [...state.droppedCourses, course],
      };
    }),

  restoreCourse: (id) =>
    set((state) => {
      const course = state.droppedCourses.find((c) => c.id === id);
      if (!course) return state;
      return {
        droppedCourses: state.droppedCourses.filter((c) => c.id !== id),
        courses: [...state.courses, course],
      };
    }),

  updateGrade: (id, grade) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id ? { ...course, grade } : course
      ),
    })),

  calculateGPA: () => {
    const { courses } = get();
    const totalPoints = courses.reduce((acc, course) => {
      if (!course.grade) return acc;
      return acc + gradePoints[course.grade] * course.credits;
    }, 0);

    const totalCredits = courses.reduce((acc, course) =>
      course.grade ? acc + course.credits : acc, 0);

    return totalCredits > 0 ? Number((totalPoints / totalCredits).toFixed(2)) : 0;
  },
}));
