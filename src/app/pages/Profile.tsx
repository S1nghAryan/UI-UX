import { User, Mail, Calendar, Award } from 'lucide-react';

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl mb-8" style={{ color: 'var(--learnflow-primary)' }}>
          Profile
        </h1>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--learnflow-accent)' }}>
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl mb-2" style={{ color: 'var(--learnflow-primary)' }}>
                Aryan Singh
              </h2>
              <p className="text-gray-600">Lifelong Learner</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
              <Mail className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p>aryan.23fe10cse00346@muj.manipal.edu</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
              <Calendar className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p>January 2024</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
              <Award className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Certificates Earned</p>
                <p>Check your dashboard for details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}