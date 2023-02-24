import React from "react";
import { Stack, Chip } from '@mui/material';
import Logo from 'components/Logo';

type Props = {};

export default function HeaderLogo({}: Props) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Logo />
      {/* <Chip
                    label={process.env.REACT_APP_VERSION}
                    size="small"
                    sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="a"
                    href="https://github.com/codedthemes/mantis-free-react-admin-template"
                    target="_blank"
                    clickable
                /> */}
    </Stack>
  );
}
