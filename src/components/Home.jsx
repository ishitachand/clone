import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  
  // Assuming location.state.id exists, otherwise handle the case where it's undefined
  const id = location.state ? location.state.id : '';

  return (
    <div className='container'>
      <h1>Hello {id}, Welcome to the home</h1>
    </div>
  );
}

