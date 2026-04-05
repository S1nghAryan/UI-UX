import { useState } from 'react';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '../components/ui/input';

export function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Development', 'Design', 'Data Science', 'Marketing', 'Photography'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
            Explore Courses
          </h1>
          <p className="text-gray-600">
            Browse our comprehensive catalog of online courses
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <SlidersHorizontal className="w-5 h-5" style={{ color: 'var(--learnflow-primary)' }} />
                <h3 className="text-lg" style={{ color: 'var(--learnflow-primary)' }}>
                  Filters
                </h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block mb-3 text-sm" style={{ color: 'var(--learnflow-secondary)' }}>
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'text-white'
                          : 'hover:bg-gray-50'
                      }`}
                      style={selectedCategory === category ? { backgroundColor: 'var(--learnflow-primary)' } : {}}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="block mb-3 text-sm" style={{ color: 'var(--learnflow-secondary)' }}>
                  Level
                </label>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedLevel === level
                          ? 'text-white'
                          : 'hover:bg-gray-50'
                      }`}
                      style={selectedLevel === level ? { backgroundColor: 'var(--learnflow-primary)' } : {}}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedLevel('All');
                  setSearchQuery('');
                }}
                className="w-full px-4 py-2 rounded-lg text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No courses found matching your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLevel('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-3 rounded-lg text-white"
                  style={{ backgroundColor: 'var(--learnflow-cta)' }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
