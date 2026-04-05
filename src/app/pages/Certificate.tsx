import { useParams, Link } from 'react-router';
import { courses } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { Award, Download, Share2, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

export function Certificate() {
  const { id } = useParams();
  const { markCourseComplete } = useLearning();
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    if (id) {
      markCourseComplete(id);
    }
  }, [id, markCourseComplete]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Course not found</h1>
        </div>
      </div>
    );
  }

  const completionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Celebration Header */}
      <div className="relative py-16 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--learnflow-primary) 0%, var(--learnflow-secondary) 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6" style={{ backgroundColor: 'rgba(233, 69, 96, 0.2)' }}>
            <Award className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl text-white mb-4">
            Congratulations! 🎉
          </h1>
          <p className="text-xl text-gray-200">
            You've successfully completed <span className="font-semibold">{course.title}</span>
          </p>
        </div>
      </div>

      {/* Certificate */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-12 border-8 border-double" style={{ borderColor: 'var(--learnflow-accent)' }}>
          <div className="text-center space-y-6">
            {/* Certificate Header */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--learnflow-cta)' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl" style={{ color: 'var(--learnflow-primary)' }}>
                CourseWallah
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600 uppercase tracking-wider text-sm">
                Certificate of Completion
              </p>
              <h2 className="text-4xl" style={{ color: 'var(--learnflow-primary)' }}>
                {course.title}
              </h2>
            </div>

            <div className="py-8 space-y-6">
              <div>
                <p className="text-gray-600 mb-2">This certifies that</p>
                <p className="text-3xl" style={{ color: 'var(--learnflow-secondary)' }}>
                  Aryan Singh
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                  has successfully completed the course requirements and demonstrated proficiency in the subject matter
                  covered in this comprehensive {course.duration} program instructed by {course.instructor}.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <p className="text-gray-600">Completion Date</p>
                <p className="text-xl" style={{ color: 'var(--learnflow-primary)' }}>
                  {completionDate}
                </p>
              </div>
            </div>

            {/* Certificate Footer */}
            <div className="flex items-center justify-center space-x-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="h-px w-32 mx-auto mb-2" style={{ backgroundColor: 'var(--learnflow-primary)' }}></div>
                <p className="text-sm text-gray-600">Instructor Signature</p>
                <p className="text-sm" style={{ color: 'var(--learnflow-primary)' }}>
                  {course.instructor}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--learnflow-cta)' }}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-gray-600">Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </button>

          <button className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--learnflow-accent)' }}>
            <Share2 className="w-5 h-5" />
            <span>Share on LinkedIn</span>
          </button>
        </div>

        {/* Related Courses */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl mb-4" style={{ color: 'var(--learnflow-primary)' }}>
            Continue Your Learning Journey
          </h3>
          <p className="text-gray-600 mb-6">
            Based on your interests, we recommend these courses:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {courses
              .filter((c) => c.category === course.category && c.id !== course.id)
              .slice(0, 3)
              .map((relatedCourse) => (
                <Link
                  key={relatedCourse.id}
                  to={`/course/${relatedCourse.id}`}
                  className="group"
                >
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="mb-2 line-clamp-2 group-hover:text-[var(--learnflow-cta)] transition-colors">
                        {relatedCourse.title}
                      </h4>
                      <p className="text-sm text-gray-600">{relatedCourse.instructor}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center">
            <Link
              to="/explore"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--learnflow-cta)' }}
            >
              <span>Explore More Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}