import { NextResponse } from 'next/server';
import { getData, saveData, RecordItem } from '@/lib/data';

export async function GET() {
  const records = getData();
  return NextResponse.json(records);
}

export async function POST(request: Request) {
  const body = await request.json();
  const records = getData();
  
  const newRecord: RecordItem = {
    id: Date.now().toString() + Math.random().toString(36).substring(7),
    Nombre: body.Nombre || '',
    Estudio: body.Estudio || '',
    Edad: parseInt(body.Edad) || 0,
    Actividades: body.Actividades || [],
  };
  
  records.push(newRecord);
  saveData(records);
  
  return NextResponse.json({ success: true, record: newRecord });
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  
  const records = getData();
  const filtered = records.filter(r => r.id !== id);
  saveData(filtered);
  
  return NextResponse.json({ success: true });
}
