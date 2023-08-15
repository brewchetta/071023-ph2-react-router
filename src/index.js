import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// COMPONENTS //
import App from './components/App';
import MainPage from './components/MainPage';
import About from './components/About';
import DetectiveList from './components/DetectiveList';
import NewDetectiveForm from './components/NewDetectiveForm';
import ErrorPage from './components/ErrorPage'

// LOADERS //
// import {  } from './loaders'

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
                element: <DetectiveList />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
