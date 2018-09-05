import Home from '../views/home/Home'
import Resume from '../views/resume/Resume'
import Share from '../views/achieve/Share'
import Accumulate from '../views/achieve/Accumulate'
import About from '../views/about/About'
import Main from '../views/main/Main'

export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/resume',
        component: Resume
      },
      {
        path: '/share',
        component: Share
      },
      {
        path: '/accumulate',
        component: Accumulate
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/main',
        component: Main
      },
    ]
  }
];
