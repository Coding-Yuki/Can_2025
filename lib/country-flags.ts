export const countryFlags: Record<string, { name: string; flag: string }> = {
  MAR: { name: "Maroc", flag: "https://flagcdn.com/w80/ma.png" },
  MLI: { name: "Mali", flag: "https://flagcdn.com/w80/ml.png" },
  COM: { name: "Comores", flag: "https://flagcdn.com/w80/km.png" },
  ZAM: { name: "Zambie", flag: "https://flagcdn.com/w80/zm.png" },
  SEN: { name: "Senegal", flag: "https://flagcdn.com/w80/sn.png" },
  CMR: { name: "Cameroun", flag: "https://flagcdn.com/w80/cm.png" },
  GUI: { name: "Guinee", flag: "https://flagcdn.com/w80/gn.png" },
  ANG: { name: "Angola", flag: "https://flagcdn.com/w80/ao.png" },
  NGA: { name: "Nigeria", flag: "https://flagcdn.com/w80/ng.png" },
  EGY: { name: "Egypte", flag: "https://flagcdn.com/w80/eg.png" },
  CPV: { name: "Cap-Vert", flag: "https://flagcdn.com/w80/cv.png" },
  GNB: { name: "Guinee-Bissau", flag: "https://flagcdn.com/w80/gw.png" },
  ALG: { name: "Algerie", flag: "https://flagcdn.com/w80/dz.png" },
  CIV: { name: "Cote d'Ivoire", flag: "https://flagcdn.com/w80/ci.png" },
  COD: { name: "RD Congo", flag: "https://flagcdn.com/w80/cd.png" },
  GAB: { name: "Gabon", flag: "https://flagcdn.com/w80/ga.png" },
  GHA: { name: "Ghana", flag: "https://flagcdn.com/w80/gh.png" },
  TUN: { name: "Tunisie", flag: "https://flagcdn.com/w80/tn.png" },
  RSA: { name: "Afrique du Sud", flag: "https://flagcdn.com/w80/za.png" },
  BFA: { name: "Burkina Faso", flag: "https://flagcdn.com/w80/bf.png" },
  BEN: { name: "Benin", flag: "https://flagcdn.com/w80/bj.png" },
  MOZ: { name: "Mozambique", flag: "https://flagcdn.com/w80/mz.png" },
  UGA: { name: "Ouganda", flag: "https://flagcdn.com/w80/ug.png" },
  TAN: { name: "Tanzanie", flag: "https://flagcdn.com/w80/tz.png" },
  SUD: { name: "Soudan", flag: "https://flagcdn.com/w80/sd.png" },
  BOT: { name: "Botswana", flag: "https://flagcdn.com/w80/bw.png" },
  ZIM: { name: "Zimbabwe", flag: "https://flagcdn.com/w80/zw.png" },
}

export function getFlagUrl(code: string, size: "sm" | "md" | "lg" = "md"): string {
  const widths = { sm: 40, md: 80, lg: 160 }
  const baseCode = countryFlags[code]
  if (!baseCode) return `https://flagcdn.com/w${widths[size]}/xx.png`
  return baseCode.flag.replace("w80", `w${widths[size]}`)
}
