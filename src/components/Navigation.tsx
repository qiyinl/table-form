'use client';

import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Link from 'next/link';
import DarkModeIcon from '@mui/material/Icon'; // Standard if icons have issues
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../theme/ThemeRegistry';

export default function Navigation() {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: `2px solid ${theme.palette.divider}`, mb: 4, pt: 1, pb: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h2" component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit', letterSpacing: '-0.05em', fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            TF<Box component="span" sx={{ color: theme.palette.primary.main }}>.</Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
            <Button component={Link} href="/form" color="inherit" sx={{ fontWeight: 700 }}>Form</Button>
            <Button component={Link} href="/table" color="inherit" sx={{ fontWeight: 700 }}>Table</Button>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <Button component={Link} href="/form" color="inherit" size="small">Form</Button>
            <Button component={Link} href="/table" color="inherit" size="small">Table</Button>
          </Box>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
