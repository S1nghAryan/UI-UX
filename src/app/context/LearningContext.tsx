import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EnrolledCourse {
  courseId: string;
  enrolledAt: Date;
  completedLessons: string[];
  currentLesson: string | null;
  progress: number;
}

interface LearningContextType {
  enrolledCourses: EnrolledCourse[];
  enrollInCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  completeLesson: (courseId: string, lessonId: string) => void;
  getCourseProgress: (courseId: string) => EnrolledCourse | undefined;
  currentLearningCourse: string | null;
  setCurrentLearningCourse: (courseId: string | null) => void;
  completedCourses: string[];
  markCourseComplete: (courseId: string) => void;
  streak: number;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export function LearningProvider({ children }: { children: ReactNode }) {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [currentLearningCourse, setCurrentLearningCourse] = useState<string | null>(null);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [streak] = useState(7); // Mock streak data

  const enrollInCourse = (courseId: string) => {
    if (!isEnrolled(courseId)) {
      setEnrolledCourses([
        ...enrolledCourses,
        {
          courseId,
          enrolledAt: new Date(),
          completedLessons: [],
          currentLesson: null,
          progress: 0,
        },
      ]);
    }
  };

  const isEnrolled = (courseId: string) => {
    return enrolledCourses.some((course) => course.courseId === courseId);
  };

  const completeLesson = (courseId: string, lessonId: string) => {
    setEnrolledCourses(
      enrolledCourses.map((course) => {
        if (course.courseId === courseId) {
          const completedLessons = [...course.completedLessons, lessonId];
          return {
            ...course,
            completedLessons,
            currentLesson: lessonId,
            progress: Math.min(100, (completedLessons.length / 10) * 100), // Simplified calculation
          };
        }
        return course;
      })
    );
  };

  const getCourseProgress = (courseId: string) => {
    return enrolledCourses.find((course) => course.courseId === courseId);
  };

  const markCourseComplete = (courseId: string) => {
    if (!completedCourses.includes(courseId)) {
      setCompletedCourses([...completedCourses, courseId]);
    }
  };

  return (
    <LearningContext.Provider
      value={{
        enrolledCourses,
        enrollInCourse,
        isEnrolled,
        completeLesson,
        getCourseProgress,
        currentLearningCourse,
        setCurrentLearningCourse,
        completedCourses,
        markCourseComplete,
        streak,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}
