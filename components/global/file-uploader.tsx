// DONE REVIEWING: GITHUB COMMIT
import {FileIcon, X} from "lucide-react"
import Image from "next/image"
import {Button} from "../ui"

type FileUploaderProps = {
  resource: "avatar_url" | "logo_url"
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
          <div className="bg-background/10 relative mt-2 flex items-center rounded-md p-2">
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

  return <div className="bg-muted/30 w-full" />
}

export default FileUploader
