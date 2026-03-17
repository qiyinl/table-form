'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{ mt: { xs: 4, md: 8 } }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' }, color: 'primary.main', lineHeight: 1.1, mb: 3, wordBreak: 'break-word' }}>
        DATA FORM.
      </Typography>
      <Typography variant="h4" component="p" sx={{ mb: { xs: 4, md: 6 }, fontWeight: 300, maxWidth: 600, fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.125rem' } }}>
        A lightweight modern application to seamlessly capture and display structured data with a nostalgic edge.
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
        <Paper elevation={1} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h3" gutterBottom>
            Record Entry
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, flexGrow: 1 }}>
            Submit new records through our dynamic form interface. Capture names, fields of study, age, and multiple activities.
          </Typography>
          <Link href="/form" passHref legacyBehavior>
            <Button variant="contained" color="primary" size="large" sx={{ py: 1.5, px: { xs: 3, md: 4 }, width: { xs: '100%', sm: 'auto' } }}>
              ENTER DATA
            </Button>
          </Link>
        </Paper>
        
        <Paper elevation={1} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h3" gutterBottom>
            View Data
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, flexGrow: 1 }}>
            Inspect and manage submissions in a clean, legible table format. Effortlessly remove outdated operations.
          </Typography>
          <Link href="/table" passHref legacyBehavior>
            <Button variant="contained" color="secondary" size="large" sx={{ py: 1.5, px: { xs: 3, md: 4 }, width: { xs: '100%', sm: 'auto' } }}>
              ACCESS TABLE
            </Button>
          </Link>
        </Paper>
      </Box>
    </Box>
  );
}
