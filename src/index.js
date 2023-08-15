import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// COMPONENTS //
import App from './components/App';
import MainPage from './components/MainPage';
import About from './components/About';
import DetectiveList from './components/DetectiveList';
import DetectivePage from './components/DetectivePage';
import NewDetectiveForm from './components/NewDetectiveForm';
import CaseList from './components/CaseList';
import CasePage from './components/CasePage';
import ErrorPage from './components/ErrorPage'

// LOADERS //
import { getDetectivesLoader, getCasesLoader, singleDetectiveLoader, getClues } from './loaders'

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
                loader: getDetectivesLoader
            },
            {
                path: "registry/:id",
                element: <DetectivePage />,
                loader: singleDetectiveLoader
            },
            {
                path: "cases",
                element: <CaseList />,
                loader: getCasesLoader
            },
            {
                path: "cases/:id",
                element: <CasePage />,
                loader: getClues
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );