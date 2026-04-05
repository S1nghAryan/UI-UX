/**
 * LearnFlow - Learning Platform Prototype
 * 
 * A comprehensive online learning platform designed to address UX flaws
 * identified in popular learning platforms (Coursera, Udemy, Skillshare, etc.)
 * 
 * Design Principles Applied:
 * - Recognition over Recall: Clear labels, progress indicators, visible navigation
 * - Hick's Law: Limited choices per screen, grouped filters
 * - Aesthetic-Usability Effect: Clean design, consistent typography, calm colors
 * - User Control & Freedom: No forced popups, easy navigation
 * - Accessibility: High contrast, readable fonts, clear focus states
 * 
 * Architecture:
 * - 6 Main Screens: Home, Explore, Course Detail, Lesson Player, Dashboard, Certificate
 * - React Router for navigation
 * - Context API for state management
 * - Tailwind CSS for styling
 * - Custom LearnFlow design system
 */

import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LearningProvider } from './context/LearningContext';

export default function App() {
  return (
    <LearningProvider>
      <RouterProvider router={router} />
    </LearningProvider>
  );
}
