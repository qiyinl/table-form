import fs from 'fs';
import os from 'os';
import path from 'path';

const dataFilePath = path.join(os.tmpdir(), 'table-form-data.json');

export interface RecordItem {
  id: string;
  Nombre: string;
  Estudio: string;
  Edad: number;
  Actividades: string[];
}

export function getData(): RecordItem[] {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
  try {
    return JSON.parse(fileContent) as RecordItem[];
  } catch (e) {
    return [];
  }
}

export function saveData(data: RecordItem[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}
