import { Category } from '../../types';

export const webDevCategory: Category = {
  id: 'web-dev',
  title: 'Web Development',
  description: 'Master modern web development technologies and frameworks',
  icon: 'Globe',
  subcategories: [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Building user interfaces and client-side applications',
      articles: [
        {
          id: 'html-css',
          title: 'HTML & CSS Fundamentals',
          description: 'Core concepts of web markup and styling',
          slug: 'html-css-fundamentals',
          markdownFile: 'web-dev/frontend/html-css.md',
          readingTime: '12 min',
          lastUpdated: '2024-03-15'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Server-side programming and APIs',
      articles: [
        {
          id: 'node-basics',
          title: 'Node.js Fundamentals',
          description: 'Getting started with Node.js',
          slug: 'nodejs-fundamentals',
          markdownFile: 'web-dev/backend/nodejs.md',
          readingTime: '15 min',
          lastUpdated: '2024-03-15'
        }
      ]
    }
  ]
};