import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    // the error is given when there's a routing error (404 or thrown in a loader)
    const error = useRouteError()

    console.log(error)

    return (
        <>
            <p>OH NOES!</p>
            <p>{error.status}</p>
            {/* the below accounts for a variety of things that can be thrown by an error */}
            <p>{error.statusText || error.message || error.data}</p>
        </>
    )

}

export default ErrorPage