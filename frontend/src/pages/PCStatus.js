import React, { useContext, useEffect, useState } from "react";
import pcContext from "../context/pcContext";
import "./PCStatus.css";

const PCStatus = () => {
  const { pcInstance } = useContext(pcContext);
  const [pcs, setPCs] = useState([]);

  useEffect(() => {
    const getPCs = async () => {
      const { data } = await pcInstance.getAllPC();
      setPCs(data.map((pc) => ({ ...pc, inputUserName: "" })));
    };
    getPCs();

    const refreshInterval = setInterval(() => {
      window.location.reload();
    }, 60000);

    return () => clearInterval(refreshInterval);
  }, [pcInstance]);

  const handleSetPCStatus = async (id, isAvailable, inputUserName) => {
    try {
      await pcInstance.updatePC({ id, isAvailable, inputUserName });
      const { data } = await pcInstance.getAllPC();
      setPCs(data.map((pc) => ({ ...pc, inputUserName: "" })));
    } catch (error) {
      console.error("Error updating PC status:", error);
    }
  };

  const handleInputChange = (e, pc) => {
    const newPcs = pcs.map((p) =>
      p._id === pc._id ? { ...p, inputUserName: e.target.value } : p
    );
    setPCs(newPcs);
  };

  return (
    <div className="pc-status-container">
      <h1>PC Status Management</h1>
      <ul>
        {pcs.map((pc) => (
          <li key={pc._id}>
            {pc.isAvailable ? (
              <>
                <div className="pc-available">
                  {`PC ${pc.pcName} is Available`}
                </div>
                <input
                  className="name-input"
                  type="text"
                  placeholder="Enter your name"
                  value={pc.inputUserName}
                  onChange={(e) => handleInputChange(e, pc)}
                />
                <button
                  className="set-pc-button"
                  onClick={() => handleSetPCStatus(pc._id, false, pc.inputUserName)}
                  disabled={!pc.inputUserName.trim()}
                >
                  Set PC in Use
                </button>
              </>
            ) : (
              <>
                <div className="pc-in-use">
                  {`PC ${pc.pcName} is in use by ${pc.userName || 'None'}`}
                </div>
                <button
                  className="free-pc-button"
                  onClick={() => handleSetPCStatus(pc._id, true, pc.inputUserName)}
                >
                  Free PC
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PCStatus;
