import React from 'react'

interface ErrorDisplayProps {
  message: string
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="error-message">
      <h3>Error:</h3>
      <p>{message}</p>
    </div>
  )
}

export { ErrorDisplay }
