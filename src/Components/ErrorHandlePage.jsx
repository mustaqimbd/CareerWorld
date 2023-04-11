import React from 'react';
import { Link, useRouteError } from "react-router-dom";
const ErrorHandlePage = () => {
    const error = useRouteError();
    return (
        <div className='text-center mt-20'>

            <h1 className='text-6xl font-bold'>Oops!</h1>
            <p className='my-5'>Sorry, an unexpected error has occurred.</p>
            <p className='text-6xl font-bold'>
                {error.status ? error.status : ''}
            </p>
            <p className='mb-10 text-6xl font-bold'>{error.statusText ? error.statusText : ''}</p>
            <Link className='btn-primary' to='/'>Back to Homepage</Link>

        </div>
    );
};

export default ErrorHandlePage;