import { cn } from "@/lib/utils"

interface CANLogoProps {
  className?: string
  variant?: "full" | "icon" | "text"
  theme?: "light" | "dark"
}

export function CANLogo({ className, variant = "full", theme = "dark" }: CANLogoProps) {
  const primaryColor = theme === "dark" ? "#FFFFFF" : "#8B1538"
  const secondaryColor = "#006233"
  const accentColor = "#D4AF37"

  if (variant === "icon") {
    return (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-10 w-10", className)}>
        {/* Trophy base */}
        <path d="M20 45 L25 30 L35 30 L40 45 Z" fill={primaryColor} />
        {/* Trophy cup */}
        <path d="M15 10 L15 25 C15 32 22 38 30 38 C38 38 45 32 45 25 L45 10 Z" fill={primaryColor} />
        {/* Moroccan star */}
        <path
          d="M30 15 L32 21 L38 21 L33 25 L35 31 L30 27 L25 31 L27 25 L22 21 L28 21 Z"
          fill={secondaryColor}
          stroke={secondaryColor}
          strokeWidth="1"
        />
        {/* Africa outline hint */}
        <circle cx="30" cy="8" r="3" fill={accentColor} />
      </svg>
    )
  }

  if (variant === "text") {
    return (
      <div className={cn("flex flex-col", className)}>
        <span
          className="text-2xl font-bold tracking-tight leading-none"
          style={{ color: primaryColor, fontFamily: "var(--font-bebas)" }}
        >
          CAN 2025
        </span>
        <span className="text-xs tracking-widest uppercase" style={{ color: secondaryColor }}>
          Morocco Hub
        </span>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
        <path d="M20 45 L25 30 L35 30 L40 45 Z" fill={primaryColor} />
        <path d="M15 10 L15 25 C15 32 22 38 30 38 C38 38 45 32 45 25 L45 10 Z" fill={primaryColor} />
        <path
          d="M30 15 L32 21 L38 21 L33 25 L35 31 L30 27 L25 31 L27 25 L22 21 L28 21 Z"
          fill={secondaryColor}
          stroke={secondaryColor}
          strokeWidth="1"
        />
        <circle cx="30" cy="8" r="3" fill={accentColor} />
      </svg>
      <div className="flex flex-col">
        <span
          className="text-2xl font-bold tracking-tight leading-none"
          style={{ color: primaryColor, fontFamily: "var(--font-bebas)" }}
        >
          CAN MOROCCO 2025
        </span>
        <span className="text-xs tracking-widest uppercase" style={{ color: secondaryColor }}>
          Africa Cup of Nations Hub
        </span>
      </div>
    </div>
  )
}
