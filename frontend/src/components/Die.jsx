import React, { useState } from 'react';
import './Die.css';

const Die = () => {
  const [dieSchedules, setDieSchedules] = useState([]);
  const [newDieSchedule, setNewDieSchedule] = useState({
    name: '',
    code: '',
    description: '',
    dieConfigurations: '',
    stage: '',
    isActive: true,
    createdBy: '',
  });

  const handleAddDieSchedule = () => {
    setDieSchedules([...dieSchedules, newDieSchedule]);
    setNewDieSchedule({
      name: '',
      code: '',
      description: '',
      dieConfigurations: '',
      stage: '',
      isActive: true,
      createdBy: '',
    });
  };

  const handleDeleteDieSchedule = (index) => {
    const updatedDieSchedules = dieSchedules.filter((_, i) => i !== index);
    setDieSchedules(updatedDieSchedules);
  };

  const handleEditDieSchedule = (index, updatedDieSchedule) => {
    const updatedDieSchedules = dieSchedules.map((dieSchedule, i) =>
      i === index ? updatedDieSchedule : dieSchedule
    );
    setDieSchedules(updatedDieSchedules);
  };

  return (
    <div className="die-schedule-management">
      <h2>Die Schedule Management</h2>
      <ul>
        {dieSchedules.map((dieSchedule, index) => (
          <li key={index}>
            <h3>{dieSchedule.name} ({dieSchedule.code})</h3>
            <p>{dieSchedule.description}</p>
            <p>Die Configurations: {dieSchedule.dieConfigurations}</p>
            <p>Stage: {dieSchedule.stage}</p>
            <p>Status: {dieSchedule.isActive ? 'Active' : 'Inactive'}</p>
            <p>Created by: {dieSchedule.createdBy}</p>
            <div className="actions">
              <button onClick={() => handleDeleteDieSchedule(index)}>Delete</button>
              <button
                onClick={() =>
                  handleEditDieSchedule(index, { ...dieSchedule, name: 'Updated Name' })
                }
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newDieSchedule.name}
        onChange={(e) => setNewDieSchedule({ ...newDieSchedule, name: e.target.value })}
        placeholder="Die Schedule name"
      />
      <input
        type="text"
        value={newDieSchedule.code}
        onChange={(e) => setNewDieSchedule({ ...newDieSchedule, code: e.target.value })}
        placeholder="Die Schedule code"
      />
      <input
        type="text"
        value={newDieSchedule.description}
        onChange={(e) => setNewDieSchedule({ ...newDieSchedule, description: e.target.value })}
        placeholder="Description"
      />
      <input
        type="text"
        value={newDieSchedule.dieConfigurations}
        onChange={(e) => setNewDieSchedule({ ...newDieSchedule, dieConfigurations: e.target.value })}
        placeholder="Die Configurations"
      />
      <input
        type="text"
        value={newDieSchedule.stage}
        onChange={(e) => setNewDieSchedule({ ...newDieSchedule, stage: e.target.value })}
        placeholder="Stage"
      />
      <input
        type="text"
        value={newDieSchedule.createdBy}
        onChange={(e) => setNewDieSchedule({ ...newDieSchedule, createdBy: e.target.value })}
        placeholder="Created by"
      />
      <button onClick={handleAddDieSchedule}>Add Die Schedule</button>
    </div>
  );
};

export default Die;