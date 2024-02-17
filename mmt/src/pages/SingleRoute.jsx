import React from 'react';
import { Navigate } from 'react-router-dom';

const SingleRoute = () => {
    if (localStorage.getItem('token') === null) {
        return <Navigate to="/login" />
    };
  return (
    <div>SingleRoute</div>
  )
}

export default SingleRoute