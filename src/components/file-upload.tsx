"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, File } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

// Simulation of existing files
const existingFiles = [
  { id: "1", name: "document1.pdf" },
  { id: "2", name: "image1.jpg" },
  { id: "3", name: "spreadsheet1.xlsx" },
]

export function FileUploadComponent() {
  const [file, setFile] = useState<File | null>(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [uploadType, setUploadType] = useState("new")
  const [selectedExistingFile, setSelectedExistingFile] = useState("")

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here would be the logic to upload the file
    console.log({ file, username, password, uploadType, selectedExistingFile })
    toast({
      title: "File uploaded",
      description: `Name: ${file?.name}, Type: ${uploadType}${
        uploadType === "replace" ? `, Replacing: ${selectedExistingFile}` : ""
      }`,
    })
  }

  return (
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
            <p className="text-sm text-gray-600">Drag and drop a file here, or click to select</p>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
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
          <Label htmlFor="new">New file</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="replace" id="replace" />
          <Label htmlFor="replace">Replace existing</Label>
        </div>
      </RadioGroup>

      {uploadType === "replace" && (
        <div className="space-y-2">
          <Label htmlFor="existing-file">Select file to replace</Label>
          <Select value={selectedExistingFile} onValueChange={setSelectedExistingFile}>
            <SelectTrigger id="existing-file">
              <SelectValue placeholder="Select a file" />
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
        Upload file
      </Button>
    </form>
  )
}