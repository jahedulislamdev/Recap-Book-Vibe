import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error.jsx';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load components
const ViewDetails = React.lazy(() => import('./components/view Details/ViewDetails.jsx'));
const Books = React.lazy(() => import('./components/Books/Books.jsx'));
const ListedBooks = React.lazy(() => import('./components/listed Books/ListedBooks.jsx'));
const Home = React.lazy(() => import('./components/Home/Home.jsx'));
const PagesToRead = React.lazy(() => import('./Pages to Read/PagesToRead.jsx'));

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: () => fetch('/data.json'),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/books/:id',
        loader: () => fetch('/data.json'),
        element: (
          <Suspense fallback={<div>Loading View Details...</div>}>
            <ViewDetails />
          </Suspense>
        ),
      },
      {
        path: '/books',
        element: (
          <Suspense fallback={<div>Loading Books...</div>}>
            <Books />
          </Suspense>
        ),
        loader: () => fetch('/data.json')
      },
      {
        path: '/listedBooks',
        loader: () => fetch('/data.json'),
        element: (
          <Suspense fallback={<div>Loading Listed Books...</div>}>
            <ListedBooks />
          </Suspense>
        ),
      },
      {
        path: '/pages_to_read',
        loader: () => fetch('/data.json'),
        element: (
          <Suspense fallback={<div>Loading Pages to Read...</div>}>
            <PagesToRead />
          </Suspense>
        ),
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </StrictMode>
);
