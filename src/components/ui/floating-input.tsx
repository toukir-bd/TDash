
import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

/* ------------------------------------
   Types
------------------------------------ */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

/* ------------------------------------
   Floating Input
------------------------------------ */
const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder=" "
        className={cn(
          "peer block w-full h-[50px] rounded-md border border-input bg-white dark:bg-slate-800 px-3 py-3 text-sm text-slate-900 dark:text-slate-100",
          "focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-primary",
          "placeholder-transparent",
          className
        )}
        {...props}
      />
    )
  }
)
FloatingInput.displayName = "FloatingInput"

/* ------------------------------------
   Floating Label
------------------------------------ */
type FloatingLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const FloatingLabel = React.forwardRef<HTMLLabelElement, FloatingLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "pointer-events-none absolute left-3 top-[16px] z-10",
          "transition-all bg-white dark:bg-slate-800 px-1 text-sm text-slate-500 dark:text-slate-400",
          "peer-focus:-top-[8px] peer-focus:left-3 peer-focus:transition-all peer-focus:text-[11px] peer-focus:text-primary",
          "peer-[&:not(:placeholder-shown)]:-top-[8px]",
          "peer-[&:not(:placeholder-shown)]:left-3",
          "peer-[&:not(:placeholder-shown)]:transition-all",
          "peer-[&:not(:placeholder-shown)]:text-[11px]",
          className
        )}
        {...props}
      />
    )
  }
)
FloatingLabel.displayName = "FloatingLabel"

/* ------------------------------------
   Combined Component
------------------------------------ */
type FloatingLabelInputProps = InputProps & {
  label: string
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ id, label, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"
    return (
      <div className="relative">
        <FloatingInput ref={ref} id={id} type={isPassword && showPassword ? "text" : type} {...props} />
        <FloatingLabel htmlFor={id}>{label}</FloatingLabel>

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    )
  }
)

FloatingLabelInput.displayName = "FloatingLabelInput"

export { FloatingLabelInput }
