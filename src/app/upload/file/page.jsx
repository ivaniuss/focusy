"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, File } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Simulación de archivos existentes
const existingFiles = [
  { id: "1", name: "document1.pdf" },
  { id: "2", name: "image1.jpg" },
  { id: "3", name: "spreadsheet1.xlsx" },
]

const FileUploadComponent = () => {
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [uploadType, setUploadType] = useState("new")
  const [selectedExistingFile, setSelectedExistingFile] = useState("")

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('uploadType', uploadType);
    // Here would be the logic to upload the file
    console.log('page', { file, username, password, uploadType, selectedExistingFile })
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('data', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive ? "border-primary bg-primary/10" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {file ? (
          <div className="flex items-center justify-center space-x-2">
            <File className="h-6 w-6 text-primary" />
            <span className="font-medium">{file.name}</span>
          </div>
        ) : (
          <div>
            <Upload className="h-10 w-10 text-gray-400 mb-2 mx-auto" />
            <p className="text-sm text-gray-600">Arrastra y suelta un archivo aquí, o haz clic para seleccionarlo</p>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Usuario</Label>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <RadioGroup value={uploadType} onValueChange={setUploadType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="new" id="new" />
          <Label htmlFor="new">Nuevo archivo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="replace" id="replace" />
          <Label htmlFor="replace">Reemplazar existente</Label>
        </div>
      </RadioGroup>

      {uploadType === "replace" && (
        <div className="space-y-2">
          <Label htmlFor="existing-file">Selecciona archivo a reemplazar</Label>
          <Select value={selectedExistingFile} onValueChange={setSelectedExistingFile}>
            <SelectTrigger id="existing-file">
              <SelectValue placeholder="Selecciona un archivo" />
            </SelectTrigger>
            <SelectContent>
              {existingFiles.map((file) => (
                <SelectItem key={file.id} value={file.id}>
                  {file.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <Button type="submit" className="w-full">
        Subir archivo
      </Button>
    </form>
    </div>
    
  )
}

export default FileUploadComponent