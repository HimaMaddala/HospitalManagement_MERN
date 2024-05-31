import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px', width: '200px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
    </div>
  );
};

export default Card;
