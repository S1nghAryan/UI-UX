import { useState } from 'react';
import { Search } from 'lucide-react';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Input } from '../components/ui/input';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--learnflow-primary) 0%, var(--learnflow-secondary) 50%, var(--learnflow-accent) 100%)' }}>
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 bg-white blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10 bg-white blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl text-white">
              Discover Your Next Learning Adventure
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Learn from the world's best instructors. No clutter, no distractions—just quality education.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for courses by topic, skill, or instructor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 rounded-xl text-base bg-white border-0 shadow-lg focus:ring-2 focus:ring-[var(--learnflow-cta)]"
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {['Web Development', 'Design', 'Data Science', 'Marketing'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors text-sm"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl" style={{ color: 'var(--learnflow-primary)' }}>
            Featured Courses
          </h2>
          <p className="text-gray-600 mt-2">
            Popular courses chosen by our learning community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-12" style={{ color: 'var(--learnflow-primary)' }}>
            Why Choose CourseWallah?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: 'var(--learnflow-cta)' }}>
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl" style={{ color: 'var(--learnflow-primary)' }}>
                Clear Learning Paths
              </h3>
              <p className="text-gray-600">
                Structured courses with visible progress tracking and clear milestones
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: 'var(--learnflow-cta)' }}>
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl" style={{ color: 'var(--learnflow-primary)' }}>
                Distraction-Free Learning
              </h3>
              <p className="text-gray-600">
                No popups, no clutter—just you and your learning content
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: 'var(--learnflow-cta)' }}>
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl" style={{ color: 'var(--learnflow-primary)' }}>
                Recognized Certificates
              </h3>
              <p className="text-gray-600">
                Earn certificates to showcase your skills and boost your career
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}