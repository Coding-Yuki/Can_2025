import Image from "next/image"
import { countryFlags, getFlagUrl } from "@/lib/country-flags"
import { cn } from "@/lib/utils"

interface CountryFlagProps {
  code: string
  size?: "sm" | "md" | "lg"
  className?: string
  showName?: boolean
}

const sizes = {
  sm: { width: 24, height: 16 },
  md: { width: 40, height: 28 },
  lg: { width: 64, height: 44 },
}

export function CountryFlag({ code, size = "md", className, showName = false }: CountryFlagProps) {
  const country = countryFlags[code]
  const { width, height } = sizes[size]
  const flagUrl = getFlagUrl(code, size)

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative overflow-hidden rounded-sm shadow-sm ring-1 ring-black/10" style={{ width, height }}>
        <Image
          src={flagUrl || "/placeholder.svg"}
          alt={country?.name || code}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      {showName && <span className="font-medium">{country?.name || code}</span>}
    </div>
  )
}
