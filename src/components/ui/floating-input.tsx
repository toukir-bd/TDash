import * as React from "react"
import { cn } from "@/lib/utils"

/* ------------------------------------
   Types
------------------------------------ */
export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>

/* ------------------------------------
   Floating Input
------------------------------------ */
const FloatingInput = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      placeholder=" "
      className={cn(
        "peer block w-full h-[50px] rounded-md border border-input bg-background px-3 py-3 text-sm",
        "focus:outline-none focus:ring-0 focus:border-primary",
        className
      )}
      {...props}
    />
  )
})
FloatingInput.displayName = "FloatingInput"

/* ------------------------------------
   Floating Label
------------------------------------ */
type FloatingLabelProps =
  React.LabelHTMLAttributes<HTMLLabelElement>

const FloatingLabel = React.forwardRef<
  HTMLLabelElement,
  FloatingLabelProps
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "pointer-events-none absolute left-3 top-[16px] z-10",
        "transition-all bg-background px-1 text-sm text-muted-foreground",
        "transition-all duration-200",

        // FLOAT on focus
        "peer-focus:-top-[8px] peer-focus:left-3 peer-focus:transition-all peer-focus:text-[11px] peer-focus:text-primary",

        // FLOAT when has value
        "peer-[&:not(:placeholder-shown)]:-top-[8px]",
        "peer-[&:not(:placeholder-shown)]:left-3",
        "peer-[&:not(:placeholder-shown)]:transition-all",
        "peer-[&:not(:placeholder-shown)]:text-[11px]",

        className
      )}
      {...props}
    />
  )
})
FloatingLabel.displayName = "FloatingLabel"

/* ------------------------------------
   Combined Component
------------------------------------ */
type FloatingLabelInputProps = InputProps & {
  label: string
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ id, label, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  )
})

FloatingLabelInput.displayName = "FloatingLabelInput"

export { FloatingLabelInput }
