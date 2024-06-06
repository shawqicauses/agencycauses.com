// DONE REVIEWING: GITHUB COMMIT
import {generateComponents} from "@uploadthing/react"
import {generateReactHelpers} from "@uploadthing/react/hooks"

export const {Uploader, UploadDropzone, UploadButton} = generateComponents()
export const {uploadFiles, useUploadThing} = generateReactHelpers()
