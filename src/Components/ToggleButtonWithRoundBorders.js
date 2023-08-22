import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  roundButton: {
    borderRadius: '50%',
  },
}));

const ToggleButtonWithRoundBorders = () => {
  const [selectedValue, setSelectedValue] = useState('on');
  const classes = useStyles();

  const handleToggle = (event, newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <ToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={handleToggle}
      aria-label="toggle-button"
    >
      <ToggleButton
        value="on"
        aria-label="on-button"
        className={classes.roundButton}
      >
        On
      </ToggleButton>
      <ToggleButton
        value="off"
        aria-label="off-button"
        className={classes.roundButton}
      >
        Off
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonWithRoundBorders;
