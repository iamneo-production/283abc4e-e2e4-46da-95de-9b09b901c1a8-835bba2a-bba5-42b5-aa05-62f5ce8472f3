// CountryCard.js
import React from 'react';

const CountryCard = ({ countryName, iconUrl }) => {
  return (
    <div className="country-card">
      <img src={iconUrl} alt={`${countryName} Flag`} />
      <h2>{countryName}</h2>
    </div>
  );
};

export default CountryCard;
