import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Homepage/Home'
import DetailsPage from './Components/Detailspage/DetailsPage'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import Statistics from './Components/Statistics/Statistics'
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
        path: 'job/:id',
        element: <DetailsPage />,
        loader: async ({ params }) => {
          return params.id;
        },
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />
      },
      {
        path:'statistics',
        element:<Statistics />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
