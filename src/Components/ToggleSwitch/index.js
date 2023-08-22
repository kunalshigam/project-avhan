import React, { useState } from 'react';
import './index.css';

const ToggleSwitch = () => {
  const [isCompanyA, setIsCompanyA] = useState(true);

  const handleToggle = () => {
    setIsCompanyA(!isCompanyA);
  };

  return (
    <div className={`toggle-switch ${isCompanyA ? 'company' : 'location'}`} onClick={handleToggle}>
      <div className="slider" />
      <div className="text">{isCompanyA ? 'Company' : 'Location'}</div>
    </div>
  );
};

export default ToggleSwitch;
