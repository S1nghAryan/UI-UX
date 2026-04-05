import { useParams, useNavigate } from 'react-router';
import { courses } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { Star, Clock, Users, PlayCircle, CheckCircle, FileText } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isEnrolled, enrollInCourse, setCurrentLearningCourse } = useLearning();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
            Course Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-3 rounded-lg text-white"
            style={{ backgroundColor: 'var(--learnflow-cta)' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);

  const handleEnroll = () => {
    enrollInCourse(course.id);
    setCurrentLearningCourse(course.id);
    navigate(`/learn/${course.id}`);
  };

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return PlayCircle;
      case 'quiz':
        return CheckCircle;
      case 'reading':
        return FileText;
      default:
        return PlayCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="relative py-16 px-6" style={{ background: 'linear-gradient(135deg, var(--learnflow-primary) 0%, var(--learnflow-secondary) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-white text-sm mb-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                {course.category}
              </div>
              <h1 className="text-4xl text-white">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200">
                {course.description}
              </p>
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  <span>{course.rating}</span>
                  <span className="text-gray-300">({course.enrollments.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <p className="text-gray-200">
                Instructor: <span className="text-white">{course.instructor}</span>
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-center space-y-4">
                  <div className="text-4xl" style={{ color: 'var(--learnflow-cta)' }}>
                    ₹{course.price}
                  </div>
                  <button
                    onClick={handleEnroll}
                    className="w-full px-6 py-4 rounded-lg text-white text-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: 'var(--learnflow-cta)' }}
                  >
                    {enrolled ? 'Continue Learning' : 'Enroll Now'}
                  </button>
                  <p className="text-sm text-gray-600">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                What You'll Learn
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Master the fundamentals and advanced concepts',
                  'Build real-world projects from scratch',
                  'Learn industry best practices',
                  'Get hands-on coding experience',
                  'Understand core principles deeply',
                  'Prepare for professional certification',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--learnflow-cta)' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Syllabus */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                Course Syllabus
              </h2>
              <p className="text-gray-600 mb-6">
                {course.modules.length} modules • {totalLessons} lessons • {course.duration} total length
              </p>

              <Accordion type="single" collapsible className="space-y-2">
                {course.modules.map((module, index) => (
                  <AccordionItem key={module.id} value={module.id} className="border border-gray-200 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--learnflow-accent)', color: 'white' }}>
                          {index + 1}
                        </div>
                        <span>{module.title}</span>
                        <span className="text-sm text-gray-500">({module.lessons.length} lessons)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2 pl-11">
                        {module.lessons.map((lesson) => {
                          const Icon = getLessonIcon(lesson.type);
                          return (
                            <li key={lesson.id} className="flex items-center justify-between py-2 hover:bg-gray-50 px-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Icon className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{lesson.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Includes */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                This Course Includes
              </h3>
              <ul className="space-y-3">
                {[
                  `${course.duration} on-demand video`,
                  `${totalLessons} lessons`,
                  'Lifetime access',
                  'Certificate of completion',
                  'Access on mobile and desktop',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--learnflow-accent)' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Level Badge */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
                Skill Level
              </h3>
              <div className="inline-block px-4 py-2 rounded-full text-white" style={{ backgroundColor: 'var(--learnflow-accent)' }}>
                {course.level}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}