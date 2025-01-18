import React, { useState } from 'react';
import './Process.css';

const Process = () => {
  const [processPlan, setProcessPlan] = useState({
    productName: '',
    requiredSize: '',
    stages: [],
    constraints: '',
  });
  const [stage, setStage] = useState({ name: '', machine: '', dieSchedule: '' });

  const handleAddStage = () => {
    setProcessPlan({
      ...processPlan,
      stages: [...processPlan.stages, stage],
    });
    setStage({ name: '', machine: '', dieSchedule: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProcessPlan({ ...processPlan, [name]: value });
  };

  const handleStageChange = (e) => {
    const { name, value } = e.target;
    setStage({ ...stage, [name]: value });
  };

  return (
    <div className="process-planning">
      <h2>Process Planning</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={processPlan.productName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Required Size:</label>
        <input
          type="text"
          name="requiredSize"
          value={processPlan.requiredSize}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Constraints:</label>
        <input
          type="text"
          name="constraints"
          value={processPlan.constraints}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h3>Add Stage</h3>
        <label>Stage Name:</label>
        <input
          type="text"
          name="name"
          value={stage.name}
          onChange={handleStageChange}
        />
        <label>Machine:</label>
        <input
          type="text"
          name="machine"
          value={stage.machine}
          onChange={handleStageChange}
        />
        <label>Die Schedule:</label>
        <input
          type="text"
          name="dieSchedule"
          value={stage.dieSchedule}
          onChange={handleStageChange}
        />
        <button onClick={handleAddStage}>Add Stage</button>
      </div>
      <div>
        <h3>Stages</h3>
        <ul>
          {processPlan.stages.map((stage, index) => (
            <li key={index}>
              <p>Stage Name: {stage.name}</p>
              <p>Machine: {stage.machine}</p>
              <p>Die Schedule: {stage.dieSchedule}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Process;