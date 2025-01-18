import React, { useState } from "react";
import "./Stage.css";

const Stage = () => {
  const [stages, setStages] = useState([]);
  const [newStage, setNewStage] = useState({
    name: "",
    description: "",
    isActive: true,
    createdBy: "",
  });

  const handleAddStage = () => {
    setStages([...stages, newStage]);
    setNewStage({ name: "", description: "", isActive: true, createdBy: "" });
  };

  const handleDeleteStage = (index) => {
    const updatedStages = stages.filter((_, i) => i !== index);
    setStages(updatedStages);
  };

  const handleEditStage = (index, updatedStage) => {
    const updatedStages = stages.map((stage, i) =>
      i === index ? updatedStage : stage
    );
    setStages(updatedStages);
  };

  return (
    <div className="stages-management">
      <h2>Stages Management</h2>
      <ul>
        {stages.map((stage, index) => (
          <li key={index}>
            <h3>{stage.name}</h3>
            <p>{stage.description}</p>
            <p>Status: {stage.isActive ? "Active" : "Inactive"}</p>
            <p>Created by: {stage.createdBy}</p>
            <div className="actions">
              <button onClick={() => handleDeleteStage(index)}>Delete</button>
              <button
                onClick={() =>
                  handleEditStage(index, { ...stage, name: "Updated Name" })
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
        value={newStage.name}
        onChange={(e) => setNewStage({ ...newStage, name: e.target.value })}
        placeholder="Stage name"
      />
      <input
        type="text"
        value={newStage.description}
        onChange={(e) =>
          setNewStage({ ...newStage, description: e.target.value })
        }
        placeholder="Stage description"
      />
      <input
        type="text"
        value={newStage.createdBy}
        onChange={(e) =>
          setNewStage({ ...newStage, createdBy: e.target.value })
        }
        placeholder="Created by"
      />
      <button onClick={handleAddStage}>Add Stage</button>
    </div>
  );
};

export default Stage;
