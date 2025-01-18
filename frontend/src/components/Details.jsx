import React from 'react';

const Details = ({ product }) => {
  if (!product) {
    return <div className="detailed-view">Select a product to see the details.</div>;
  }

  return (
    <div className="detailed-view">
      <h2>Detailed View for {product.name}</h2>
      <h3>Production Stages</h3>
      <ul>
        {product.stages.map((stage, index) => (
          <li key={index}>
            <h4>Stage {index + 1}: {stage.name}</h4>
            <p>Machine: {stage.machine}</p>
            <p>Die Schedule:</p>
            <ul>
              {stage.dieSchedule.map((die, dieIndex) => (
                <li key={dieIndex}>
                  Die Size: {die.size}, Die ID: {die.id}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;