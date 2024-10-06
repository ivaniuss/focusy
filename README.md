This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```mermaid
graph TD;
    %% Frontend
    Start([Inicio]) -->|Usuario selecciona archivo o arrastra| FileSelection[Seleccionar archivo]
    FileSelection --> CheckFileType[Verificar tipo de archivo]
    CheckFileType -->|Tipo válido| UploadType[Seleccionar tipo de subida]
    UploadType -->|Nuevo archivo| NewFileFrontend[Nuevo archivo]
    UploadType -->|Reemplazar existente| ReplaceFileFrontend[Seleccionar archivo existente a reemplazar]

    %% Backend
    NewFileFrontend -->|Enviar archivo a backend| SendToBackend[POST /upload]
    ReplaceFileFrontend -->|Enviar archivo y ID del archivo a reemplazar| SendToBackendReplace[POST /replace]

    %% Procesamiento Backend
    SendToBackend --> ValidateFileBackend[Verificar archivo y tamaño]
    SendToBackendReplace --> ValidateFileBackend
    ValidateFileBackend -->|Archivo válido| StoreFileBackend[Guardar archivo en servidor]
    ValidateFileBackend -->|Archivo inválido| ErrorBackend[Devolver error]

    StoreFileBackend --> UpdateDatabaseBackend[Actualizar base de datos con la nueva ruta del archivo]
    UpdateDatabaseBackend --> SuccessResponseBackend[Devolver respuesta de éxito al frontend]

    %% Frontend Resultados
    SuccessResponseBackend --> ShowSuccessFrontend[Mostrar mensaje de éxito al usuario]
    ErrorBackend --> ShowErrorFrontend[Mostrar error de validación al usuario]
```

```mermaid
sequenceDiagram
    participant Usuario
    participant Frontend
    participant Backend
    participant BaseDeDatos

    %% Usuario selecciona archivo en el frontend
    Usuario->>Frontend: Selecciona/arrastra un archivo
    Frontend-->>Usuario: Muestra archivo seleccionado

    %% Usuario rellena información y envía
    Usuario->>Frontend: Rellena información (usuario, contraseña, tipo de subida)
    Usuario->>Frontend: Envía formulario (subir archivo)
    Frontend->>Frontend: Verifica tipo y tamaño de archivo
    Frontend->>Backend: POST /upload con archivo e información

    %% Backend recibe el archivo
    Backend->>Backend: Verifica archivo (tipo, tamaño)
    Backend->>BaseDeDatos: Validar si es reemplazo o nuevo archivo
    alt Nuevo archivo
        BaseDeDatos-->>Backend: Insertar nueva entrada en base de datos
    else Reemplazo de archivo
        BaseDeDatos-->>Backend: Actualizar archivo existente
    end
    
    %% Backend guarda el archivo y actualiza base de datos
    Backend->>Backend: Guarda archivo en servidor o nube
    Backend->>BaseDeDatos: Actualiza base de datos con ruta del archivo
    BaseDeDatos-->>Backend: Confirmación de éxito

    %% Respuesta al frontend
    Backend->>Frontend: Respuesta de éxito o error

    %% Frontend muestra resultado
    Frontend-->>Usuario: Muestra mensaje de éxito o error
```