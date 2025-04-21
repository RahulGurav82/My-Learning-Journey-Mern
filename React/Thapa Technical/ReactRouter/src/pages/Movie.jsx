import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Card from '../components/UI/Card'

const Movie = () => {
  const data = useLoaderData();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      padding: '20px',
    }}>
      {data.results.map((crrVal) => (
        <Card key={crrVal.id} movie={crrVal} />
      ))}
    </div>
  )
}

export default Movie
