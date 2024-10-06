// src/app/api/upload/route.js

import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ ok: true, message: 'Hello, World!' });
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');
  const username = formData.get('username');
  const password = formData.get('password');
  const uploadType = formData.get('uploadType');

  console.log('api', { file, username, password, uploadType });

  if (!file) {
    return Response.json({ ok: false, error: 'No file provided' });
  }

  if (!username) {
    return Response.json({ ok: false, error: 'No username provided' });
  }

  if (!password) {
    return Response.json({ ok: false, error: 'No password provided' });
  }

  if (!uploadType) {
    return Response.json({ ok: false, error: 'No uploadType provided' });
  }

  // Verificar credenciales
  if (username !== 'focusy' || password !== 'focus1') {
    return Response.json({ ok: false, error: 'Invalid credentials' });
  }

  const uploadDir = path.join(process.cwd(), 'public');

  // Asegúrate de que el directorio de carga existe
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  } 
    const filePath = path.join(uploadDir, 'cubohueco.glb');

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(filePath, buffer);
    return Response.json({ ok: true, message: 'File uploaded successfully', fileName: file.name });
}
