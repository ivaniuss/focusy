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

      // Validar tamaño de archivo (por ejemplo, máximo 100 MB)
      const maxFileSize = 100 * 1024 * 1024; // 100 MB
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

    // Crear el buffer a partir del archivo subido
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Subir el archivo a Cloudinary usando un stream
    const uploadResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { 
          resource_type: 'raw', // Para archivos crudos como GLB
          public_id: 'cubohueco', // Sobrescribir siempre el mismo archivo
          overwrite: true, // Asegura que el archivo sea reemplazado
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      );

      // Escribir el buffer en el stream de Cloudinary
      uploadStream.end(buffer);
    });

    return Response.json({
      ok: true,
      message: 'File uploaded successfully to Cloudinary',
      url: uploadResponse.secure_url, // URL del archivo subido
      fileName: file.name,
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return Response.json({ ok: false, error: 'An unexpected error occurred', message: error.message });
  }
}
