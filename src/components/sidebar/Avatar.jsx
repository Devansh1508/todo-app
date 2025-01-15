import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profile from '../../assets/sidebar/profile.jpeg'

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={profile}
        sx={{ width: 118, height: 118 }}
      />
    </Stack>
  );
}
