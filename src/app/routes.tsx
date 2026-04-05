import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { CourseDetail } from './pages/CourseDetail';
import { LessonPlayer } from './pages/LessonPlayer';
import { Dashboard } from './pages/Dashboard';
import { Certificate } from './pages/Certificate';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { Navigation } from './components/Navigation';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/explore',
    element: (
      <Layout>
        <Explore />
      </Layout>
    ),
  },
  {
    path: '/course/:id',
    element: (
      <Layout>
        <CourseDetail />
      </Layout>
    ),
  },
  {
    path: '/learn/:id',
    element: <LessonPlayer />,
  },
  {
    path: '/dashboard',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: '/certificate/:id',
    element: (
      <Layout>
        <Certificate />
      </Layout>
    ),
  },
  {
    path: '/profile',
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);