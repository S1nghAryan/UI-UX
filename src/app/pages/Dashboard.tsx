import { useLearning } from '../context/LearningContext';
import { courses } from '../data/courses';
import { Link } from 'react-router';
import { BookOpen, Trophy, Flame, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Progress } from '../components/ui/progress';

export function Dashboard() {
  const { enrolledCourses, streak } = useLearning();

  const enrolledCoursesData = enrolledCourses.map((enrolled) => {
    const course = courses.find((c) => c.id === enrolled.courseId);
    return { ...enrolled, course };
  });

  const totalCoursesEnrolled = enrolledCourses.length;
  const coursesInProgress = enrolledCourses.filter((c) => c.progress > 0 && c.progress < 100).length;
  const coursesCompleted = enrolledCourses.filter((c) => c.progress === 100).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
            My Learning Dashboard
          </h1>
          <p className="text-gray-600">
            Track your progress and continue your learning journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8" style={{ color: 'var(--learnflow-cta)' }} />
            </div>
            <div className="text-3xl mb-1" style={{ color: 'var(--learnflow-primary)' }}>
              {totalCoursesEnrolled}
            </div>
            <p className="text-gray-600 text-sm">Total Courses</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8" style={{ color: 'var(--learnflow-accent)' }} />
            </div>
            <div className="text-3xl mb-1" style={{ color: 'var(--learnflow-primary)' }}>
              {coursesInProgress}
            </div>
            <p className="text-gray-600 text-sm">In Progress</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-3xl mb-1" style={{ color: 'var(--learnflow-primary)' }}>
              {coursesCompleted}
            </div>
            <p className="text-gray-600 text-sm">Completed</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-3xl mb-1" style={{ color: 'var(--learnflow-primary)' }}>
              {streak}
            </div>
            <p className="text-gray-600 text-sm">Day Streak 🔥</p>
          </div>
        </div>

        {enrolledCoursesData.length === 0 ? (
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
              No Courses Yet
            </h2>
            <p className="text-gray-600 mb-6">
              Start your learning journey by enrolling in a course
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--learnflow-cta)' }}
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <>
            {/* Continue Learning */}
            {coursesInProgress > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                  Continue Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enrolledCoursesData
                    .filter((enrolled) => enrolled.progress > 0 && enrolled.progress < 100)
                    .map((enrolled) => {
                      if (!enrolled.course) return null;
                      return (
                        <div
                          key={enrolled.courseId}
                          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div className="flex">
                            <img
                              src={enrolled.course.image}
                              alt={enrolled.course.title}
                              className="w-48 h-full object-cover"
                            />
                            <div className="flex-1 p-6">
                              <h3 className="text-xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
                                {enrolled.course.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-4">{enrolled.course.instructor}</p>
                              
                              <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-gray-600">Progress</span>
                                  <span className="text-sm" style={{ color: 'var(--learnflow-cta)' }}>
                                    {Math.round(enrolled.progress)}%
                                  </span>
                                </div>
                                <Progress value={enrolled.progress} className="h-2" />
                              </div>

                              <Link
                                to={`/learn/${enrolled.courseId}`}
                                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: 'var(--learnflow-cta)' }}
                              >
                                <span>Continue</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* All Enrolled Courses */}
            <div>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                All My Courses
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {enrolledCoursesData.map((enrolled) => {
                    if (!enrolled.course) return null;
                    const isCompleted = enrolled.progress === 100;
                    return (
                      <div key={enrolled.courseId} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1">
                            <img
                              src={enrolled.course.image}
                              alt={enrolled.course.title}
                              className="w-24 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="text-lg mb-1" style={{ color: 'var(--learnflow-primary)' }}>
                                {enrolled.course.title}
                              </h3>
                              <p className="text-sm text-gray-600">{enrolled.course.instructor}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6">
                            <div className="w-48">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Progress</span>
                                <span className="text-sm" style={{ color: isCompleted ? '#22c55e' : 'var(--learnflow-cta)' }}>
                                  {Math.round(enrolled.progress)}%
                                </span>
                              </div>
                              <Progress value={enrolled.progress} className="h-2" />
                            </div>

                            {isCompleted ? (
                              <Link
                                to={`/certificate/${enrolled.courseId}`}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>View Certificate</span>
                              </Link>
                            ) : (
                              <Link
                                to={`/learn/${enrolled.courseId}`}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: 'var(--learnflow-cta)' }}
                              >
                                <span>Continue</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h2 className="text-2xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                Recent Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coursesCompleted > 0 && (
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
                    <Trophy className="w-12 h-12 mb-3" />
                    <h3 className="text-xl mb-1">Course Champion</h3>
                    <p className="text-sm opacity-90">Completed {coursesCompleted} course{coursesCompleted > 1 ? 's' : ''}</p>
                  </div>
                )}
                
                {streak >= 7 && (
                  <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-xl p-6 text-white">
                    <Flame className="w-12 h-12 mb-3" />
                    <h3 className="text-xl mb-1">On Fire!</h3>
                    <p className="text-sm opacity-90">{streak} day learning streak</p>
                  </div>
                )}

                {totalCoursesEnrolled >= 3 && (
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl p-6 text-white">
                    <BookOpen className="w-12 h-12 mb-3" />
                    <h3 className="text-xl mb-1">Knowledge Seeker</h3>
                    <p className="text-sm opacity-90">Enrolled in {totalCoursesEnrolled} courses</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
