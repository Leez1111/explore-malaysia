import React from 'react';
import CityView from '../assets/images.1.jpg';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      
      <h1 style={{ color: '#2c3e50', fontSize: '3rem', marginBottom: '10px' }}>
        Explore Malaysia
      </h1>
      
      <h2 style={{ color: '#7f8c8d', fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '30px' }}>
        Discover Malaysia, Create Memories.
      </h2>
      
      <div>
        <img 
          src={CityView} 
          alt="Beautiful view of Kuala Lumpur, Malaysia" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }} 
        />
      </div>

    </div>
  );
}

export default Home;