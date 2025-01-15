import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';

export default function PieAnimation() {
  const [itemNb, setItemNb] = React.useState(4);
  const [radius, setRadius] = React.useState(20);
  const darkMode= useSelector(state=>state.nav.darkMode);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const mobileAndDesktopOS = [
    { label: 'Pending', value: 40, color: darkMode ? '#A0EDA3' : '#3f9142' },
    { label: 'Done', value: 30, color: '#142e15' },
  ];

  const valueFormatter = (value) => `${value}%`;

  return (
    <Box sx={{ width: '100%'}}>
      <PieChart
        height={150}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            innerRadius: radius,
            arcLabelMinAngle: 20,
            valueFormatter,
            color: (params) => params.data.color, 
          },
        ]
    }
        skipAnimation={skipAnimation}
      />
    </Box>
  );
}