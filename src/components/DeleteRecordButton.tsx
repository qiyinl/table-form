'use client';

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';

export default function DeleteRecordButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/data?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        // Refresh the server component to fetch latest data
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <IconButton 
      color="error" 
      onClick={handleDelete}
      disabled={loading}
      aria-label="delete record"
    >
      <DeleteIcon />
    </IconButton>
  );
}
