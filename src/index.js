import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// COMPONENTS //
import App from './components/App';
import About from './components/About';
import NewDetectiveForm from './components/NewDetectiveForm';
import DetectiveList from './components/DetectiveList';
import MainPage from './components/MainPage';
import DetectivePage from './components/DetectivePage';
import ErrorPage from './components/ErrorPage'

// LOADERS //
import { getDetectivesLoader, getDetectiveByIdLoader } from './loaders'

// we place all our routes in the array below
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [ // children are sub-routes for our main App
            {
                index: true, // this is the default route inside App
                element: <MainPage />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "form",
                element: <NewDetectiveForm />
            },
            {
                path: "registry",
                element: <DetectiveList />,
                loader: getDetectivesLoader // before the page loads, we fetch with getDetectiveLoader
            },
            {
                path: "registry/:id", // the :id lets react-router know to accept params (:id will change to a real id)
                element: <DetectivePage />,
                loader: getDetectiveByIdLoader
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
