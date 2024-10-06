// src/app/api/upload/route.js

import fs from 'fs';
import path from 'path';
import cloudinary from 'cloudinary';

// Configura Cloudinary con las variables de entorno
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ ok: true, message: 'Hello, World!' });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const username = formData.get('username');
    const password = formData.get('password');

    // Validaciones
    const errors = [];

    if (!file) {
      errors.push('No file provided');
    } else {
      // Validar tipo de archivo
      const allowedTypes = ['model/gltf-binary', 'application/octet-stream']; // Ajusta según tus necesidades
      if (!allowedTypes.includes(file.type)) {
        errors.push('Invalid file type. Only GLB files are allowed.');
      }

      // Validar tamaño de archivo (por ejemplo, máximo 5 MB)
      const maxFileSize = 100 * 1024 * 1024; // 5 MB
      if (file.size > maxFileSize) {
        errors.push('File size exceeds the limit of 100MB.');
      }
    }

    if (!username) {
      errors.push('No username provided');
    }

    if (!password) {
      errors.push('No password provided');
    }

    // Verificar credenciales
    if (username !== 'focusy' || password !== 'focus1') {
      errors.push('Invalid credentials');
    }

    // Si hay errores, devolverlos
    if (errors.length > 0) {
      return Response.json({ ok: false, errors });
    }

    const uploadDir = path.join(process.cwd(), 'public');

    // Asegúrate de que el directorio de carga existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // const filePath = path.join(uploadDir, 'cubohueco.glb');

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        { 
          resource_type: 'raw', // Tipo de archivo crudo (GLB, PDF, ZIP, etc.)
          public_id: 'cubohueco.glb', // Este es el mismo public_id que se usará para sobrescribir
          overwrite: true // Esto asegura que el archivo sea sobrescrito si ya existe
        }, 
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    return Response.json({
      ok: true,
      message: 'File uploaded successfully to Cloudinary',
      url: uploadResponse.secure_url, // URL del archivo subido
      fileName: file.name,
    });

    // fs.writeFileSync(filePath, buffer);
    // return Response.json({ ok: true, message: 'File uploaded successfully', fileName: file.name });
    
  } catch (error) {
    console.error('Error uploading file:', error);
    return Response.json({ ok: false, error: 'An unexpected error occurred', message: error.message });
  }
}
