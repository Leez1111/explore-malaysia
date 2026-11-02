import React from 'react';
import './PackageCard.css';

function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <h3>{pkg.destination}</h3>
      <p><strong>Category:</strong> {pkg.category}</p>
      <p><strong>Duration:</strong> {pkg.duration}</p>
      <p><strong>Price:</strong> <span className="price-tag">{pkg.price}</span></p>
      <button className="details-button">
        View Details
      </button>
    </div>
  );
}

export default PackageCard;