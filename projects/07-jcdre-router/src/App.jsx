import './App.css'
import { lazy, Suspense } from 'react'

import { Router } from './Router'
import { Route } from './Route'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAbout = lazy(() => import('./pages/About'))

const appRoutes = [
  // {
  //   path: '/',
  //   Component: HomePage,
  // },
  {
    path: '/:lang/about',
    Component: LazyAbout,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  },
]

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={appRoutes} defaultComponent={Page404}>
            <Route path='/' Component={LazyHomePage} />
            <Route path='/about' Component={LazyAbout} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
