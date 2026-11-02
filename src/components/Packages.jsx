import React, { useState, useEffect } from 'react';
import './PackageCard.css';

function Packages() {
  // 1. Create the state to hold data
  const [packages, setPackages] = useState([]);

  // 2. Fetch packages.json when the page loads
  useEffect(() => {
    fetch('/packages.json')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      })
      .catch((error) => console.error("Error loading packages:", error));
  }, []);

  // 3. Display the page and loop through the data directly
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '30px' }}>
        Our Travel Packages
      </h2>
      
      <div className="packages-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Loop through the data and build the cards right here */}
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.destination}</h3>
            <p><strong>Category:</strong> {pkg.category}</p>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Price:</strong> <span className="price-tag">{pkg.price}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;