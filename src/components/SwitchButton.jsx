import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const CustomSwitch = styled(Switch)(({ theme, isDark }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: isDark ? 'grey' : '#808080', // White color for dark theme, grey for default
    '&:hover': {
      backgroundColor: isDark ? alpha('#FFF', theme.palette.action.hoverOpacity) : 'transparent', // Hover color
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: isDark ? 'grey' : '#808080', // White color for dark theme, grey for default
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function SwitchButton() {
  const [isDark, setIsDark] = React.useState(false);

  const handleSwitchToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <CustomSwitch {...label} defaultChecked={isDark} isDark={isDark} onChange={handleSwitchToggle}  />
    </div>
  );
}
