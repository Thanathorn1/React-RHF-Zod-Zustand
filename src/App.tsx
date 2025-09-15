import { useState } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseDrop from './components/CourseDrop';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'todo' | 'course'>('todo');

  return (
    <div className="maejo-container">
      <header className="maejo-header">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png" 
              alt="Maejo University Logo" 
              style={{ height: '200px', width: '200px' }}
            />
            <div className="flex flex-col items-start">
              <h1 className="text-xl md:text-3xl font-bold text-white">
                Maejo University
              </h1>
              <p className="text-sm md:text-base text-maejo-light-gold">
                Management System
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('todo')} 
            className={`maejo-button ${activeTab === 'todo' ? 'active' : ''}`}
          >
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-tasks"></i>
              Todo List
            </span>
          </button>
          <button 
            onClick={() => setActiveTab('course')}
            className={`maejo-button ${activeTab === 'course' ? 'active' : ''}`}
          >
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-graduation-cap"></i>
              Course Registration
            </span>
          </button>
        </div>

        {activeTab === 'todo' ? (
          <div className="maejo-card">
            <h2 className="text-2xl font-bold mb-6 text-center text-maejo-gold">
              Task Management System
            </h2>
            <TodoInput />
            <TodoList />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="maejo-card">
              <h2 className="text-2xl font-bold mb-6 text-center text-maejo-gold">
                Course Registration
              </h2>
              <CourseForm />
              <CourseList />
            </div>
            <div className="maejo-card">
              <h2 className="text-2xl font-bold mb-6 text-center text-maejo-gold">
                Dropped Courses
              </h2>
              <CourseDrop />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
