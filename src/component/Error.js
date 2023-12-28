import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {

    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>OOPS ! We have an Error</h1>
        <p>Something went Wrong !!</p>
        <h2> {err.statusText +  "  : " + err.status + " " + err.internal}  </h2>
    </div>
  )
}

export default Error