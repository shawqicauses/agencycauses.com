// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {FileIcon, X} from "lucide-react"
import Image from "next/image"
import {UploadDropzone} from "../../lib/uploadthing"
import {Button} from "../ui"

/* eslint no-unused-vars: "off" */
type FileUploaderProps = {
  resource: "avatar" | "agencyLogo" | "subAccountLogo"
  value?: string
  onChange: (url?: string) => void
}

const FileUploader = function FileUploader({resource, value, onChange}: FileUploaderProps) {
  const type = value?.split(".").pop()
  if (value)
    return (
      <div className="flex flex-col items-center justify-center">
        {type !== "PDF".toLowerCase() ? (
          <div className="relative h-40 w-40">
            <Image src={value} alt="File Uploader Image" fill className="object-contain" />
          </div>
        ) : (
          <div className="relative mt-2 flex items-center rounded-md bg-background p-2">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-sm text-primary hover:underline">
              View PDF
            </a>
          </div>
        )}
        <Button type="button" variant="outline">
          <X className="h-4 w-4" />
          Remove
        </Button>
      </div>
    )

  return (
    <div className="w-full rounded-md bg-background">
      <UploadDropzone
        endpoint={resource}
        onClientUploadComplete={(response) => onChange(response?.[0].url)}
        onUploadError={(error) => {
          throw new Error(error.message)
        }}
      />
    </div>
  )
}

export default FileUploader
