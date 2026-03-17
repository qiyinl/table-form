import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const dataFilePath = path.join(dataDir, 'data.json');

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
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}
