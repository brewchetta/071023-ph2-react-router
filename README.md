# React Router DOM

## Learning Goals

- Understand what react-router as a package does
- Create a configurable object
- Implement routing for a main App page
- Implement an error page with useRouteError
- Utilize the Outlet component to show children in a wrapper
- Understand the async / await syntax for fetching
- Utilize the useLoader hook
- Create pages with params using the useParams hook
- Programatically navigate to new pages with useNavigate

## Getting Started

Fork and clone the repository. Run `npm install`. We'll need to install the `react-router-dom` package followed by `npm run server`. In a seperate window run `npm start`.

## Deliverables

### CaseList

1. Create a new route for the cases. The path ought to be `/cases` and the component should be `CaseList`.

2. Create a new `Link` in the `Header` that sends users to `/cases`.

3. Apply a new loader which fetches data from cases and loads it when routing to `/cases`.

4. Receive and map through the loaded data in the `CaseList` component using the `useLoaderData` hook.

### CasePage

1. Create a new route for the individual case page. The path ought to be `/cases/:id` and the component should be `CasePage`.

2. Apply a new loader which fetches data for an individual case using params and loads it when routing to `/cases/:id`.

3. Receive and use the loaded data in the CasePage component.

4. Apply error handling to the loader in case you receive something other than an `ok` response.
