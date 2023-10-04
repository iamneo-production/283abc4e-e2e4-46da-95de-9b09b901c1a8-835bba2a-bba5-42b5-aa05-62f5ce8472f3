import React from 'react';
import './National.css'; // Add your CSS styling here
import CountryCard from './CountryCard';

// Import the images
import indiaImage from './india.jpeg';
import australiaImage from './australia.jpg';
import southAfricaImage from './sa.png';
import englandImage from './eng.png';
import sriLankaImage from './sl.png';
import westIndiesImage from './wi.jpg';
import newZealandImage from './nz.jpg';
import pakistanImage from './pak.jpg';

const National = () => {
  // Define data for countries
  const countries = [
    { name: 'India', iconUrl: indiaImage },
    { name: 'Australia', iconUrl: australiaImage },
    { name: 'South Africa', iconUrl: southAfricaImage },
    { name: 'England', iconUrl: englandImage },
    { name: 'Sri Lanka', iconUrl: sriLankaImage },
    { name: 'West Indies', iconUrl: westIndiesImage },
    { name: 'New Zealand', iconUrl: newZealandImage },
    { name: 'Pakistan', iconUrl: pakistanImage },
  ];

  return (
    <div className="cla">
      <h1>NATIONAL ASSOCIATIONS</h1>
      <div className="country-list">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            countryName={country.name}
            iconUrl={country.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default National;
