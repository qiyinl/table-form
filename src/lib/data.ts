import { query } from './db';

export interface RecordItem {
  id: string;
  Nombre: string;
  Estudio: string;
  Edad: number;
  Actividades: string[];
}

export async function getData(): Promise<RecordItem[]> {
  try {
    const res = await query('SELECT * FROM records ORDER BY "id" DESC');
    return res.rows.map(row => ({
      id: row.id,
      Nombre: row.Nombre,
      Estudio: row.Estudio,
      Edad: row.Edad,
      Actividades: typeof row.Actividades === 'string' ? JSON.parse(row.Actividades) : row.Actividades,
    }));
  } catch (err) {
    console.error('Error fetching records Postgres:', err);
    return [];
  }
}

export async function insertRecord(record: RecordItem) {
  const text = `
    INSERT INTO records ("id", "Nombre", "Estudio", "Edad", "Actividades")
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [record.id, record.Nombre, record.Estudio, record.Edad, JSON.stringify(record.Actividades)];
  await query(text, values);
}

export async function deleteRecord(id: string) {
  const text = `DELETE FROM records WHERE "id" = $1`;
  await query(text, [id]);
}
