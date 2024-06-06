// DONE REVIEWING: GITHUB COMMIT
import {createNextRouteHandler} from "uploadthing/next"
import {FileRouter} from "./core"

export const {GET, POST} = createNextRouteHandler({router: FileRouter})
