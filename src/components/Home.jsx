import React from 'react';
import CityView from '../assets/images.1.jpg';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      
      <h1 style={{ color: '#2c3e50', fontSize: '3rem', marginBottom: '20px' }}>
        Explore Malaysia
      </h1>
      
      <h2 style={{ color: '#7f8c8d', fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '50px' }}>
        Discover Malaysia, Create Memories.
      </h2>

      <div>
        <Link to="/packages">
        <button style={{ 
          padding: '12px 25px', 
          backgroundColor: '#3498db', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '20px'
          }}>
            View Our Packages
            </button>
            </Link>
        </div>
      
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