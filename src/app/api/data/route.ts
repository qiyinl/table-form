import { NextResponse } from 'next/server';
import { getData, insertRecord, deleteRecord, RecordItem } from '@/lib/data';

export async function GET() {
  const records = await getData();
  return NextResponse.json(records);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const newRecord: RecordItem = {
    id: Date.now().toString() + Math.random().toString(36).substring(7),
    Nombre: body.Nombre || '',
    Estudio: body.Estudio || '',
    Edad: parseInt(body.Edad) || 0,
    Actividades: body.Actividades || [],
  };
  
  try {
    await insertRecord(newRecord);
    return NextResponse.json({ success: true, record: newRecord });
  } catch (error) {
    console.error('Failed to insert record:', error);
    return NextResponse.json({ error: 'Failed to insert record' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  
  try {
    await deleteRecord(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete record:', error);
    return NextResponse.json({ error: 'Failed to delete record' }, { status: 500 });
  }
}
