'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import './style.css';

const data = [
  {
    id: 1,
    name: 'tamohara',
    title: 'Tamohara',
    category: 'Finance',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Finance',
    caseStuday: 1,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 2,
    name: 'designer-watches-llp',
    title: 'Designer Watches LLP',
    category: 'Inventory Management',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Systems',
    caseStuday: 2,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 3,
    name: 'uk-post-office',
    title: 'UK Post Office',
    category: 'Govt',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Govt',
    caseStuday: 3,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 4,
    name: 'nike',
    title: 'Nike',
    category: 'Inventory Management',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Systems',
    caseStuday: 4,
    img: 'assets/img/portfolio-1.jpg',
    website: 'https://www.nike.com/in/'
  },
  {
    id: 5,
    name: 'bartleby',
    title: 'Bartleby',
    category: 'Education',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Education',
    caseStuday: 5,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 6,
    name: 'qritive',
    title: 'Qritive',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 6,
    img: 'assets/img/portfolio-1.jpg',
    website: 'https://qritive.com/'
  },
  {
    id: 7,
    name: 'optum-uhc',
    title: 'Optum + UHC',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 7,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 8,
    name: 'lofoods',
    title: 'LoFoods',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 8,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 9,
    name: 'apohacoach',
    title: 'Alphacoach',
    category: 'Healthcare',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Healthcare',
    caseStuday: 9,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 10,
    name: 'bhavyata-foundation',
    title: 'Bhavyata Foundation',
    category: 'NGO',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'NGO',
    caseStuday: 10,
    img: 'assets/img/portfolio-1.jpg'
  },
  {
    id: 11,
    name: 'lemark-education',
    title: 'LeMark Education',
    category: 'Education',
    desc: 'Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...',
    filter: 'Education',
    caseStuday: 11,
    img: 'assets/img/portfolio-1.jpg'
  }
];

const ProjectsGrid = () => {
  const [filterKey, setFilterKey] = useState('all');

  return (
    <div className="my-5">
      <ul className="category-list">
        <li>
          <button
            className={filterKey === 'all' ? 'active' : ''}
            onClick={() => setFilterKey('all')}
          >
            All ({data.length})
          </button>
        </li>
        {Object.entries(
          data.reduce((acc: Record<string, number>, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([category, count]) => (
          <li key={category}>
            <button
              className={filterKey === category ? 'active' : ''}
              onClick={() => setFilterKey(category)}
            >
              {category}({count})
            </button>
          </li>
        ))}
      </ul>
      <div className="h-80"></div>
    </div>
  );
};
export default ProjectsGrid;
