import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error =  useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

  return (
    <>
      <div>ErrorPage {error.status}</div>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  )
}

export default ErrorPage