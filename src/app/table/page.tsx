import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import DeleteRecordButton from '@/components/DeleteRecordButton';
import { getData } from '@/lib/data';

// Force dynamic rendering to always fetch the latest data on request
export const dynamic = 'force-dynamic';

export default async function TablePage() {
  // Fetch data on the server during initialization
  const data = getData();

  return (
    <Box sx={{ mt: { xs: 2, md: 4 } }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: '2.75rem', md: '3.75rem' }, wordBreak: 'break-word', lineHeight: 1.1 }}>
        DATA TABLE
      </Typography>

      {data.length === 0 ? (
        <Paper elevation={1} sx={{ p: 5, textAlign: 'center' }}>
          <Typography variant="h5" color="text.secondary">
            No records found. Visit the Form to input data.
          </Typography>
        </Paper>
      ) : (
        <TableContainer component={Paper} elevation={1} sx={{ width: '100%', overflowX: 'auto' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Estudio</TableCell>
                <TableCell align="right">Edad</TableCell>
                <TableCell>Actividades</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    {row.Nombre}
                  </TableCell>
                  <TableCell>{row.Estudio}</TableCell>
                  <TableCell align="right">{row.Edad}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {row.Actividades.map((act, i) => (
                        <Chip key={i} label={act} size="small" variant="outlined" color="primary" sx={{ fontFamily: '"Space Grotesk", monospace' }} />
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <DeleteRecordButton id={row.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
