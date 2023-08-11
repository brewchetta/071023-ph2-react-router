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

// LOADERS //
import { getDetectivesLoader } from './loaders'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
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
                loader: getDetectivesLoader
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
