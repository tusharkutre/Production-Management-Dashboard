import React, { useState } from 'react';
import './Machines.css';

const Machines = () => {
  const [machines, setMachines] = useState([]);
  const [newMachine, setNewMachine] = useState({
    name: '',
    description: '',
    line: '',
    spool: '',
    isActive: true,
    createdBy: '',
    stage: '',
  });

  const handleAddMachine = () => {
    setMachines([...machines, newMachine]);
    setNewMachine({
      name: '',
      description: '',
      line: '',
      spool: '',
      isActive: true,
      createdBy: '',
      stage: '',
    });
  };

  const handleDeleteMachine = (index) => {
    const updatedMachines = machines.filter((_, i) => i !== index);
    setMachines(updatedMachines);
  };

  const handleEditMachine = (index, updatedMachine) => {
    const updatedMachines = machines.map((machine, i) =>
      i === index ? updatedMachine : machine
    );
    setMachines(updatedMachines);
  };

  return (
    <div className="machines-management">
      <h2>Machines Management</h2>
      <ul>
        {machines.map((machine, index) => (
          <li key={index}>
            <h3>{machine.name}</h3>
            <p>{machine.description}</p>
            <p>Line: {machine.line}</p>
            <p>Spool: {machine.spool}</p>
            <p>Status: {machine.isActive ? 'Active' : 'Inactive'}</p>
            <p>Created by: {machine.createdBy}</p>
            <p>Stage: {machine.stage}</p>
            <div className="actions">
              <button onClick={() => handleDeleteMachine(index)}>Delete</button>
              <button
                onClick={() =>
                  handleEditMachine(index, { ...machine, name: 'Updated Name' })
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
        value={newMachine.name}
        onChange={(e) => setNewMachine({ ...newMachine, name: e.target.value })}
        placeholder="Machine name"
      />
      <input
        type="text"
        value={newMachine.description}
        onChange={(e) =>
          setNewMachine({ ...newMachine, description: e.target.value })
        }
        placeholder="Machine description"
      />
      <input
        type="text"
        value={newMachine.line}
        onChange={(e) => setNewMachine({ ...newMachine, line: e.target.value })}
        placeholder="Line"
      />
      <input
        type="text"
        value={newMachine.spool}
        onChange={(e) => setNewMachine({ ...newMachine, spool: e.target.value })}
        placeholder="Spool"
      />
      <input
        type="text"
        value={newMachine.createdBy}
        onChange={(e) =>
          setNewMachine({ ...newMachine, createdBy: e.target.value })
        }
        placeholder="Created by"
      />
      <input
        type="text"
        value={newMachine.stage}
        onChange={(e) => setNewMachine({ ...newMachine, stage: e.target.value })}
        placeholder="Stage"
      />
      <button onClick={handleAddMachine}>Add Machine</button>
    </div>
  );
};

export default Machines;