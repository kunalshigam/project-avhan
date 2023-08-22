import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <Switch
        checked={isOn}
        onChange={handleToggle}
        color="primary"
      />
      {isOn ? 'On' : 'Off'}
    </div>
  );
};

export default ToggleBtn;
