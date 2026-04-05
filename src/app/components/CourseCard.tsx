import { Link } from 'react-router';
import { Clock, Star, Users } from 'lucide-react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-sm" style={{ backgroundColor: 'var(--learnflow-accent)' }}>
            {course.level}
          </div>
        </div>

        <div className="p-4 space-y-3 flex-1 flex flex-col">
          <h3 className="line-clamp-2 min-h-[3rem] group-hover:text-[var(--learnflow-cta)] transition-colors">
            {course.title}
          </h3>

          <p className="text-sm text-gray-600">{course.instructor}</p>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span>{course.rating}</span>
              <span className="text-gray-400">({course.enrollments.toLocaleString()})</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: 'var(--learnflow-secondary)' }}>
              {course.category}
            </span>
            <span className="text-xl" style={{ color: 'var(--learnflow-cta)' }}>
              ₹{course.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}