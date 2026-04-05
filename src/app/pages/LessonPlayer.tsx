import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { courses } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { PlayCircle, CheckCircle, ChevronRight, ChevronLeft, Menu, X, Home } from 'lucide-react';
import { Progress } from '../components/ui/progress';

export function LessonPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completeLesson, getCourseProgress } = useLearning();
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [notes, setNotes] = useState('');

  const course = courses.find((c) => c.id === id);
  const courseProgress = getCourseProgress(id || '');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Course not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-lg text-white"
            style={{ backgroundColor: 'var(--learnflow-cta)' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentModule = course.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = courseProgress?.completedLessons.length || 0;
  const progress = (completedLessons / totalLessons) * 100;

  const handleCompleteLesson = () => {
    completeLesson(course.id, currentLesson.id);
    handleNextLesson();
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    } else {
      // Course completed
      navigate('/certificate/' + course.id);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(course.modules[currentModuleIndex - 1].lessons.length - 1);
    }
  };

  const isLessonCompleted = (lessonId: string) => {
    return courseProgress?.completedLessons.includes(lessonId) || false;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {showSidebar ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            to="/"
            className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            style={{ color: 'var(--learnflow-primary)' }}
            title="Go to Home"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <div>
            <h1 className="text-lg" style={{ color: 'var(--learnflow-primary)' }}>
              {course.title}
            </h1>
            <p className="text-sm text-gray-600">
              Module {currentModuleIndex + 1}: {currentModule.title}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Progress: {completedLessons}/{totalLessons} lessons
          </div>
          <div className="w-32">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        {showSidebar && (
          <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <h3 className="mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                Course Content
              </h3>
              <div className="space-y-2">
                {course.modules.map((module, moduleIdx) => (
                  <div key={module.id}>
                    <div className="px-3 py-2 rounded-lg" style={{ backgroundColor: '#f5f5f5' }}>
                      <p className="text-sm" style={{ color: 'var(--learnflow-secondary)' }}>
                        {module.title}
                      </p>
                    </div>
                    <div className="ml-4 mt-1 space-y-1">
                      {module.lessons.map((lesson, lessonIdx) => {
                        const isActive = moduleIdx === currentModuleIndex && lessonIdx === currentLessonIndex;
                        const isCompleted = isLessonCompleted(lesson.id);
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              setCurrentModuleIndex(moduleIdx);
                              setCurrentLessonIndex(lessonIdx);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between text-sm transition-colors ${
                              isActive ? 'text-white' : 'hover:bg-gray-50'
                            }`}
                            style={isActive ? { backgroundColor: 'var(--learnflow-primary)' } : {}}
                          >
                            <div className="flex items-center space-x-2">
                              {isCompleted ? (
                                <CheckCircle className="w-4 h-4" style={{ color: isActive ? 'white' : 'var(--learnflow-cta)' }} />
                              ) : (
                                <PlayCircle className="w-4 h-4 text-gray-400" />
                              )}
                              <span className="line-clamp-1">{lesson.title}</span>
                            </div>
                            <span className={isActive ? 'text-white' : 'text-gray-500'}>{lesson.duration}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-6 space-y-6">
            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center space-y-4">
                <PlayCircle className="w-24 h-24 text-white mx-auto opacity-80" />
                <p className="text-white text-xl">{currentLesson.title}</p>
                <p className="text-gray-300">Video Player ({currentLesson.duration})</p>
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
                {currentLesson.title}
              </h2>
              <p className="text-gray-600 mb-4">
                Lesson {currentModuleIndex + 1}.{currentLessonIndex + 1} • {currentLesson.duration}
              </p>
              <p className="text-gray-700">
                This lesson covers important concepts that will help you build a strong foundation.
                Take notes and practice along with the video for the best learning experience.
              </p>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                Your Notes
              </h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes while learning..."
                className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[var(--learnflow-cta)]"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePreviousLesson}
                disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
                className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous Lesson</span>
              </button>

              <button
                onClick={handleCompleteLesson}
                className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--learnflow-cta)' }}
              >
                <CheckCircle className="w-5 h-5" />
                <span>Complete & Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}