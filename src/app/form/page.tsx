'use client';

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';

export default function FormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Nombre: '',
    Estudio: '',
    Edad: '',
    Actividades: [''],
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddActivity = () => {
    setFormData((prev) => ({
      ...prev,
      Actividades: [...prev.Actividades, ''],
    }));
  };

  const handleRemoveActivity = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      Actividades: prev.Actividades.filter((_, i) => i !== index),
    }));
  };

  const handleActivityChange = (index: number, value: string) => {
    const newActividades = [...formData.Actividades];
    newActividades[index] = value;
    setFormData((prev) => ({ ...prev, Actividades: newActividades }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Filter out empty activities
      const submissionData = {
        ...formData,
        Actividades: formData.Actividades.filter(a => a.trim() !== ''),
        Edad: parseInt(formData.Edad) || 0
      };

      const res = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ Nombre: '', Estudio: '', Edad: '', Actividades: [''] });
        setTimeout(() => {
          router.push('/table');
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: { xs: 2, md: 4 }, width: { xs: '95%', sm: '90%', md: '70%' }, maxWidth: 'none', mx: 'auto' }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ fontSize: { xs: '2.75rem', md: '3.75rem' }, wordBreak: 'break-word', lineHeight: 1.1 }}>
        DATA ENTRY
      </Typography>
      <Typography variant="body1" sx={{ mb: { xs: 3, md: 4 } }}>
        Input records into the system. Support for dynamic activities.
      </Typography>

      <Paper elevation={1} sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            <TextField 
              label="Nombre" 
              variant="outlined" 
              fullWidth 
              required
              value={formData.Nombre}
              onChange={(e) => setFormData({ ...formData, Nombre: e.target.value })}
            />
            
            <TextField 
              label="Estudio" 
              variant="outlined" 
              fullWidth 
              required
              value={formData.Estudio}
              onChange={(e) => setFormData({ ...formData, Estudio: e.target.value })}
            />
            
            <TextField 
              label="Edad" 
              type="number"
              variant="outlined" 
              fullWidth 
              required
              value={formData.Edad}
              onChange={(e) => setFormData({ ...formData, Edad: e.target.value })}
            />
            
            <Box sx={{ gridColumn: '1 / -1' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Actividades
                </Typography>
                <Button 
                  startIcon={<AddIcon />} 
                  variant="outlined" 
                  color="secondary"
                  onClick={handleAddActivity}
                  size="small"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  ADD ACTIVE
                </Button>
              </Box>

              {formData.Actividades.map((act, index) => (
                <Box key={index} sx={{ display: 'flex', gap: { xs: 1, md: 2 }, mb: 2, alignItems: 'center' }}>
                  <TextField 
                    label={`Actividad ${index + 1}`} 
                    variant="outlined" 
                    fullWidth 
                    required={index === 0}
                    value={act}
                    onChange={(e) => handleActivityChange(index, e.target.value)}
                  />
                  {formData.Actividades.length > 1 && (
                    <IconButton color="error" onClick={() => handleRemoveActivity(index)}>
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: { xs: 4, md: 5 }, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              size="large"
              disabled={loading}
              sx={{ px: { xs: 4, md: 6 }, py: 1.5, width: { xs: '100%', sm: 'auto' } }}
            >
              {loading ? 'STORING...' : 'SUBMIT RECORD'}
            </Button>
          </Box>
        </form>
      </Paper>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: '100%', fontFamily: '"Space Grotesk", sans-serif' }}>
          Record saved successfully! Routing to Table...
        </Alert>
      </Snackbar>
    </Box>
  );
}
