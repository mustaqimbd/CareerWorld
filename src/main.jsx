import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Homepage/Home'
import DetailsPage from './Components/Detailspage/DetailsPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/featuredjobsdata.json')
      },
      {
        path: '/job/:id',
        element: <DetailsPage />,
        loader: async ({ params }) => {
          return params.id;
        },
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
