// DONE REVIEWING: GITHUB COMMIT
import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({className, ...props}, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)

CardDescription.displayName = "CardDescription"
export default CardDescription
